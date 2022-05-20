<template>
<div class="RootFooter">
    <div class="Logos">
        <a href="https://www.valvesoftware.com/en/about">
            <img class="FooterLogo" src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/valve_logo.png">
        </a>
        <a href="/">
            <img class="FooterLogo" src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/footer_logo.png">
        </a>
    </div>
    <div class="Legal">
        Dota and the Dota logo are trademarks and/or registered trademarks of Valve Corporation. 2022 Valve Corporation, all rights reserved.
    </div>
</div>
</template>

<script>
export default {
    
}
</script>

<style>
.RootFooter{
    text-align: center;
    width: 100%;
    z-index: 5;
    padding: 30px 100px;
    background-color: #272727;
}
.Logos{
    width: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.FooterLogo{
    margin: 0px 15px 20px 15px;
    max-height: 30px;    margin: 0px 15px 20px 15px;
    max-height: 30px;
}
.Legal{
    text-align: center;
    font-size: 14px;
    color: #777;
    padding: 0 20px;
    width: 500px;
    margin: 0 auto;
}
@media (max-width: 375px){
.Logos{
    width: 100px;
    justify-content: center;
}
.Legal{
    font-size: 10px;
    padding: 0;
    width: 100%;
}
}

</style>