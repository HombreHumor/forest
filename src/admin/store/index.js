import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import works from './modules/works'
import skills from './modules/skills'
import blogs from './modules/blogs'

export default new Vuex.Store({
  modules: {
    works, 
    skills,
    blogs
  }
})