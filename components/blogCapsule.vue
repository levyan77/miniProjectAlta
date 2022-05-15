<template>
    <a class="blogCapsule" href="https://www.dota2.com/newsentry/3185743826532667937">
        <div class="blogEntry" style="background-image: url(https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/clans/3703047/63fb3d07af8943fd5d3388b12329ec32a64c4b01.jpg);">
            <div class="fadeContainer fadeBottom">
                <div class="fade1keus" style="background: linear-gradient(rgba(19, 23, 28, 0) 60%, rgba(19, 23, 28, 0.733) 70%, rgb(19, 23, 28) 90%);"></div>
            </div>
            <div class="blogDesc">
                The Eastern Europe Qualifier tournament is now complete after 5 days of intense Dota. Congratulations to BetBoom, Team Spirit, and Mind Games who will now join teams from the...
            </div>
            <div class="blogTitle">
                The Stockholm Major Fantasy and Gameplay Update 7.31c
            </div>
            <div class="blogDate">
                May 5, 2022
            </div>
        </div>
    </a>
</template>

<script>
export default {

}
</script>

<style>
.blogCapsule{
    width: 400px;
    height: 245px;
    margin: 15px;
    justify-items: center;
    position: relative;
    flex-wrap: wrap;
}
.blogEntry{
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #333;
    position: relative;
    background-size: cover;
    background-position: top;
    border-bottom: 2px solid #555;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column-reverse;
    box-shadow: 0px 0px 10px #000;
    background-image: url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//blog/default_cover.jpg);
    text-align: left;
    cursor: pointer;
    user-select: none;
    transition-property: all;
    transition-duration: .2s;
    transition-timing-function: ease-in-out;
}
.fadeContainer{
    width: 100%;
    height: 100%;
    position: absolute;
    pointer-events: none;
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
.blogDesc{
    font-size: 18px;
    color: rgba(255,255,255,.7);
    z-index: 2;
    margin-left: 20px;
    margin-bottom: 0px;
    opacity: 0;
    transform: translateY(20px);
    height: 0px;
    transition-duration: .5s;
    transition-timing-function: ease;
    transition-property: height,opacity,transform;
}
.blogTitle{
    margin: 0px 10px 8px 20px;
    text-shadow: 0px 0px 10px #000;
    font-family: "Reaver",serif;
    font-weight: bold;
    text-transform: none;
    letter-spacing: 0px;
    font-size: 24px;
    line-height: 115%;
    color: #fff;
    z-index: 2;
}
.blogDate{
    color: rgba(255,255,255,.7);
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-left: 20px;
    margin-bottom: 8px;
    z-index: 2;
}
</style>