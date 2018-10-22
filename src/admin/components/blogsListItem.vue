<template lang="pug">
  tr.blog-item
    td.blog-item__name {{ blog.title }}
    td.blog-item__date {{ convertDate(blog.date) }}
    td.blog-item__content {{ blog.content }}
    td.blog-item__buttons
      button(
        @click="editBlog(blog)"
        type="button"
      ).button.button--edit
      button(
        @click="removeBlog(blog.id)"
        type="button"
      ).button.button--delete
</template>

<script>
  import { mapActions } from 'vuex';
  export default {
    props: {
      blog: {
        type: Object,
        default: () => {}
      }
    },
    methods: {
      ...mapActions({
        editBlog: 'blogs/edit',
        removeBlog: 'blogs/remove'
      }),
      convertDate(date) {
        return new Date(date * 1000).toLocaleDateString();
      }
    }
  }
</script>

<style lang="scss">
  .blog-item {
    td {
      text-align: left;
      padding: 30px 0 30px 25px;
      font-size: 14px;
      color: #455a64;
    }
    &__date {
      white-space: nowrap;
    }
    &__content {
      max-width: 250px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    &__buttons {
      display: flex;
      flex-direction: column;
      padding: 30px 40px !important;
    }
    
    .button {
      width: 20px;
      height: 20px;  
      border: none;
      cursor: pointer;
      &:focus-within {
        outline: none;
      }
      &:hover {
        transform: scale(1.05);
      }
      &--edit {
        background: url(../content/pencil.png) no-repeat center;
        margin-bottom: 10px;
      }
      &--delete {
        background: url(../content/cancel.png) no-repeat center;
      }
    }
  }
</style>