<template>
  <div class="homePage">
    <header-comp />
    <div class="headerSection">
      <div class="BackgroundVideoContainer">
        <!-- <video-player class="video" autoplay="true" preload="auto" loop="true" src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/homepage/dota_montage_02.mp4" /> -->
        <video class="video" autoplay preload="auto" loop playsinline="" __idm_id__="581637">
          <source type="video/webm" src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/homepage/dota_montage_webm.webm" >
          <source type="video/mp4" src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/homepage/dota_montage_02.mp4" >          
        </video>
      </div>
      <div class="QuoteContainer">
        <div data-aos="fade-up" data-aos-duration="2000">
          <div class="QuoteText">
            "A Modern Multiplayer Masterpiece."
          </div>
          <div class="QuoteCredit">
            - Destructoid
          </div>
        </div>
        <div class="homepageHorizbar"></div>
        <a href="https://store.steampowered.com/app/570/Dota_2/" style="z-index:1">
          <div class="home_PlayButton">
            <div class="home_steamLogo" style="background-image: url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//icons/steam.svg);"></div>
            <div class="home_rightSide">
              <div class="PlayForFree">Play for Free</div>
              <div class="download">Download on Steam</div>
            </div>
          </div>
        </a>
      </div>
      <div class="BottomFade"></div>
    </div>
    <div class="newsSection">
      <div class="newsTop">
        <div class="latest">Latest News</div>
        <a class="viewAll" href="https://www.dota2.com/news">View All
          <div class="rightArrow" style="background-image: url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//arrow_left.png);"></div>
        </a>
      </div>
      <div class="newsCapsules">
        <BlogCapsule/>
      </div>
    </div>
    <div class="battleSection">
      <div class="battleBG">
        <img class="battleImg" src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/home/radiant_dire5.jpg">
        <img class="battleImgMobile" src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/home/battle_mobile.jpg">
        <div class="fadeContainer fadeTop">
          <div class="fade1keus" style="background: linear-gradient(to top, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.733) 90%, rgb(0, 0, 0) 100%);"></div>
        </div>
      </div>
      <div class="leftHalf">
        <div class="headerText" data-aos="fade-up" data-aos-duration="2000">
          <span class="Minor">Join The</span>
          <br>
          Battle of the Ancients
        </div>
        <div class="homepageHorizbar"></div>
        <div class="BodyText">Every day, millions of players worldwide enter the battle as one of over a hundred Dota Heroes in a 5v5 team clash.  Dota is the deepest multi-player action RTS game ever made and there's always a new strategy or tactic to discover.  It's completely free to play and always will be – start defending your ancient now.</div>
        <a class="standartButtonContainer" href="https://www.dota2.com/news">
          <div class="standartButton">
            <div class="buttonText">See What's New</div>
          </div>
        </a>
      </div>
    </div>
    <div class="chooseSection">
      <div class="fadeContainer fadeTop">
        <div class="fade1keus"></div>
      </div>
      <div class="fadeContainer fadeBottom">
        <div class="fade1keus"></div>
      </div>
      <div class="headerText" data-aos="fade-up" data-aos-duration="2000">
        <span class="Minor">Who Will You</span>
        <br>
        Choose?
      </div>
      <div class="homepageHorizbar"></div>
      <div class="BodyText">
        From magical tacticians to fierce brutes and cunning rogues, Dota 2's hero pool is massive and limitlessly diverse. Unleash incredible abilities and devastating ultimates on your way to victory.
      <a href="/heroes">
        <div class="standartButton">
          <div class="buttonText">View All Heroes</div>
        </div>
      </a>
      </div>
      <div class="heroGrid">
        <div class="heroGridRow row0" style="width: 13260px;">
        <dynamic-marquee direction="row">
          <div class="marquee-wrapper">
            <div
            v-for="(hero,hero_id) in heroes"
            :key="hero_id"
            >
              <a :href="`/heroes/${hero.id}`">
                <img class="heroIcon" :src="hero.image_url">
              </a>
            </div>
	        </div>
          </dynamic-marquee>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DynamicMarquee from 'vue-dynamic-marquee'
import heroesQuery from '~/queries/heroesData.gql'
import aosMixin from '~/mixins/aos'
import BlogCapsule from '~/components/blogCapsule.vue'


// import VideoPlayer from 'nuxt-video-player'


// require('nuxt-video-player/src/assets/css/main.css')

export default {
    name: "IndexPage",
    components: { BlogCapsule, DynamicMarquee },
    mixins: [aosMixin],
    data(){
      return{
        hoverPause: false
      }
    },
    apollo: {
        heroes: {
            query: heroesQuery,
            update(data){
                return data.heroes_general
            }            
        }
    },
}
</script>

<style>
.v-application--wrap{
  overflow-x: hidden;
}
  .video{
    height: 100%;
    object-fit: cover;
    width: 100vw;
    top: 0;
    left: 0;
    opacity: .5;
  }
  .homePage{
    width: 100%;
    color: #fff;
  }
  .headerSection{
    width: 100%;
    height: 75vh;
    margin-bottom: -90px;
    overflow: hidden;
    display: block;
    position: relative;
  }
  .BackgroundVideoContainer{
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
    -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%);
  }
  .QuoteContainer{
    height: 100%;
    width: fit-content;
    max-width: 60%;
    padding-left: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: flex-end;
    pointer-events: auto;
  }
  .QuoteText{
    font-size: 60px;
    line-height: 113%;
    font-family: 'Cinzel', serif;
    letter-spacing: 2px;
    font-weight: 600;
    color: #ffffffee;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px #000;
  }
  .QuoteCredit{
    font-size: 20px;
    font-family: "Radiance",sans-serif;
    letter-spacing: 2px;
    color: #ffffff90;
    font-weight: 600;
    margin-top: 5px;
    margin-bottom: 20px;
    text-transform: uppercase;
  }
  .homepageHorizbar{
    width: 80px;
    height: 3px;
    min-height: 3px;
    background-color: #ff6046;
    border-radius: 1px;
  }
  .home_PlayButton{
    min-width: 288px;
    height: 78px;
    border-radius: 6px;
    border: 3px solid #ffffff90;
    box-shadow: 0px 0px 5px #000;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    margin-top: 30px;
    cursor: pointer;
    transition-property: filter,transform,box-shadow;
    transition-timing-function: ease-in-out;
    transition-duration: .1s;
}
.home_PlayButton:hover{
  border: 3px solid #ff6046;
}
.home_steamLogo{
    width: 48px;
    height: 48px;
    margin: 0px 8px;
    background-size: contain;
    background-repeat: no-repeat;
}
.home_rightSide{
  flex-grow: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  margin-right: 12px;
}
.PlayForFree{
  font-size: 22px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #fff;
  text-shadow: 2px 2px 3px #000;
  font-family: 'Cinzel', serif;
  font-weight: 600;
}
.download{
    font-size: 15px;
    color: #858585;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-shadow: 2px 2px 3px #000;
}
.BottomFade{
    background: -webkit-gradient(linear, left top, left bottom, color-stop(60%, rgba(0, 0, 0, 0)), color-stop(80%, rgba(0, 0, 0, 0.7)), color-stop(100%, black));
}
.newsSection{
    width: 1200px;
    max-width: 100%;
    margin: 0px auto;
    position: relative;
    min-height: 308px;
    margin-bottom: -150px;
    z-index: 100;
}
.newsTop{
  margin-bottom: 10px;
  margin-left: 15px;
  display: flex;
  flex-direction: row;
}
.newsCapsules{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.latest{
    text-transform: uppercase;
    color: #fff;
    letter-spacing: 3px;
    font-weight: bold;
    margin: 2px 0px;
    margin-right: 20px;
}
.viewAll{
    text-transform: uppercase;
    color: #d0d1d3;
    letter-spacing: 3px;
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    transition-property: letter-spacing,font-size;
    transition-timing-function: ease-in-out;
    transition-duration: .1s;
}
.rightArrow{
    width: 20px;
    height: 20px;
    margin: 0px 8px;
    background-size: cover;
    background-repeat: no-repeat;
    transform: rotateZ(180deg);
}
.battleSection{
    width: 100%;
    min-height: 764px;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    background-size: cover;
    background-repeat: no-repeat;
    margin-bottom: 100px;
}
.battleBG{
    background-size: cover;
    background-position: center bottom;
    background-repeat: no-repeat;
    height: 30vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 200px;
}
.leftHalf{
    width: 100%;
    margin: 0 auto;
    opacity: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    z-index: 5;
}
.battleImg{
    width: 100%;
    opacity: .6;
    z-index: 0;
}

.battleImgMobile{
    display: none;
    opacity: .6;
    z-index: 0;
}

.fadeContainer{
  width: 100%;
  height: 100%;
  position: absolute;
  pointer-events: none;
}

.fadeTop{
    left: 0px;
    top: 0px;
    right: 0px;
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
.headerText{
    text-align: center;
    margin-bottom: 20px;
    font-family: 'Cinzel', serif;
    font-weight: 700;
    font-size: 100px;
    color: #FFFFFF;
    text-transform: uppercase;
    letter-spacing: 2px;
    line-height: 105%;
}
@media (max-width: 576px) {
  .headerText{
    font-weight: 700;
    font-size: 40px;
  }  
}

.homePage .chooseSection .headerText{
    margin-top: 900px;
    text-align: center;
    padding-bottom: 20px;
    z-index: 40;
    position: relative;
    width: 80%;
}

.Minor{
    font-size: 70px;
    color: #E2DACE;
    text-transform: uppercase;
    letter-spacing: 2px
}
.BodyText{
  text-align: center !important;
  margin-top: 30px;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  color: #e2dace;
  font-size: 26px;
  line-height: 115%;
  font-weight: 100;
  text-align: justify;
}
@media (max-width: 576px){
  .BodyText{
    z-index: 1;
    font-size: 16px;
    text-align: justify;
    filter: brightness(100);
  }
}
.standartButton{
    border: 3px solid #ffffff50;
    padding: 15px 25px;
    margin: 10px 30px;
    border-radius: 5px;
    cursor: pointer;
    width: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    transition-duration: .2s;
}
.standartButton:hover {
  /* border: 3px solid #ff6046; */
  border: 3px solid #ff0000;
}
.standartButtonContainer{
  z-index: auto;
}
@media (max-width: 576px){
  .standartButtonContainer{
    z-index: 1;
  }
}
.buttonText{
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #fff;
}
.chooseSection{
  width: 100%;
  max-width: 100%;
  min-height: 2000px;
  background-size: 3500px;
  background-position: center top;
  background-repeat: no-repeat;
  margin-bottom: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: -2;
  z-index: 40;
  position: relative;
  background-image: url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/home/heroes_full.jpg);
  -webkit-mask-image: linear-gradient(to top, transparent 0%, black 20%, black 80%, transparent 100%);
}

.chooseHeaderText{
    margin-top: 900px;
    text-align: center;
    padding-bottom: 20px;
    z-index: 40;
    position: relative;
    width: 80%;
}
.heroPortrait{
    width: 100%;
    min-height: 100%;
    max-width: 1500px;
    -webkit-mask-image: linear-gradient(to top, transparent 10%, black 50%);
}
.heroGrid{
  width: 80%;
  z-index: 3;
  min-height: 0;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  -webkit-mask-image: linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%);
}

.heroGridRow{
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 138px;
}

.heroIcon{
    min-width: 255px;
    width: 225px;
    height: 127px;
    margin-right: 10px;
    box-shadow: 1px 1px 4px #000;
    transition-property: transform,box-shadow,background-size,opacity,top,left;
    transition-timing-function: ease-out;
    transition-duration: .2s;
    background-position: center;
    background-size: 110%;
    background-repeat: no-repeat;
    overflow: hidden;
    position: relative;
    z-index: 5;
    cursor: pointer;
    flex-direction: row;
}
.heroIcon:hover{
    transform: scale(1.1);
    box-shadow: 3px 3px 8px #000;
    background-size: 100%;
    filter: saturate(1);
    z-index: 4;
}
.marquee-wrapper{
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    height: 100%;
}


@media (max-width: 1600px){
  .Minor{
    font-size: 50px;
  }
}

@media (max-width: 1200px) {
  .battleImg{
    display: none;
  }

  .battleImgMobile{
    display: block;
  }
}
@media (max-width: 576px){
  .QuoteText{
    font-size: 28px;
  }
}
</style>