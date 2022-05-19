<template>
<div class="heroPage" style="background-image: url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/backgrounds/greyfade.jpg);">
  <header-comp />
  <div class="heroHeader">
    <div class="heroTitle"> Choose Your Hero</div>
    <div class="heroSubTitle">From magical tacticians to fierce brutes and cunning rogues, Dota 2's hero pool is massive and limitlessly diverse. Unleash incredible abilities and devastating ultimates on your way to victory.
    </div>
  </div>

  <div class="heroFilter">
    <div class="filterLabel">search mode : {{filterSearch}}</div>
    <div class="spesificFilterContainer">
        <div class="selectorLabel">Attribute</div>
        <div id="str" class="filterIcon" :style="{backgroundImage: `url(${filterIconStr})`, filter: `brightness(${buttonBrightnessStr}) saturate(${buttonSaturateStr})`}" @click="setFilterStr(); setButtonFilterStr();"></div>
        <div id="agi" class="filterIcon" :style="{backgroundImage: `url(${filterIconAgi})`, filter: `brightness(${buttonBrightnessAgi}) saturate(${buttonSaturateAgi})`}" @click="setFilterAgi(); setButtonFilterAgi();"></div>
        <div id="int" class="filterIcon" :style="{backgroundImage: `url(${filterIconInt})`, filter: `brightness(${buttonBrightnessInt}) saturate(${buttonSaturateInt})`}" @click="setFilterInt(); setButtonFilterInt();"></div>
    </div>
    <div class="spesificFilterContainer">
        <div class="selectorLabel">Complexity</div>
        <div class="filterIcon" :style="{backgroundImage: `url(${filterIconComplexity})`, filter: `brightness(${buttonBrightnessComplex1}) saturate(${buttonSaturateComplex1})`}" @click="setFilterComplex1(); setButtonFilterComplex1();"></div>
        <div class="filterIcon" :style="{backgroundImage: `url(${filterIconComplexity})`, filter: `brightness(${buttonBrightnessComplex2}) saturate(${buttonSaturateComplex2})`}" @click="setFilterComplex2(); setButtonFilterComplex2();"></div>
        <div class="filterIcon" :style="{backgroundImage: `url(${filterIconComplexity})`, filter: `brightness(${buttonBrightnessComplex3}) saturate(${buttonSaturateComplex3})`}" @click="setFilterComplex3(); setButtonFilterComplex3();"></div>
    </div>
    <div class="searchBarContainer">
      <div class="searchBar">
          <div class="iconSearch" style="background-image: url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/search.svg);"></div>
          <div class="form">
            <input v-model="searchKey" class="input" type="text" @keyup.enter="setSearchKey(searchKey)" >
          </div>
      </div>
    </div>
  </div>

  <div class="gridList" style="height: 500px;" data-aos="fade-up" data-aos-duration="2000">
  <a
    v-for="(hero,i) in heroes"
    :key="i"
    class="heroIcon" :href="link+hero.id" :style="`background-image: url(${hero.image_url})`"
    >
      <div class="heroNameContainer">
        <img :src="hero.image_url" class="PrimaryStatIcon">
        <div class="heroName">
          {{hero.name}}
        </div>
      </div>
    
  </a>

  <!-- <a  class="heroIcon" href="/heroes/abaddon" style="background-image: url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/abaddon.png);" >
    <div class="heroNameContainer">
      <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png" class="PrimaryStatIcon">
      <div class="heroName">
            Abaddon
      </div>
    </div>
  </a>
  <a class="heroIcon" href="/heroes/alchemist" style="background-image: url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/alchemist.png);">2</a>
  <div class="heroIcon">3</div>  
  <div class="heroIcon">4</div>
  <div class="heroIcon">5</div>
  <div class="heroIcon">6</div>  
  <div class="heroIcon">7</div>
  <div class="heroIcon">8</div>
  <div class="heroIcon">9</div>   -->


    <!-- <a class="heroIcon" href="/heroes/abaddon"
          style="background-image: url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/abaddon.png);
                  left: calc(122px + (0 * (100% - 225px)) / 4);
                  top: calc(0px);">
        <div class="heroNameContainer">
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png" class="PrimaryStatIcon">
          <div class="heroName">
            Abaddon
          </div>
        </div>
        <div class="fadeContainer">
            <div class="fadeBottom">
              <div class="fade1keus" style="background: linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.733) 75%, rgb(0, 0, 0) 100%);"></div>
            </div>
        </div>
    </a>

    <div class="heroIcon"
          style="background-image: url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/alchemist.png);
                  left: calc(122px + (1 * (100% - 225px)) / 4);
                  top: calc(0px);">
        <div class="heroNameContainer">
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png" class="PrimaryStatIcon">
          <div class="heroName">
            Alchemist
          </div>
        </div>
        <div class="fadeContainer">
            <div class="fadeBottom">
              <div class="fade1keus" style="background: linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.733) 75%, rgb(0, 0, 0) 100%);"></div>
            </div>
        </div>
    </div>

    <div class="heroIcon"
          style="background-image: url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/ancient_apparition.png);
                  left: calc(122px + (2 * (100% - 225px)) / 4);
                  top: calc(0px);">
        <div class="heroNameContainer">
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png" class="PrimaryStatIcon">
          <div class="heroName">
            Abaddon
          </div>
        </div>
        <div class="fadeContainer">
            <div class="fadeBottom">
              <div class="fade1keus" style="background: linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.733) 75%, rgb(0, 0, 0) 100%);"></div>
            </div>
        </div>
    </div>

    <div class="heroIcon"
          style="background-image: url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png);
                  left: calc(122px + (3 * (100% - 225px)) / 4);
                  top: calc(0px);">
        <div class="heroNameContainer">
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png" class="PrimaryStatIcon">
          <div class="heroName">
            Abaddon
          </div>
        </div>
        <div class="fadeContainer">
            <div class="fadeBottom">
              <div class="fade1keus" style="background: linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.733) 75%, rgb(0, 0, 0) 100%);"></div>
            </div>
        </div>
    </div>

    <div class="heroIcon"
          style="background-image: url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/arc_warden.png);
                  left: calc(122px + (0 * (100% - 225px)) / 4);
                  top: calc(142px);">
        <div class="heroNameContainer">
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png" class="PrimaryStatIcon">
          <div class="heroName">
            Abaddon
          </div>
        </div>
        <div class="fadeContainer">
            <div class="fadeBottom">
              <div class="fade1keus" style="background: linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.733) 75%, rgb(0, 0, 0) 100%);"></div>
            </div>
        </div>
    </div> -->
  </div>
</div>  
</template>

<script>

import filterSearch from '~/queries/filterSearch.gql'
import filterComplexity from '~/queries/filterComplexity.gql'
import filterPrimaryAttribute from '~/queries/filterPrimaryAttribute.gql'
import heroesQuery from '~/queries/heroesData.gql'
import headerComp from '~/components/headerComp.vue'
import aosMixin from '~/mixins/aos'

export default {
  name: 'HeroesPage',
  components: { headerComp },
  mixins: [aosMixin],
  apollo: {
    heroes: {
        query(){
          if(this.filterStr === false && this.filterAgi === false && this.filterInt === false && this.filterComplex1 === false  && this.filterComplex2 === false  && this.filterComplex3 === false && this.filterSearch === false){
            return heroesQuery
          }

          else if (this.filterSearch === true){
            return filterSearch 
          }

          else if (this.filterComplex1 === true  || this.filterComplex2 === true || this.filterComplex3 === true){
            return filterComplexity      
          }

          else if(this.filterStr === true || this.filterAgi === true || this.filterInt === true){
            return filterPrimaryAttribute 
          }
        },
        variables(){
          if(this.filterStr === false && this.filterAgi === false && this.filterInt === false && this.filterComplex === false){
            return{}
          } else if(this.filterSearch === true){
            return{
              "_eq": this.searchKey
            }
          } else if(this.filterComplex1 === true && this.filterComplex2 === false && this.filterComplex3 === false){
            return{
              "_eq": 1
            }
          } else if(this.filterComplex1 === false && this.filterComplex2 === true && this.filterComplex3 === false){
            return{
              "_eq": 2
            }
          } else if(this.filterComplex1 === false && this.filterComplex2 === false && this.filterComplex3 === true){
            return{
              "_eq": 3
            }
          } else if(this.filterStr === true && this.filterAgi === false && this.filterInt === false){
            return{
              "_eq": "strength"
            }
          }
           else if(this.filterStr === false && this.filterAgi === true && this.filterInt === false){
            return{
              "_eq": "agility"
            }
          }
           else if(this.filterStr === false && this.filterAgi === false && this.filterInt === true){
            return{
              "_eq": "intelligence"
            }
          }
        },
        update(data){
          return data.heroes_general
        }
    }
    },
  data(){
    return{
      buttonBrightnessComplex1: 0.5,
      buttonSaturateComplex1: 0,
      buttonBrightnessComplex2: 0.5,
      buttonSaturateComplex2: 0,
      buttonBrightnessComplex3: 0.5,
      buttonSaturateComplex3: 0,
      buttonBrightnessStr: 0.5,
      buttonSaturateStr: 0,
      buttonBrightnessAgi: 0.5,
      buttonSaturateAgi: 0,
      buttonBrightnessInt: 0.5,
      buttonSaturateInt: 0,
      searchKey: "",
      filterSearch: false,
      filterComplex1: false,
      filterComplex2: false,
      filterComplex3: false,
      filterStr: false,
      filterAgi: false,
      filterInt: false,
      link: "/heroes/",
      filterIconComplexity: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-diamond.png",
      filterIconStr: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-str-active.png",
      filterIconAgi: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-agi-active.png",
      filterIconInt: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-int-active.png",
    }
  },
  computed:{
   computedButtonFilter(){
     return [this.buttonBrightness, this.buttonSaturate]
    }
  },
  methods:{
    setFilterStr(){
      this.filterStr = !this.filterStr
      this.filterAgi = false
      this.filterInt = false
    },
    setFilterAgi(){
      this.filterStr = false
      this.filterAgi = !this.filterAgi
      this.filterInt = false
    },
    setFilterInt(){
      this.filterStr = false
      this.filterAgi = false
      this.filterInt = !this.filterInt
    },
    setFilterComplex1(){
      this.filterComplex1 = !this.filterComplex1
      this.filterComplex2 = false
      this.filterComplex3 = false
    },
    setFilterComplex2(){
      this.filterComplex1 = false
      this.filterComplex2 = !this.filterComplex2
      this.filterComplex3 = false
    },
    setFilterComplex3(){
      this.filterComplex1 = false
      this.filterComplex2 = false
      this.filterComplex3 = !this.filterComplex3
    },
    setSearchKey(param){
      this.filterSearch = !this.filterSearch;
      this.searchKey = param;
    },
    setButtonFilterStr(){
      this.buttonBrightnessStr = 1;
      this.buttonSaturateStr = 1;
      if(this.filterStr === false){
      this.buttonBrightnessStr = 0.5;
      this.buttonSaturateStr = 0;
      }
      return [this.buttonBrightness, this.buttonSaturate]
    },
    setButtonFilterAgi(){
      this.buttonBrightnessAgi = 1;
      this.buttonSaturateAgi = 1;
      if(this.filterAgi === false){
      this.buttonBrightnessAgi = 0.5;
      this.buttonSaturateAgi = 0;
      }
      return [this.buttonBrightness, this.buttonSaturate]
    },
    setButtonFilterInt(){
      this.buttonBrightnessInt = 1;
      this.buttonSaturateInt = 1;
      if(this.filterInt === false){
      this.buttonBrightnessInt = 0.5;
      this.buttonSaturateInt = 0;
      }
      return [this.buttonBrightness, this.buttonSaturate]
    },
    setButtonFilterComplex1(){
      this.buttonBrightnessComplex1 = 1;
      this.buttonSaturateComplex1 = 1;
      if(this.filterComplex1 === false){
      this.buttonBrightnessComplex1 = 0.5;
      this.buttonSaturateComplex1 = 0;
      }
      return [this.buttonBrightness, this.buttonSaturate]
    },
    setButtonFilterComplex2(){
      this.buttonBrightnessComplex1 = 1;
      this.buttonSaturateComplex1 = 1;
      this.buttonBrightnessComplex2 = 1;
      this.buttonSaturateComplex2 = 1;
      if(this.filterComplex2 === false){
      this.buttonBrightnessComplex1 = 0.5;
      this.buttonSaturateComplex1 = 0;
      this.buttonBrightnessComplex2 = 0.5;
      this.buttonSaturateComplex2 = 0;
      }
      return [this.buttonBrightness, this.buttonSaturate]
    },
    setButtonFilterComplex3(){
      this.buttonBrightnessComplex1 = 1;
      this.buttonSaturateComplex1 = 1;
      this.buttonBrightnessComplex2 = 1;
      this.buttonSaturateComplex2 = 1;
      this.buttonBrightnessComplex3 = 1;
      this.buttonSaturateComplex3 = 1;
      if(this.filterComplex3 === false){
      this.buttonBrightnessComplex1 = 0.5;
      this.buttonSaturateComplex1 = 0;
      this.buttonBrightnessComplex2 = 0.5;
      this.buttonSaturateComplex2 = 0;
      this.buttonBrightnessComplex3 = 0.5;
      this.buttonSaturateComplex3 = 0;
      }
      return [this.buttonBrightness, this.buttonSaturate]
    },


  }
}
</script>
<style>
  .heroPage{
    width: 100%;
    padding: 0px 100px 0px 100px;
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-position: center top;
    background-attachment: fixed;
    position: relative;
    min-height: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .heroTitle{
    color: #fff;
    font-size: 3vw;
    font-family: 'Cinzel', serif;
    font-weight: bold;
    text-align: center;
    margin-top: 100px;
    margin-bottom: 10px;
    text-transform: uppercase;
    letter-spacing: 3px;
    line-height: 112%;
  }
  .heroSubTitle{
    width: 100%;
    max-width: 1000px;
    margin: 0px auto;
    color: #ddd;
    font-size: 26px;
    text-align: center;
    font-weight: 100;
    margin-bottom: 30px;
}
.heroFilter{
    max-width: 1200px;
    padding: 10px;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #11111190;
    box-shadow: 0px 0px 30px #00000050;
    margin-top: 20px;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3));
}
.filterLabel{
    color: #fff;
    width: 180px;
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-right: 10px;
    margin-left: 10px;
}
.spesificFilterContainer{
    width: 250px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 20px;
}
.selectorLabel{
  color: #808fa6;
  font-size: 17px;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-right: 20px;
}
.filterIcon{
  width: 43px;
  height: 35px;
  margin-left: -4px;
  background-size: cover;
  background-repeat: no-repeat;
  transition-property: filter;
  transition-timing-function: ease-in-out;
  transition-duration: .1s;
  cursor: pointer;
  color: #fff;
  filter: brightness(0.5) saturate(0);
}
.searchBarContainer{
    width: 300px;
    display: flex;
    flex-direction: row;
    justify-content: right;
}
.searchBar{
  width: 250px;
  height: 50px;
  background-color: #25282a;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.iconSearch{
  width: 26px;
  height: 26px;
  min-width: 26px;
  min-height: 26px;
  margin-right: 10px;
  margin-left: 10px;
  background-size: cover;
  background-repeat: no-repeat;
}
.form{
  flex-grow: 1;
  margin-right: 10px;
}
.input{
    height: 30px;
    width: 100%;
    border: 0px solid transparent;
    background-color: #25282a;
    outline: none;
    color: #fff;
    font-size: 18px;
    padding: 4px;
}
.gridList{
    display: grid;
    grid-template-columns: auto auto auto;
    width: 1062px;
    min-height: 500px;
    margin-top: 15px;
    transition-property: height;
    transition-timing-function: ease-out;
    transition-duration: .2s;
    animation-duration: 1s;
    animation-timing-function: ease-out;
    animation-delay: .1s;
    animation-iteration-count: 1;
    animation-name: herogridpage_gridIn_NeQOP;
    position: relative;
}
.heroIcon{
    width: 225px;
    height: 127px;
    margin-bottom: 20px;
    margin-right: 190px;
    box-shadow: 1px 1px 4px #000;
    filter: saturate(0.8);
    background-size: 110%;
    background-repeat: no-repeat;
    position: relative;
    overflow: hidden;
    cursor: pointer;
}
.heroNameContainer{
  width: 100%;
  height: 50px;
  position: absolute;
  bottom: -40px;
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 3;
  opacity: 0;
}
.PrimaryStatIcon{
    width: 42px;
    height: 42px;
    padding: 8px;
    filter: drop-shadow(0px 0px 4px black);
}
.heroName{
    font-size: 18px;
    line-height: 20px;
    font-family: 'Cinzel', serif;
    font-weight: 600;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 8px;
    padding-left: 0px;
    text-shadow: 0px 0px 4px #000;
}
.fadeContainer{
    width: 100%;
    height: 100%;
    position: absolute;
    transition-property: opacity,bottom;
    transition-timing-function: ease-out;
    transition-duration: .2s;
    opacity: 0;
}
.fadeBottom{
    left: 0px;
    bottom: 0px;
    right: 0px;
}
.fade1keus{
  position: absolute;
  width: 100%;
  height: 100%;
}
/* .grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  background-color: #2196F3;
  padding: 10px;
}
.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;
} */
</style>
