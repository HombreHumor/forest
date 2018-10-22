<template lang="pug">
  #root
    header.admin-header
      app-header
    main.admin-main
      nav.admin-tabs
        tabs
      section.admin-content
        router-view
</template>

<script>
import header from './components/header.vue';
import tabs from './components/tabs.vue';

export default {
  components: {
    AppHeader: header,
    tabs
  }
};
</script>

<style lang="scss">
  #root {
    height: 100%;
    overflow-x: hidden;
  }

  .admin-header {
    background-color: #6c9c5a;
    width: 100vw;
    height: 80px;
  }
  .admin-main {
    height: calc(100% - 80px);
  }
  .admin-tabs {
    background-color: #f0efe9;
    width: 100vw;
    min-height: 60px;
  }
  .admin-content {
    height: calc(100% - 60px);
    padding-top: 40px;
  }

  .content-container {
    margin: 0 auto;
    height: 100%;

    @media (min-width: 1200px) {
      width: 1190px;
    }
    @media (max-width: 1200px) {
      width: 95%;
    }
    @media (max-width: 768px) {
      width: 94%;
    }
    @media (max-width: 480px) {
      width: 97.5%;
    }
  }

  body {
    background: url('./content/water.jpg') no-repeat center;
    background-size: cover;
    color: #566358;
    font-family: 'Roboto', Helvetica, sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.42;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh;
    margin: 0;
    padding: 0;

    &::before {
      content: '';
      position: fixed;
      background-color: rgba(255, 255, 255, 0.85);
      height: 100vh;
      width: 100vw;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
    }
  }

  ul {
    margin: 0;
    padding: 0;

    li {
      list-style: none;
    }
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
</style>
