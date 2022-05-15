<template>
  <v-app dark>
    <!-- <v-app-bar :color="bg">
      <nuxt-link style="text-decoration: none; color: white;" to="/" v-text="Game"/>
      <v-spacer />
      <nuxt-link style="text-decoration: none; color: white;" to="/heroes" v-text="Heroes"/>
      <v-spacer />
      <nuxt-link style="text-decoration: none; color: white;" to="/news" v-text="News"/>
      <v-spacer />
    </v-app-bar> -->
    <v-main>
      <!-- <v-container>
        <Nuxt />
      </v-container> -->
        <Nuxt />
    </v-main>
    <v-footer :absolute="!fixed" app>
      <!-- <span>&copy; {{ new Date().getFullYear() }}</span> -->
      <FooterComp/>
    </v-footer>
  </v-app>
</template>

<script>
import FooterComp from "~/components/footerComp.vue"
export default {
    name: "DefaultLayout",
    data() {
        return {
            clipped: false,
            drawer: false,
            fixed: false,
            items: [
                {
                    icon: "mdi-apps",
                    title: "Overview",
                    to: "/",
                },
                {
                    icon: "mdi-chart-bubble",
                    title: "Spesifikasi",
                    to: "/specProduct",
                },
                {
                    icon: "mdi-chart-bubble",
                    title: "Ulasan",
                    to: "/ulasanProduct",
                },
            ],
            miniVariant: false,
            right: true,
            rightDrawer: false,
            title: "Product Name",
            Game: "Game",
            Heroes: "Heroes",
            News: "News",
            bg: "transparent"
        };
    },
    methods: {},
    components: { FooterComp }
}
</script>
