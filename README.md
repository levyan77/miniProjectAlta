# 🎮 Dota 2 Web Portal — miniProjectAlta

> Clone/replika website resmi [Dota 2](https://www.dota2.com/) yang dibangun menggunakan **Nuxt.js 2** sebagai mini project Alterra Academy.

![Nuxt.js](https://img.shields.io/badge/Nuxt.js-2.15-00DC82?logo=nuxt.js&logoColor=white)
![Vue.js](https://img.shields.io/badge/Vue.js-2.6-4FC08D?logo=vue.js&logoColor=white)
![Vuetify](https://img.shields.io/badge/Vuetify-2.6-1867C0?logo=vuetify&logoColor=white)
![GraphQL](https://img.shields.io/badge/GraphQL-Hasura-E10098?logo=graphql&logoColor=white)
![License](https://img.shields.io/badge/license-Private-red)

---

## 📋 Daftar Isi

- [Tentang Project](#-tentang-project)
- [Fitur](#-fitur)
- [Tech Stack](#-tech-stack)
- [Struktur Folder](#-struktur-folder)
- [Prasyarat](#-prasyarat)
- [Menjalankan Secara Lokal](#-menjalankan-secara-lokal)
- [Testing & Linting](#-testing--linting)
- [Deploy Gratis](#-deploy-gratis)
  - [Netlify](#1--netlify-rekomendasi)
  - [Vercel](#2--vercel)
  - [GitHub Pages](#3--github-pages)
- [Environment & API](#-environment--api)
- [Screenshot](#-screenshot)
- [Lisensi](#-lisensi)

---

## 📖 Tentang Project

**miniProjectAlta** adalah web portal bertema Dota 2 yang mereplikasi pengalaman website resmi Dota 2. Aplikasi ini dibangun sebagai Single Page Application (SPA) dengan mode static menggunakan Nuxt.js 2. Data hero diambil dari backend GraphQL (Hasura), sedangkan data berita diambil dari NewsAPI.

---

## ✨ Fitur

### 🏠 Landing Page
- Video montage banner otomatis dari Steam CDN
- Showcase quote hero dengan animasi scroll (AOS)
- Tombol langsung ke Steam Store
- Capsule berita terbaru
- Seksi lore "Join The Battle of the Ancients"
- Marquee animasi portrait hero (vue-dynamic-marquee)

### 🦸 Hero Catalog & Roster (`/heroes`)
- Daftar semua hero dengan gambar portrait
- Filter berdasarkan **Primary Attribute** (Strength, Agility, Intelligence)
- Filter berdasarkan **Complexity** (1–3 diamonds)
- **Pencarian real-time** berdasarkan nama hero
- Hover zoom effect pada kartu hero

### 📄 Hero Detail (`/heroes/:id`)
- Video portrait hero looping
- Lore & biography lengkap (modal toggle)
- Attack type badge & complexity indicator
- **Ability cards** dengan video preview dan tooltip
- **Talent tree** interaktif (level 10, 15, 20, 25)
- Stat bars: HP, Mana, Attributes, Attribute Gain
- Role rating meters (Carry, Support, Nuker, Disabler, dll.)
- Detail statistik: Damage, Armor, Movement Speed, Vision, dll.
- Navigasi Previous / Next hero

### 📰 News Section (`/newsPage`)
- Berita gaming dari NewsAPI
- Pagination "Load More"
- Halaman detail artikel (`/detailsBerita`)
- Link ke sumber artikel asli

---

## 🛠 Tech Stack

| Kategori | Teknologi |
| :--- | :--- |
| **Framework** | [Nuxt.js 2](https://nuxtjs.org/) (SPA / Static) |
| **UI Library** | [Vue.js 2](https://vuejs.org/) |
| **Component Framework** | [Vuetify 2](https://vuetifyjs.com/) |
| **State Management** | [Vuex](https://vuex.vuejs.org/) |
| **GraphQL Client** | [@nuxtjs/apollo](https://github.com/nuxt-community/apollo-module) |
| **GraphQL Backend** | [Hasura](https://hasura.io/) |
| **HTTP Client** | [@nuxtjs/axios](https://axios.nuxtjs.org/) |
| **News API** | [NewsAPI.org](https://newsapi.org/) |
| **Animasi** | [AOS (Animate on Scroll)](https://michalsnik.github.io/aos/), vue-dynamic-marquee |
| **PWA** | [@nuxtjs/pwa](https://pwa.nuxtjs.org/) |
| **Testing** | [Jest](https://jestjs.io/) + [@vue/test-utils](https://test-utils.vuejs.org/) |
| **Linting** | ESLint + Prettier |
| **CI/CD** | GitHub Actions |

---

## 📁 Struktur Folder

```
miniProjectAlta/
├── assets/                  # SCSS variables & uncompiled assets
│   └── variables.scss
├── components/              # Komponen Vue yang reusable
│   ├── headerComp.vue       #   → Navbar utama (logo, navigasi)
│   ├── footerComp.vue       #   → Footer (copyright Valve)
│   ├── blogCapsule.vue      #   → Card berita highlight di homepage
│   └── newsCard.vue         #   → Card berita di halaman news
├── layouts/                 # Layout template Nuxt
│   ├── default.vue          #   → Layout utama (dark Vuetify shell)
│   └── error.vue            #   → Halaman error
├── mixins/                  # Vue mixins
│   └── aos.js               #   → Inisialisasi AOS animation
├── pages/                   # Halaman / routes
│   ├── index.vue            #   → Landing page
│   ├── newsPage.vue         #   → Daftar berita
│   ├── detailsBerita.vue    #   → Detail artikel berita
│   └── heroes/
│       ├── index.vue        #   → Katalog hero (filter & search)
│       └── _id/
│           └── index.vue    #   → Detail hero berdasarkan ID
├── queries/                 # GraphQL queries (Hasura)
│   ├── heroesData.gql       #   → Ambil daftar semua hero
│   ├── heroesByID.gql       #   → Ambil detail hero by ID
│   ├── filterSearch.gql     #   → Filter hero by keyword
│   ├── filterComplexity.gql #   → Filter hero by complexity
│   ├── filterPrimaryAttribute.gql  # → Filter hero by attribute
│   └── specData.gql         #   → Query spesifikasi (template)
├── store/                   # Vuex store
│   ├── index.js             #   → Root store, register module news
│   └── news.js              #   → Module news (fetch dari NewsAPI)
├── static/                  # File statis (favicon, dll.)
├── test/                    # Unit test
│   └── NuxtLogo.spec.js
├── .github/workflows/
│   └── ci.yml               # GitHub Actions CI pipeline
├── nuxt.config.js           # Konfigurasi Nuxt
├── package.json             # Dependencies & scripts
└── README.md                # Dokumentasi (file ini)
```

---

## 📌 Prasyarat

Pastikan sudah terinstall di komputer kamu:

- **Node.js** v14.x atau v16.x (disarankan v14 sesuai CI)
- **npm** v6+ (bawaan Node.js)
- **Git**

Cek versi:
```bash
node -v
npm -v
git --version
```

> **💡 Tips:** Gunakan [nvm](https://github.com/nvm-sh/nvm) (Linux/Mac) atau [nvm-windows](https://github.com/coreybutler/nvm-windows) (Windows) untuk mengelola versi Node.js.

---

## 🚀 Menjalankan Secara Lokal

### 1. Clone repository

```bash
git clone https://github.com/levyan77/miniProjectAlta.git
cd miniProjectAlta
```

### 2. Install dependencies

```bash
npm install
```

### 3. Jalankan development server

```bash
npm run dev
```

Aplikasi akan berjalan di **[http://localhost:3000](http://localhost:3000)**.

> Hot-reload aktif — setiap perubahan kode akan otomatis ter-refresh di browser.

### 4. Build untuk production

```bash
# Build static files
npm run generate

# Atau build SSR dan jalankan server
npm run build
npm run start
```

Hasil static build akan ada di folder `dist/`.

---

## 🧪 Testing & Linting

```bash
# Jalankan unit test
npm run test

# Jalankan linting (ESLint + Prettier)
npm run lint

# Auto-fix lint errors
npm run lintfix
```

---

## 🌐 Deploy Gratis

Project ini menggunakan mode `target: 'static'` sehingga sangat cocok untuk deploy ke platform hosting statis secara **gratis**.

### 1. 🟢 Netlify (Rekomendasi)

**Cara termudah dan tercepat untuk deploy Nuxt static site.**

#### Opsi A — Langsung dari GitHub (Otomatis)

1. Buka [app.netlify.com](https://app.netlify.com/) dan login dengan akun GitHub.
2. Klik **"Add new site"** → **"Import an existing project"**.
3. Pilih repository **miniProjectAlta**.
4. Isi konfigurasi build:
   | Setting | Value |
   | :--- | :--- |
   | **Build command** | `npm run generate` |
   | **Publish directory** | `dist` |
   | **Node version** | `14` (tambahkan environment variable `NODE_VERSION=14`) |
5. Klik **"Deploy site"**.
6. Netlify akan otomatis build dan deploy. Kamu akan mendapat URL seperti `https://nama-random.netlify.app`.

> **Auto-deploy:** Setiap push ke branch `main`/`master` akan otomatis trigger re-deploy.

#### Opsi B — Manual via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Generate static files
npm run generate

# Deploy preview
netlify deploy --dir=dist

# Deploy ke production
netlify deploy --dir=dist --prod
```

---

### 2. 🔺 Vercel

1. Buka [vercel.com](https://vercel.com/) dan login dengan akun GitHub.
2. Klik **"Add New Project"** → Import repository **miniProjectAlta**.
3. Framework Preset akan terdeteksi otomatis sebagai **Nuxt.js**.
4. Isi konfigurasi:
   | Setting | Value |
   | :--- | :--- |
   | **Build Command** | `npm run generate` |
   | **Output Directory** | `dist` |
   | **Node.js Version** | `14.x` |
5. Klik **"Deploy"**.
6. Vercel akan memberikan URL seperti `https://mini-project-alta.vercel.app`.

#### Atau via Vercel CLI:

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy (ikuti prompts)
vercel

# Deploy ke production
vercel --prod
```

---

### 3. 📄 GitHub Pages

#### Opsi A — Manual Deploy

```bash
# Generate static files
npm run generate

# Install push-dir (helper untuk deploy ke gh-pages branch)
npm install -g push-dir

# Push folder dist ke branch gh-pages
push-dir --dir=dist --branch=gh-pages --cleanup
```

Lalu di **Settings** repository GitHub:
1. Buka tab **Pages**.
2. Pilih **Source**: `Deploy from a branch`.
3. Pilih branch: `gh-pages`, folder: `/ (root)`.
4. Klik **Save**.

Site akan tersedia di `https://<username>.github.io/miniProjectAlta/`.

> ⚠️ **Catatan:** Jika deploy ke subfolder (bukan root domain), tambahkan `router.base` di `nuxt.config.js`:
> ```js
> export default {
>   router: {
>     base: '/miniProjectAlta/'
>   }
> }
> ```

#### Opsi B — Otomatis via GitHub Actions

Tambahkan file `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main, master]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '14'
          cache: 'npm'
      - run: npm ci
      - run: npm run generate
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

### Perbandingan Platform Deploy

| Fitur | Netlify | Vercel | GitHub Pages |
| :--- | :---: | :---: | :---: |
| **Custom Domain** | ✅ Gratis | ✅ Gratis | ✅ Gratis |
| **HTTPS/SSL** | ✅ Otomatis | ✅ Otomatis | ✅ Otomatis |
| **Auto Deploy (Git)** | ✅ | ✅ | ✅ (via Actions) |
| **Preview Deploys** | ✅ Per PR | ✅ Per PR | ❌ |
| **Bandwidth/bulan** | 100 GB | 100 GB | 100 GB |
| **Build Minutes/bulan** | 300 menit | 6000 menit | 2000 menit |
| **Serverless Functions** | ✅ | ✅ | ❌ |
| **SPA Fallback/Redirect** | ✅ Otomatis | ✅ Otomatis | ⚠️ Manual (404.html) |

> **💡 Rekomendasi:** Gunakan **Netlify** atau **Vercel** untuk kemudahan setup dan fitur SPA redirect otomatis.

---

## 🔑 Environment & API

Project ini menggunakan dua external API:

| API | Endpoint | Keterangan |
| :--- | :--- | :--- |
| **Hasura GraphQL** | `https://relieved-honeybee-78.hasura.app/v1/graphql` | Database hero Dota 2 (attributes, abilities, stats, dll.) |
| **NewsAPI** | `https://newsapi.org/v2/` | Berita gaming (memerlukan API key) |

> ⚠️ **Catatan tentang NewsAPI:**
> - API key saat ini di-hardcode di `store/news.js`.
> - NewsAPI versi gratis **tidak bisa dipanggil dari browser di production** (hanya dari `localhost`).
> - Untuk production, pertimbangkan menggunakan proxy server atau API alternatif seperti [GNews](https://gnews.io/) atau [TheNewsAPI](https://www.thenewsapi.com/).

---

## 📸 Screenshot

> _Tambahkan screenshot aplikasi di sini_

---

## 📝 Lisensi

Project ini dibuat sebagai mini project untuk **Alterra Academy**.

Asset, logo, video, dan konten Dota 2 adalah trademark milik **Valve Corporation**. Digunakan untuk keperluan edukasi.

---

<p align="center">
  Dibuat dengan ❤️ menggunakan Nuxt.js
</p>
