<template lang="pug">
  tr.category(v-if="editMode === false")
    td.category__name {{ skill.title }}
    td <span class="category__percent">{{ skill.percents }}</span> %
    td
      button(
        @click="removeSkill(skill.id)"
        type="button"
      ).category__delete-button x

  tr(v-else).additor
    td
      input(
        v-model="newSkill.title"
        type="text"
        placeholder="new category"
      ).additor__category-input
    td
      input(
        v-model="newSkill.percents"
        type="text"
        placeholder="%"
      ).additor__percent-input
    td
      button(
        type="button"
        @click="addNewSkill(newSkill)"
      ).additor__add-button Добавить
</template>

<script>
  import { mapActions } from 'vuex';
  export default {
    props: {
      skill: {
        type: Object,
        default: () => {}
      },
      typeId: {
        type: Number,
        default: 0
      },
      editMode: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        newSkill: {
          title: '',
          percents: 0,
          category: this.typeId
        }
      }
    },
    methods: {
      ...mapActions({
        addNewSkill: 'skills/add',
        removeSkill: 'skills/remove'
      })
    }
  }
</script>

<style lang="scss" scoped>
  .category {
    height: 42px;

    &:last-child {
      margin: 0;
    }

    &__name {
      margin-right: 30px;
    }
    &__percent {
      padding: 8px;
      background-color: white;
      border-radius: 5px;
    }
    &__delete-button {
      background-color: #f44336;
      border: none;
      cursor: pointer;
      transition: backgroundColor 0.25s ease-in-out;

      &:hover {
        background-color: #d32f2f;
      }
    }
  }

  .additor {

    &__category-input {
      width: 100px;
      padding: 2px;
      border-radius: 2px;
      border: none;
    }

    &__percent-input {
      width: 26px;
      padding: 2px;
      border-radius: 2px;
      border: none;
    }

    &__add-button {
      background-color: #6c9c5a;
      color: white;
      border: none;
      cursor: pointer;
      transition: backgroundColor 0.25s ease-in-out;
      padding: 10px;
      border-radius: 5px;

      &:hover {
        background-color: #4e8839;
      }
    }
  }
</style>