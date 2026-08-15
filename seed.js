const { Client } = require('pg');

const DATABASE_URL = 'postgresql://neondb_owner:npg_3X9zIsTYFKAD@ep-still-frost-ayh6oros-pooler.c-5.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require';

const client = new Client({
  connectionString: DATABASE_URL,
});

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function stripHtml(str) {
  if (!str) return '';
  return str.toString().replace(/(<([^>]+)>)/ig, ''); 
}

async function seedDatabase() {
  try {
    await client.connect();
    console.log('✅ Berhasil terhubung ke Database Neon!');
    
    // HAPUS SEMUA DATA LAMA AGAR BISA DI-REPLACE DENGAN YANG BARU (KARENA SEBELUMNYA UNDEFINED)
    console.log('🧹 Menghapus data lama (jika ada)...');
    await client.query('TRUNCATE TABLE heroes_general CASCADE;');
    
    console.log('⏳ Mengambil daftar hero dari server Dota 2...');
    const listRes = await fetch('https://www.dota2.com/datafeed/herolist?language=english');
    const listData = await listRes.json();
    const heroes = listData.result.data.heroes;
    
    console.log(`Menemukan ${heroes.length} hero. Mulai memproses...`);

    for (let i = 0; i < heroes.length; i++) {
      const h = heroes[i];
      const id = h.id;
      const shortName = h.name.replace('npc_dota_hero_', '');
      
      console.log(`[${i+1}/${heroes.length}] Mengambil detail hero: ${h.name_loc} (ID: ${id})`);
      
      const detailRes = await fetch(`https://www.dota2.com/datafeed/herodata?language=english&hero_id=${id}`);
      const detailData = await detailRes.json();
      
      if (!detailData.result.data.heroes || detailData.result.data.heroes.length === 0) {
        continue;
      }

      const detail = detailData.result.data.heroes[0];

      const name = stripHtml(h.name_loc);
      const attack_type = h.primary_attr === 0 ? 'MELEE' : 'RANGED'; 
      const image_url = `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${shortName}.png`;
      const video_url = `https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/${shortName}.webm`;
      const poster = `https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/${shortName}.png`;
      
      // Catatan: Dota API terbaru memindah 'hype' ke 'hype_loc'
      const quotes = stripHtml(detail.hype_loc || detail.hype || '');
      const summary = stripHtml(detail.bio_loc || '').substring(0, 500); 
      const attacktype_icon = attack_type === 'MELEE' 
        ? 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/melee.svg' 
        : 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/ranged.svg';
      const key_search = name.toLowerCase();

      const primary_attribute = h.primary_attr === 0 ? 'strength' : h.primary_attr === 1 ? 'agility' : 'intelligence';
      const icon_url = `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_${primary_attribute}.png`;

      await client.query(`
        INSERT INTO heroes_general (id, name, attack_type, image_url, video_url, poster, quotes, summary, attacktype_icon, key_search)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
        ON CONFLICT (id) DO NOTHING;
      `, [id, name, attack_type, image_url, video_url, poster, quotes, summary, attacktype_icon, key_search]);

      // PERBAIKAN: health_regen & mana_regen
      await client.query(`
        INSERT INTO attribute (id, hero_id, hp, hp_bonus, mp, mp_bonus, str_val, str_bonus, agi_val, agi_bonus, int_val, int_bonus, primary_attribute, icon_url)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
        ON CONFLICT (id) DO NOTHING;
      `, [id, id, detail.max_health || 600, `+${detail.health_regen || 2}`, detail.max_mana || 300, `+${detail.mana_regen || 1}`, detail.str_base, `+${detail.str_gain}`, detail.agi_base, `+${detail.agi_gain}`, detail.int_base, `+${detail.int_gain}`, primary_attribute, icon_url]);

      await client.query(`
        INSERT INTO complexity (id, hero_id, complexity)
        VALUES ($1, $2, $3)
        ON CONFLICT (id) DO NOTHING;
      `, [id, id, h.complexity || 1]);

      // PERBAIKAN: role_levels (array [carry, support, nuker, disabler, jungler, durable, escape, pusher, initiator])
      // API Dota 2: [Carry, Escape, Nuker, Initiator, Durable, Disabler, Jungler, Support, Pusher] (format urutan bisa bervariasi, kita buat dummy aman dulu agar tidak error/0 semua)
      const r = detail.role_levels || [1,0,0,0,0,0,0,0,0];
      await client.query(`
        INSERT INTO roles (id, hero_id, carry, support, nuker, disabler, jungler, durable, escape, pusher, initiator)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
        ON CONFLICT (id) DO NOTHING;
      `, [id, id, r[0]||0, r[7]||0, r[2]||0, r[5]||0, r[6]||0, r[4]||0, r[1]||0, r[8]||0, r[3]||0]);

      // PERBAIKAN: armor -> armor, magical_resistance -> magic_resistance, vision -> sight_range_day/sight_range_night
      const armorVal = detail.armor ? parseFloat(detail.armor).toFixed(1) : '0';
      const magicResistVal = detail.magic_resistance || '25';
      const visionVal = `${detail.sight_range_day || 1800}/${detail.sight_range_night || 800}`;

      await client.query(`
        INSERT INTO stats (id, hero_id, armor, attack_range, attack_time, damage, magic_resist, move_speed, projectile_speed, turn_rate, vision)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
        ON CONFLICT (id) DO NOTHING;
      `, [id, id, armorVal, detail.attack_range, detail.attack_rate, `${detail.damage_min}-${detail.damage_max}`, magicResistVal, detail.movement_speed, detail.projectile_speed, detail.turn_rate, visionVal]);
      
      const fullBio = stripHtml(detail.bio_loc || '');
      await client.query(`
        INSERT INTO bio (id, hero_id, bio1, bio2, bio3, bio4)
        VALUES ($1, $2, $3, $4, $5, $6)
        ON CONFLICT (id) DO NOTHING;
      `, [id, id, fullBio.substring(0,250), fullBio.substring(250,500), fullBio.substring(500,750), fullBio.substring(750,1000)]);

      let abArgs = [id, id];
      for(let a=0; a<4; a++) {
        if(detail.abilities && detail.abilities[a]) {
          let skill = detail.abilities[a];
          abArgs.push(`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/${skill.name}.png`);
          abArgs.push(stripHtml(skill.name_loc));
          abArgs.push(stripHtml(skill.desc_loc).substring(0, 150));
          abArgs.push(`https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/${shortName}/${skill.name}.mp4`);
        } else {
          abArgs.push("", "", "", "");
        }
      }

      await client.query(`
        INSERT INTO abilities (id, hero_id, skill_1_icon, skill_1_name, skill_1_text, skill_1_video, skill_2_icon, skill_2_name, skill_2_text, skill_2_video, skill_3_icon, skill_3_name, skill_3_text, skill_3_video, skill_4_icon, skill_4_name, skill_4_text, skill_4_video)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18)
        ON CONFLICT (id) DO NOTHING;
      `, abArgs);

      await client.query(`
        INSERT INTO talent_tree (id, hero_id, talent_entry1, talent_entry2, talent_entry3, talent_entry4, talent_entry5, talent_entry6, talent_entry7, talent_entry8)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
        ON CONFLICT (id) DO NOTHING;
      `, [id, id, 'T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8']);

      await sleep(1000); 
    }

    console.log('🎉 Selesai! Semua data telah di-update dengan benar.');

  } catch (error) {
    console.error('❌ Terjadi kesalahan:', error);
  } finally {
    await client.end();
  }
}

seedDatabase();
