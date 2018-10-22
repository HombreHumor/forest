<template lang="pug">
  form.admin-form
    input(v-model="user.name" type="text" placeholder="login")
    input(v-model="user.password" type="password" placeholder="password")
    button(type="button" @click="sendData") Send  
</template>

<script>
  import axios from 'axios';
  axios.defaults.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
  export default {
    data() {
      return {
        user: {
          name: '',
          password: ''
        }
      }
    },
    methods: {
      sendData() {
        axios.post('https://webdev-api.loftschool.com/login', this.user).then(response => {
          if (response.status === 200) {
            const ttl = Math.floor(Date.now() / 1000 + response.data.ttl);
            localStorage.setItem('ttl', ttl);
            localStorage.setItem('token', response.data.token);
          }
        });
      }
    }
  }
</script>