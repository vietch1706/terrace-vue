import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    typeArtist: null,
    jobArtist: null,
    categoryBlog: null,
    typeMusic: null,
  },
  getters: {
    typeArtist: (state) => {
      return state.typeArtist;
    },
    jobArtist: (state) => {
      return state.jobArtist;
    },
    categoryBlog: (state) => {
      return state.categoryBlog;
    },
    typeMusic: (state) => {
      return state.typeMusic;
    },
  },
  actions: {
    typeArtist(context, typeArtist) {
      context.commit("typeArtist", typeArtist);
    },
    jobArtist(context, jobArtist) {
      context.commit("jobArtist", jobArtist);
    },
    categoryBlog(context, categoryBlog) {
      context.commit("categoryBlog", categoryBlog);
    },
    typeMusic(context, typeMusic) {
      context.commit("typeMusic", typeMusic);
    },
  },
  mutations: {
    typeArtist(state, typeArtist) {
      state.typeArtist = typeArtist;
    },
    jobArtist(state, jobArtist) {
      state.jobArtist = jobArtist;
    },
    categoryBlog(state, categoryBlog) {
      state.categoryBlog = categoryBlog;
    },
    typeMusic(state, typeMusic) {
      state.typeMusic = typeMusic;
    },
  },
});
