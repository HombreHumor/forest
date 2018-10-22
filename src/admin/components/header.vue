<template lang="pug">
  .content-container
    .header-overlay
      h1.header-overlay__title Панель администрирования
      a(href="/").header-overlay__link Вернуться на сайт
</template>

<style lang="scss" scoped>
  .header-overlay {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    @media (max-width: 480px) {
      flex-direction: column-reverse;
      justify-content: space-around;
      padding: 8px 0;
    }

    &__title {
      color: white;
      font-size: 28px;
      font-weight: 500;
      margin: 0;

      @media (max-width: 768px) {
        font-size: 21px;
      }
    }

    &__link {
      color: rgb(225, 225, 225);
      text-decoration: none;
      border-bottom: 1px solid rgb(225, 225, 225);

      &:hover {
        border-color: transparent;
      }
      
      @media (max-width: 480px) {
        font-size: 14px;
      }      
    }
  }
</style>