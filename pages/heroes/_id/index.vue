<template>
    <div class="heroPage">
        <HeaderComp/>
        <div class="upperSection">
            <div class="backgroundGradient">
            </div>
            <div class="heroNavigator">
                <a class="ArrowLeftnav" :href="heroIDnumber-1" style="background-image: url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/arrow_solid_left.png);"></a>
                <a class="CenterGrid" href="/heroes">
                    <div class="gridDot"></div>
                    <div class="gridDot"></div>
                    <div class="gridDot"></div>
                    <div class="gridDot"></div>
                    <div class="gridDot"></div>
                    <div class="gridDot"></div>
                </a>
                <a class="ArrowRightnav" :href="heroIDnumber+1" style="background-image: url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/arrow_solid_right.png);"></a>
            </div>
            <div
            v-for="(hero,hero_id) in heroes"
            :key="hero_id"
            class="heroPortraitContainer">
                <video class="heroPortrait" :poster="hero.poster" autoplay preload="auto" loop>
                    <source type="video/webm" :src="hero.video_url">
                    <img :src="hero.image">
                </video>
            </div>
            <div class="fadeContainer fadeBottom">
            </div>
            <div
            v-for="(attribute,attributes_id) in attributes"
            :key="'A' + attributes_id"
            class="heroSummary">
                <div class="heroTypeTitle">
                    <img :src="attribute.icon_url" class="heroPage_PrimaryStatIcon">
                    <div class="PrimaryStat">{{attribute.primary_attribute}}</div>
                </div>
                <div
                v-for="(hero,hero_id) in heroes"
                :key="hero_id"
                class="heroNameSmall">{{hero.name}}</div>
                <div
                v-for="(hero,hero_id) in heroes"
                :key="'B' + hero_id"
                class="heroOneLiner">
                    {{hero.quotes}}
                </div>
                <div class="bioSumContainer">
                    <div
                    v-for="(bio,bio_id) in bios"
                    :key="bio_id"
                    class="bioContainer hidden" :style="{opacity: computedHidden, zIndex: computedZindex1}">
                       {{bio.bio1}}
                        <br>
                        <br>
                        {{bio.bio2}}
                        <br>
                        <br>
                        {{bio.bio3}}
                        <br>
                        <br>
                        {{bio.bio4}}
                        <div class="showBio" @click="setHiddenRev">Close History</div>
                    </div>
                    <div :style="{opacity: computedOpacity, zIndex: computedZindex2}" class="summaryContainer">
                        <div
                        v-for="(hero,hero_id) in heroes"
                        :key="'C' + hero_id"
                        class="heroLore">
                            {{hero.summary}}
                            <div class="showBio" @click="setHidden" >Read Full History</div>
                        </div>
                        <div>
                            <div class="heroTitle">Attack Type</div>
                            <div
                            v-for="(hero,hero_id) in heroes"
                            :key="hero_id"
                            class="attackTypeDetail">
                                <img :src="hero.attacktype_icon" class="attackTypeIcon">
                                <div class="value">{{hero.attack_type}}</div>
                            </div>
                        </div>
                        <div
                            v-for="(complexityVal,complexity_id) in complexity"
                            :key="complexity_id"
                        >
                            <div class="heroTitle">Complexity</div>
                            <div v-if="complexityVal.complexity == 1" class="pipContainer">
                                <div class="diamondPip filled"></div>
                                <div class="diamondPip"></div>
                                <div class="diamondPip"></div>
                            </div>
                            <div v-if="complexityVal.complexity == 2" class="pipContainer">
                                <div class="diamondPip filled"></div>
                                <div class="diamondPip filled"></div>
                                <div class="diamondPip"></div>
                            </div>
                            <div v-if="complexityVal.complexity == 3" class="pipContainer">
                                <div class="diamondPip filled"></div>
                                <div class="diamondPip filled"></div>
                                <div class="diamondPip filled"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
             v-for="(hero,hero_id) in heroes"
             :key="'D' + hero_id"
            class="heroVerticalBar">
                <div
                 v-for="(attribute,attributes_id) in attributes"
                 :key="'F' + attributes_id"
                >
                  <img :src="attribute.icon_url" class="heroVerBarIcon">
                </div>
                <div class="heroBarName">{{hero.name}}</div>
                <div class="heroID">{{hero.id}}</div>
                <div class="heroBarLine"></div>
            </div>
            <div
             v-for="(ability,ability_id) in abilities"
             :key="ability_id"
            class="topAbilitySelector">
                <div class="title">Abilities</div>
                <div class="abilityList">
                    <div class="topAbilityContainer">
                        <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/talents.svg">
                    </div>
                    <div class="topAbilityContainer">
                        <img :src="ability.skill_1_icon"
                        class="abilitySelectable">
                    </div>
                    <div class="topAbilityContainer">
                        <img :src="ability.skill_2_icon"
                        class="abilitySelectable">
                    </div>
                    <div class="topAbilityContainer">
                        <img :src="ability.skill_3_icon"
                        class="abilitySelectable">
                    </div>
                    <div class="topAbilityContainer">
                        <img :src="ability.skill_4_icon"
                        class="abilitySelectable">
                    </div>
                </div>
            </div>
        </div>
        <div class="detailBarContainer">
                <div class="detailsBar">
                    <div class="detailsAttribute">
                        <div class="topAttributesSection">
                            <div
                            v-for="(hero,hero_id) in heroes"
                            :key="hero_id"
                            class="portraitContainer">
                                <img :src="hero.image_url"
                                class="portrait">
                                <div
                                v-for="(attribute,attributes_id) in attributes"
                                :key="'D' + attributes_id"
                                >
                                    <div class="healthBar">
                                        <div class="numberMajor">{{attribute.hp}}</div>
                                        <div class="numberMinor">
                                            +
                                            {{attribute.hp_bonus}}
                                        </div>
                                    </div>
                                    <div class="manaBar">
                                        <div class="numberMajor">{{attribute.mp}}</div>
                                        <div class="numberMinor">
                                            +
                                            {{attribute.mp_bonus}}
                                        </div>                                    
                                    </div>
                                </div>
                            </div>
                            <div
                            v-for="(attribute,attributes_id) in attributes"
                            :key="'E' + attributes_id"
                            class="attributesContainer">
                                <div class="singleAttributeContainer">
                                    <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png"
                                    class="attributeIcon">
                                    <div class="attributeValue">{{attribute.str_val}}</div>
                                    <div class="attributeGain">
                                        {{attribute.str_bonus}}
                                    </div>
                                </div>
                                <div class="singleAttributeContainer">
                                    <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png"
                                    class="attributeIcon">
                                    <div class="attributeValue">{{attribute.agi_val}}</div>
                                    <div class="attributeGain">
                                        {{attribute.agi_bonus}}
                                    </div>
                                </div>
                                <div class="singleAttributeContainer">
                                    <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png"
                                    class="attributeIcon">
                                    <div class="attributeValue">{{attribute.int_val}}</div>
                                    <div class="attributeGain">
                                        {{attribute.int_bonus}}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="detailsSectionHeader">Attributes</div>
                    </div>
                    <div class="verticalSeparator">
                        <div class="separatorContent"></div>
                    </div>
                    <div
                    v-for="(role,role_id) in roles"
                    :key="role_id"                    
                    class="detailsRoles">
                        <div class="rolesList">
                            <div class="role">
                                <div class="roleName">Carry</div>
                                <div class="roleBarContainer">
                                    <div class="roleBarBackground"></div>
                                    <div class="roleBarFilled" :style="`width:${role.carry}%`"></div>
                                </div>
                            </div>
                            <div class="role">
                                <div class="roleName">Support</div>
                                <div class="roleBarContainer">
                                    <div class="roleBarBackground"></div>
                                    <div class="roleBarFilled" :style="`width:${role.support}%`"></div>
                                </div>
                            </div>
                            <div class="role">
                                <div class="roleName">Nuker</div>
                                <div class="roleBarContainer">
                                    <div class="roleBarBackground"></div>
                                    <div class="roleBarFilled" :style="`width:${role.nuker}%`"></div>
                                </div>
                            </div>
                            <div class="role">
                                <div class="roleName">Disabler</div>
                                <div class="roleBarContainer">
                                    <div class="roleBarBackground"></div>
                                    <div class="roleBarFilled" :style="`width:${role.disabler}%`"></div>
                                </div>
                            </div>
                            <div class="role">
                                <div class="roleName">Jungler</div>
                                <div class="roleBarContainer">
                                    <div class="roleBarBackground"></div>
                                    <div class="roleBarFilled" :style="`width:${role.jungler}%`"></div>
                                </div>
                            </div>
                            <div class="role">
                                <div class="roleName">Durable</div>
                                <div class="roleBarContainer">
                                    <div class="roleBarBackground"></div>
                                    <div class="roleBarFilled" :style="`width:${role.durable}%`"></div>
                                </div>
                            </div>
                            <div class="role">
                                <div class="roleName">Escape</div>
                                <div class="roleBarContainer">
                                    <div class="roleBarBackground"></div>
                                    <div class="roleBarFilled" :style="`width:${role.escape}%`"></div>
                                </div>
                            </div>
                            <div class="role">
                                <div class="roleName">Pusher</div>
                                <div class="roleBarContainer">
                                    <div class="roleBarBackground"></div>
                                    <div class="roleBarFilled" :style="`width:${role.pusher}%`"></div>
                                </div>
                            </div>
                            <div class="role">
                                <div class="roleName">Initiator</div>
                                <div class="roleBarContainer">
                                    <div class="roleBarBackground"></div>
                                    <div class="roleBarFilled" :style="`width:${role.initiator}%`"></div>
                                </div>
                            </div>
                        </div>
                        <div class="detailsSectionHeader">Roles</div>
                    </div>
                    <div class="verticalSeparator">
                        <div class="separatorContent"></div>
                    </div>
                    <div class="detailsStats">
                        <div
                        v-for="(stat,stat_id) in stats"
                        :key="stat_id"  
                        class="statsList">
                            <div class="heroValuesSection">
                                <div class="heroValueTitle">Attack</div>
                                <div class="heroValueElement">
                                    <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/stats/icon_damage.png"
                                    class="heroValueIcon">
                                    <v-tooltip top>
                                        <template v-slot:activator="{on, attrs}">
                                            <span v-bind="attrs" v-on="on">{{stat.damage}}</span>
                                        </template>
                                        <span>Damage</span>
                                    </v-tooltip>  
                                </div>
                                <div class="heroValueElement">
                                    <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/stats/icon_attack_time.png"
                                    class="heroValueIcon">
                                    <v-tooltip top>
                                        <template v-slot:activator="{on, attrs}">
                                            <span v-bind="attrs" v-on="on">{{stat.attack_time}}</span>
                                        </template>
                                        <span>Attack Time</span>
                                    </v-tooltip>                                  
                                </div>
                                <div class="heroValueElement">
                                    <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/stats/icon_attack_range.png"
                                    class="heroValueIcon">
                                    <v-tooltip top>
                                        <template v-slot:activator="{on, attrs}">
                                            <span v-bind="attrs" v-on="on">{{stat.attack_range}}</span>
                                        </template>
                                        <span>Attack Range</span>
                                    </v-tooltip>  
                                </div>
                                <div class="heroValueElement">
                                    <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/stats/icon_projectile_speed.png"
                                    class="heroValueIcon">
                                    <v-tooltip top>
                                        <template v-slot:activator="{on, attrs}">
                                            <span v-bind="attrs" v-on="on">{{stat.projectile_speed}}</span>
                                        </template>
                                        <span>Projectile Speed</span>
                                    </v-tooltip>  
                                </div>
                            </div>
                            <div class="heroValuesSection">
                                <div class="heroValueTitle">Defense</div>
                                <div class="heroValueElement">
                                    <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/stats/icon_armor.png"
                                    class="heroValueIcon">
                                    <v-tooltip top>
                                        <template v-slot:activator="{on, attrs}">
                                            <span v-bind="attrs" v-on="on">{{stat.armor}}</span>
                                        </template>
                                        <span>Armor</span>
                                    </v-tooltip>  
                                </div>
                                <div class="heroValueElement">
                                    <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/stats/icon_magic_resist.png"
                                    class="heroValueIcon">
                                    <v-tooltip top>
                                        <template v-slot:activator="{on, attrs}">
                                            <span v-bind="attrs" v-on="on">{{stat.magic_resist}}%</span>
                                        </template>
                                        <span>Magic Resist</span>
                                    </v-tooltip>  
                                </div>
                            </div>
                            <div class="heroValuesSection">
                                <div class="heroValueTitle">Mobility</div>
                                <div class="heroValueElement">
                                    <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/stats/icon_movement_speed.png"
                                    class="heroValueIcon">
                                    <v-tooltip top>
                                        <template v-slot:activator="{on, attrs}">
                                            <span v-bind="attrs" v-on="on">{{stat.move_speed}}</span>
                                        </template>
                                        <span>Movement Speed</span>
                                    </v-tooltip>  
                                </div>
                                <div class="heroValueElement">
                                    <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/stats/icon_turn_rate.png"
                                    class="heroValueIcon">
                                    <v-tooltip top>
                                        <template v-slot:activator="{on, attrs}">
                                            <span v-bind="attrs" v-on="on">{{stat.turn_rate}}</span>
                                        </template>
                                        <span>Turn Rate</span>
                                    </v-tooltip>  
                                </div>
                                <div class="heroValueElement">
                                    <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/stats/icon_vision.png"
                                    class="heroValueIcon">
                                    <v-tooltip top>
                                        <template v-slot:activator="{on, attrs}">
                                            <span v-bind="attrs" v-on="on">{{stat.vision}}</span>
                                        </template>
                                        <span>Vision</span>
                                    </v-tooltip>  
                                </div>
                            </div>
                        </div>
                        <div class="detailsSectionHeader">Stats</div>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
import heroesByID from '~/queries/heroesByID.gql'
import HeaderComp from '~/components/headerComp.vue';
export default {
    name: "HeroesDetails",
    components: { HeaderComp },
    setup() {
    },
    data(){
        return{
            opacity: 100,
            hidden: 0,
            zIndex1: 0,
            zIndex2: 4,
        }
    },
    computed:{
        heroID(){
            return this.$route.params.id;
        },
        heroIDnumber(){
            return parseInt(this.heroID)
        },
        computedHidden(){
            return this.hidden
        },
        computedOpacity(){
            return this.opacity
        },
        computedZindex1(){
            return this.zIndex1
        },
        computedZindex2(){
            return this.zIndex2
        }
    },
    watch:{
        heroIDnumber(){
            if(this.heroIDnumber <=  1){
                this.setID()
            }
        }
    },
    methods:{
      setHidden(){
          this.opacity = 0;
          this.hidden = 100;
          this.zIndex1 = 4
          this.zIndex2 = 0
          return [this.opacity,this.hidden]
      },
      setHiddenRev(){
          this.opacity = 100;
          this.hidden = 0;
          this.zIndex1 = 0
          this.zIndex2 = 4
          return [this.opacity,this.hidden,this.zIndex1, this.zIndex2]
      },
      setID(){
          this.heroIDnumber = 1
          return this.heroIDnumber
      },
    },
    apollo: {
        heroes: {
            query: heroesByID,
            variables(){
                return{
                    id: this.heroID,
                }
            },
            update(data){
                return data.heroes_general
            }            
        },
        attributes: {
            query: heroesByID,
            variables(){
                return{
                    id: this.heroID,
                }
            },
            update(data){
                return data.attribute
            }
        },
        complexity: {
            query: heroesByID,
            variables(){
                return{
                    id: this.heroID,
                }
            },
            update(data){
                return data.complexity
            }
        },
        bios: {
            query: heroesByID,
            variables(){
                return{
                    id: this.heroID,
                }
            },
            update(data){
                return data.bio
            }
        },
        roles: {
            query: heroesByID,
            variables(){
                return{
                    id: this.heroID,
                }
            },
            update(data){
                return data.roles
            }
        },
        stats: {
            query: heroesByID,
            variables(){
                return{
                    id: this.heroID,
                }
            },
            update(data){
                return data.stats
            }
        },
        abilities: {
            query: heroesByID,
            variables(){
                return {
                    id: this.heroID
                }
            },
            update(data){
                return data.abilities
            }
        }
    },
}
</script>

<style>
.heroPage{
    width: 100%;
    color: #fff;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;
}
.upperSection{
    width: 100%;
    height: 85vh;
    min-height: 700px;
    padding: 40px 100px 0px 140px;
    background-position-x: -20vw;
    background-color: #000;
    background-image: url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//backgrounds/greyfade.jpg);
    background-size: 100% auto;
    background-position: center top;
    background-repeat: no-repeat;
    overflow: hidden;
    position: relative;
}
.backgroundGradient{
    width: 150%;
    height: 650px;
    background-color: #00000060;
    position: absolute;
    transform: skewY(-45deg) translateX(-50vw);
    overflow: hidden;
    animation-duration: 1.5s;
    animation-timing-function: ease-out;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-name: heropage_BarIn_3WL4m;
}
.heroNavigator{
    width: 150px;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: absolute;
    top: 160px;
    right: 30px;
    z-index: 4;
}
.ArrowLeftnav{
    width: 30px;
    height: 64px;
    border: 2px solid #fff;
    position: relative;
    background-size: 50%;
    background-position: center;
    background-repeat: no-repeat;
    transition-property: opacity;
    transition-timing-function: ease-in-out;
    transition-duration: .1s;
    opacity: .4;
    cursor: pointer;
}
.CenterGrid{
    width: 80px;
    height: 64px;
    border: 2px solid #fff;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
    transition-property: opacity;
    transition-timing-function: ease-in-out;
    transition-duration: .1s;
    opacity: .4;
    cursor: pointer;
}
.ArrowRightnav{
    width: 30px;
    height: 64px;
    border: 2px solid #fff;
    position: relative;
    background-size: 50%;
    background-position: center;
    background-repeat: no-repeat;
    transition-property: opacity;
    transition-timing-function: ease-in-out;
    transition-duration: .1s;
    opacity: .4;
    cursor: pointer;
}
.gridDot{
    width: 16px;
    height: 16px;
    background-color: #fff;
}
.heroPortraitContainer{
    position: absolute;
    width: 80%;
    height: 100%;
    /* top: 0; */
    right: -5%;
    display: flex;
    justify-content: center;
    /* align-items: center; */
    pointer-events: none;
    animation-duration: 1.3s;
    animation-timing-function: ease-out;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-name: heropage_PortraitIn_3wy5B;
    align-items: flex-start;
    top: -3%;
}
.heroPortrait{
    width: 100%;
    min-height: 100%;
    max-width: 1500px;
    -webkit-mask-image: linear-gradient(to top, transparent 10%, black 50%);
}
.heroSummary{
    margin-top: 60px;
    margin-left: 30px;
    width: 35%;
    height: calc(90% - 100px);
    min-height: 0;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 2;
    animation-duration: 1s;
    animation-timing-function: ease-out;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-name: heropage_heroInfoIn_2pSnE;
}
.heroTypeTitle{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.heroPage_PrimaryStatIcon{
    width: 32px;
    height: 32px;
}
.PrimaryStat{
    margin-left: 6px;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 100;
    font-size: 24px;
}
.heroName{
    margin-top: 12px;
    font-family: 'Cinzel', serif;
    line-height: 110%;
    font-size: 80px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #fff;
}
.heroNameSmall{
    margin-top: 12px;
    font-family: 'Cinzel', serif;
    line-height: 110%;
    font-size: 60px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #fff;
}
.heroOneLiner{
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #a5e0f3;
    margin-top: 5px;
}
.bioSumContainer{
    width: 100%;
    height: 100%;
    min-height: 300px;
    flex-grow: 1;
    position: relative;
}
.bioContainer{
    position: absolute;
    width: 100%;
    max-height: 100%;
    height: 550px;
    min-height: 0;
    display: flex;
    flex-direction: column;
    padding: 20px 40px 0px 0px;
    color: #ddd;
    font-weight: lighter;
    font-size: 20px;
    line-height: 122%;
    overflow-y: scroll;
    transition-property: opacity;
    transition-timing-function: ease-in-out;
    transition-duration: .2s;
    z-index: 4;
}
.hidden{
    /* opacity: 0; */
    z-index: 0;
}
.showBio{
    margin-top: 8px;
    color: #8a8a8a;
    text-decoration: underline;
    font-size: 18px;
    cursor: pointer;
}
.summaryContainer{
    position: absolute;
    width: 100%;
    height: 100%;
    min-height: 0;
    display: flex;
    flex-direction: column;
    transition-property: opacity;
    transition-timing-function: ease-in-out;
    transition-duration: .2s;
}
.heroLore{
    width: 100%;
    margin-top: 14px;
    color: #eee;
    font-weight: 200;
    font-size: 24px;
    letter-spacing: 0px;
}
.heroTitle{
    margin-top: 30px;
    color: #959595;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 17px;
}
.attackTypeDetail{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 8px;
}
.attackTypeIcon{
    width: 24px;
    height: 24px;
    margin-right: 8px;
}
.value{
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 15px;
    font-weight: bold;
}
.pipContainer{
    display: flex;
    flex-direction: row;
    width: 80px;
    justify-content: space-between;
    margin-top: 8px;
    margin-left: 4px;
}
.diamondPip{
    width: 15px;
    height: 15px;
    border: 1px solid #fff;
    transform: rotateZ(45deg);
}
.filled{
    background-color: #fff;
}
.heroVerticalBar{
    width: 800px;
    height: 50px;
    position: absolute;
    left: 100px;
    bottom: 80px;
    margin-right: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    animation-duration: 1s;
    animation-timing-function: ease-out;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-name: heropage_verticalBarIn_2Wsyr;
    transform: rotate(270deg);
    transform-origin: bottom left;
}
.heroVerBarIcon{
    width: 22px;
    height: 22px;
}
.heroBarName{
    text-transform: uppercase;
    letter-spacing: 3px;
    font-family: 'Cinzel', serif;
    font-size: 17px;
    font-weight: 600;
    margin-left: 12px;
}
.heroID{
    color: #888;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 18px;
    margin-left: 10px;
    transform: translateY(-2px);
}
.heroBarLine{
    flex-grow: 1;
    height: 2px;
    background-color: #555;
    margin: 0px 8px 3px 8px;
}
.topAbilitySelector{
    position: absolute;
    right: 140px;
    bottom: 80px;
    width: fit-content;
    min-height: 0;
    display: flex;
    flex-direction: column;
    z-index: 2;
    animation-duration: 1s;
    animation-timing-function: ease-out;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-name: heropage_topAbilitiesIn_I2RNu;
}
.title{
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 6px;
    text-align: center;
}
.abilityList{
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.topAbilityContainer{
    width: 80px;
    height: 80px;
    margin: 0px 6px;
    overflow: visible;
    position: relative;
    transition-property: transform;
    transition-timing-function: ease-in-out;
    transition-duration: .1s;
}
.abilitySelectable{
    width: 80px;
    height: 80px;
    margin: 0px 6px;
    cursor: pointer;
    box-shadow: 0px 0px 20px #000, 0px 0px 20px #000;
    position: relative;
}
.detailBarContainer{
    width: 100%;
    height: fit-content;
    min-height: 221px;
    background: linear-gradient(80deg, #252728 0%, #101415 100%);
    border-top: 2px solid #282828;
    border-bottom: 2px solid #2c2e2e;
    box-shadow: 0px 0px 8px #000;
    display: flex;
    justify-content: center;
    z-index: 2;
}
.detailsBar{
    width: 100%;
    max-width: 1600px;
    padding: 20px 0px;
    position: relative;
    z-index: 3;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
}
.detailsAttribute{
    min-width: 300px;
    width: 30%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.verticalSeparator{
    width: 1px;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
}
.detailsRoles{
    min-width: 250px;
    width: 30%;
    padding: 0px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.detailsStats{
    min-width: 400px;
    width: 30%;
    min-height: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.topAttributesSection{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}
.detailsSectionHeader{
    color: #969696;
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-shadow: 1px 1px 2px #000;
    margin-top: 12px;
}
.portraitContainer{
    width: 150px;
    height: 135px;
    min-height: 0;
    display: flex;
    flex-direction: column;
}
.portrait{
    width: 150px;
    height: 84px;
}
.healthBar{
    width: 150px;
    height: 22px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: linear-gradient(to right, #286323, #7AF03C);
    position: relative;
}
.manaBar{
    width: 150px;
    height: 22px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: linear-gradient(to right, #1056DB, #73F5FE);
    position: relative;
}
.numberMajor{
    position: absolute;
    width: 100%;
    text-align: center;
    color: #fff;
    font-size: 15px;
    text-shadow: 1px 1px 2px #000;
    font-family: Radiance,sans-serif;
    font-weight: 800;
}
.numberMinor{
    color: #286323;
    flex-grow: 1;
    text-align: right;
    font-size: 11px;
    padding-right: 16px;
    font-weight: bold;
}
.attributesContainer{
    width: 100px;
    height: 120px;
    min-height: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.singleAttributeContainer{
    width: 100%;
    height: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 4px 0px;
}
.attributeIcon{
     width: 30px;
    height: 30px;
}
.attributeValue{
    color: #fff;
    font-family: 'Cinzel', serif;
    font-size: 20px;
    font-weight: 600;
    text-shadow: 1px 1px 2px #000;
    margin-left: 12px;
}
.attributeGain{
    color: #999;
    font-size: 15px;
    text-shadow: 1px 1px 2px #000;
    margin-left: 8px;
    flex-grow: 1;
    text-align: right;
}
.separatorContent{
    content: "";
    width: 100%;
    height: 80%;
    background-color: #4f4f4f;
}
.rolesList{
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
}
.role{
    width: 30%;
    height: 32px;
    min-height: 0;
    display: flex;
    flex-direction: column;
    margin: 5px 0px;
}
.roleName{
    width: 100%;
    font-size: 15px;
    font-weight: bold;
    letter-spacing: 1px;
    text-align: left;
    color: #fff;
}
.roleBarContainer{
    width: 100%;
    height: 6px;
    max-height: 6px;
    flex-grow: 1;
    margin-top: 4px;
    position: relative;
}
.roleBarBackground{
    width: 100%;
    height: 100%;
    background-color: #4c4c4c;
    position: absolute;
    left: 0;
    top: 0;
}
.roleBarFilled{
    height: 100%;
    width: 0%;
    background-color: #fff;
    /* shadow: 0px 0px 10px #427ed1,0px 0px 10px #427ed1; */
    position: absolute;
    left: 0;
    top: 0;
    transition-property: width;
    transition-duration: 5s;
    transition-delay: 2s;
}
.statsList{
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
}
.heroValuesSection{
    width: 30%;
    height: 100%;
    min-height: 0;
    display: flex;
    flex-direction: column;
}
.heroValueTitle{
    margin-left: 8px;
    text-align: left;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 1px;
    color: #969696;
    margin-bottom: 4px;
}
.heroValueElement{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 6px;
    font-size: 16px;
    text-align: left;
}
.heroValueIcon{
    width: 24px;
    height: 24px;
    margin-right: 8px;
}
@media (max-width: 1600px){
    .heroName{
    font-size: 60px;
    line-height: 62px;
    }
}    

</style>