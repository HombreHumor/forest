<template lang="pug">
  li.skills__item
    .skill
      h3.skill__title {{ type.name }}
      table.skill__list
        skills-row-item(
          v-for="skill in skills"
          :key="skill.id"
          v-if="skill.category === type.id"
          :skill="skill"
        )
        skills-row-item(
          :editMode="true"
          :typeId="type.id"
        )
</template>

<script>
  import skillsRowItem from './skillsRowItem.vue'

  export default {
    components: {
      skillsRowItem
    },
    props: {
      type: {
        type: Object,
        default: () => {}
      },
      skills: {
        type: Array,
        default: () => []
      }
    }
  }
</script>

<style lang="scss" scoped>
  .skill {
    &__title {
      margin: 0;
      margin-bottom: 20px;
      font-weight: 600;
    }

    &__list {
      padding-left: 20px;
    }
  }
</style>