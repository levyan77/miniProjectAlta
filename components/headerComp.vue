<template>
    <div class="microHeader">
        <div class="headerContent">
            <a class="DotaLogo" href="/"></a>
            <div class="NavItems">
                <a class="NavLink" href="/" >Game</a>
                <a class="NavLink" href="/heroes">Heroes</a>
                <a class="NavLink" href="/newsPage">News</a>
            </div>
            <div class="optionsSide">
                <div class="languageSelector"></div>
                    <div class="languageWrapper">
                        <!-- <div class="languageIcon"></div>
                        <span>Select Language</span>
                        <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/arrow_over.png"
                        class="languageArrow"> -->
                    </div>
            </div>
        </div>
        <!-- <v-app-bar>
            <nuxt-link style="text-decoration: none; color: white;" to="/" v-text="Game"/>
            <v-spacer />
            <nuxt-link style="text-decoration: none; color: white;" to="/heroes" v-text="Heroes"/>
            <v-spacer />
            <nuxt-link style="text-decoration: none; color: white;" to="/news" v-text="News"/>
            <v-spacer />
        </v-app-bar> -->
    </div>
</template>

<script>
export default {
    name: "HeaderComponent"
}
</script>
<style>
.v-application a{
    text-decoration: none;
    color: rgba(255, 255, 255,0.7) !important ;
}
.v-application a:hover{
    color: rgba(255, 255, 255,1) !important ;
}
.microHeader{
    top: 10px;
    position: absolute;
    z-index: 9999;
    background-color: transparent;
}
.headerContent{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
}
.DotaLogo{
    width: 200px;
    min-width: 200px;
    height: 50px;
    min-height: 50px;
    background-image: url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/global/dota2_logo_horiz.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    opacity: .8;
    margin-right: 40px;
}
.DotaLogo:hover{
    opacity: 1;
}
.NavItems{
    flex-grow: 1;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
}
.NavLink{
    font-size: 18px;
    font-family: 'Cinzel', serif;
    font-weight: 600;
    letter-spacing: 3px;
    opacity: .8;
    color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 3px 0px;
    margin: 0px 20px;
    text-transform: uppercase;
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;
}
.optionsSide{
    display: flex;
    flex-direction: row;
    align-items: center;    display: flex;
    flex-direction: row;
    align-items: center;
}
.languageSelector{
    cursor: pointer;
}
.languageWrapper{
    text-transform: uppercase;
    font-size: 14px;
    letter-spacing: 2px;
    color: #ffffff90;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
}
.languageIcon{
    width: 12px;
    height: 12px;
    margin-right: 8px;
    opacity: .8;
    margin-bottom: 1px;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//icons/language.svg);
}
.languageArrow{
    width: 10px;
    height: 6px;
    opacity: .9;
    margin-left: 5px;
}
</style>