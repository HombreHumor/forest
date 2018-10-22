<template lang="pug">
  ul.tabs-list
    router-link(to="/works", active-class="tabs-list__item--active").tabs-list__item Мои работы
    router-link(to="/skills", active-class="tabs-list__item--active").tabs-list__item Обо мне
    router-link(to="/blogs", active-class="tabs-list__item--active").tabs-list__item Блог
</template>

<style lang="scss">
  .tabs-list {
    display: flex;
    align-items: center;
    height: 100%;

    @media (min-width: 1200px) {
      width: 1190px;
      margin: 0 auto;
    }

    @media (max-width: 480px) {
      flex-direction: column;
    }

    &__item {
      background-color: #f0efe9;
      width: 180px;
      text-align: center;
      transition: all 0.25s ease-in-out;
      border-right: 2px solid white;
      margin: 0;
      padding: 0;
      text-transform: uppercase;
      text-decoration: none;
      line-height: 60px;
      cursor: pointer;
      color: #566358;
      font-family: 'Roboto', Helvetica, sans-serif;
      font-weight: 600;
      font-size: 16px;

      @media (max-width: 480px) {
        line-height: 46px;
        width: 100%;
        border: none;
        border-top: 2px solid white;
      }

      &:hover {
        background-color: #e5ede5;
      }

      &:first-child {
        @media (min-width: 1200px) {
          border-left: 2px solid white;
        }
        @media (max-width: 480px) {
          border: none;
        }
      }
      
      &--active {
        background-color: white;
        color: #6c9c5a;
      }
    }
  }
</style>