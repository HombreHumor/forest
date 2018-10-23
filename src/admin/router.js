import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';

Vue.use(VueRouter);

import works from './components/works.vue';
import skills from './components/skills.vue';
import blogs from './components/blogs.vue';

const WorksComponent = { template: `<works></works>`, components: { works }};
const SkillsComponent = { template: `<skills></skills>`, components: { skills }};
const BlogsComponent = { template: `<blogs></blogs>`, components: { blogs }};

const routes = [
  { path: '/works', component: WorksComponent},
  { path: '/skills', component: SkillsComponent},
  { path: '/blogs', component: BlogsComponent}
];

const router = new VueRouter({ mode: 'history', routes });

const checkUser = axios.create({
  baseURL: 'https://webdev-api.loftschool.com/'
});

// router.beforeEach((to, from, next) => {
//   checkUser.get('/user', {
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem('token')}`
//     }
//   }).then(response => { 
//     next()
//   }).catch(error => {
//     localStorage.removeItem('token');
//     window.location.href="/?auth";
//   })
// });

export default router;