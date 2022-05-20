<template>
  <div>

  </div>
</template>
<script>
export default {
  name:"testingAbc",
  setup() {
    
  },
}
</script>
<!-- <template>
<div class="heroPage" style="background-image: url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/backgrounds/greyfade.jpg);">
  <header-comp />
  <div class="heroHeader">
    <div class="heroTitle"> Choose Your Hero</div>
    <div class="heroSubTitle">From magical tacticians to fierce brutes and cunning rogues, Dota 2's hero pool is massive and limitlessly diverse. Unleash incredible abilities and devastating ultimates on your way to victory.
    </div>
  </div>

  <div class="heroFilter">
    <div class="filterLabel">Filter Heroes</div>
    <div class="spesificFilterContainer">
        <div class="selectorLabel">Attribute</div>
        <div class="filterIcon" style="background-image: url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-str-active.png);"></div>
        <div class="filterIcon" style="background-image: url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-agi-active.png);"></div>
        <div class="filterIcon" style="background-image: url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-int-active.png);"></div>
    </div>
    <div class="spesificFilterContainer">
        <div class="selectorLabel">Complexity</div>
        <div class="filterIcon" style="background-image: url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-diamond.png);"></div>
        <div class="filterIcon" style="background-image: url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-diamond.png);"></div>
        <div class="filterIcon" style="background-image: url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-diamond.png);"></div>
    </div>
    <div class="searchBarContainer">
      <div class="searchBar">
          <div class="iconSearch" style="background-image: url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/search.svg);"></div>
          <form class="form">
            <input class="input" type="text" value="">
          </form>
      </div>
    </div>
  </div>

  <div class="gridList" style="height: 4442px">
    <div class="heroIcon"
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
    </div>

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
    </div>
  </div>
</div>  
</template>

<script>
import headerComp from '~/components/headerComp.vue'
export default {
  components: { headerComp },
  name: 'HeroesPage',
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
    font-family: Reaver,serif;
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
    width: 1200px;
    min-height: 1500px;
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
    box-shadow: 1px 1px 4px #000;
    filter: saturate(0.8);
    transition-property: transform,box-shadow,background-size,opacity,top,left;
    transition-timing-function: ease-out;
    transition-duration: .3s;
    background-position: center;
    background-size: 110%;
    background-repeat: no-repeat;
    position: absolute;
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
  transition-property: opacity,bottom;
  transition-timing-function: ease-out;
  transition-duration: .2s;
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
    font-family: "Reaver",serif;
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
</style> -->
