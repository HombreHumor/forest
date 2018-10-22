<template lang="pug">
  .content-container
    .skills
      //- app-form
      h2.skills__title Страница "Обо мне"
      
      ul.skills__group
        skills-row(
          v-for="type in categories"
          :key="type.id"
          :type="type"
          :skills="skills"
        )
</template>

<script>
  import skillsRow from './skillsRow.vue';
  import form from './form.vue';
  import { mapActions, mapState } from 'vuex';
  export default {
    components: {
      skillsRow,
      AppForm: form
    },
    data() {
      return {
        categories: [
          { id: 0, name: 'Frontend'},
          { id: 1, name: 'Backend'},
          { id: 2, name: 'Workflow'}
        ]
      }
    },
    computed: {
      ...mapState('skills', {
        skills: state => state.data
      })
    },
    created() {
      this.fetchSkills()
    },
    methods: {
      ...mapActions({
        fetchSkills: 'skills/fetch'
      })
    }
  }
</script>

<style lang="scss" scoped>
  .skills {
    &__title {
      margin: 0;
      margin-bottom: 40px;
      font-size: 21px;
    }
    &__group {
      display: flex;
      flex-wrap: wrap;
      align-items: baseline;
    }
    &__item {
      margin-right: 30px;
    }
  }
</style>