import { createStore } from 'vuex';

export default createStore({
  state: {
    favoritesNewsId: [],
  },
  getters: {
    favoritesNewsId(state) {
      return state.favoritesNewsId;
    },
  },
  mutations: {
    ADD_NEWS(state, newsId) {
      if (state.favoritesNewsId.indexOf(newsId) === -1) {
        state.favoritesNewsId.push(newsId);
      }
    },
  },
  actions: {
    addNews(context, payload) {
      context.commit('ADD_NEWS', payload);
    },
  },
});
