import Vue from 'vue';
import Vuex from 'vuex';
// import createPersistedState  from "vuex-persistedstate";
import news from './news';


// const persistedState = createPersistedState ({
//     paths: ['news.Kategori','news.listArtikel','news.listOrigin','news.link','news.linkBaru'],
// });


Vue.use(Vuex);

export default () => new Vuex.Store({
    modules:{
        news: {
            namespaced: true,
            ...news,
        }
    },
    // plugins: [persistedState],
});