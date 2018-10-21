import Vue from 'vue';

const skill = {
  template: "#skill",
  props: {
    title: String,
    percentage: Number
  },
  mounted() {
    const circle = this.$refs.circle;
    const fillDash = 2.83 * this.percentage;
    const emptyDash = 2.83 * (100 - this.percentage);
    const progressDash = fillDash + ' ' + emptyDash;
    const currentOpacity = this.percentage / 100;
    circle.style.opacity = currentOpacity;
    circle.style.strokeDasharray = progressDash;
  }
}
const skillsRow = {
  template: "#skills-item",
  props: {
    skills: Object
  },
  components: {
    skill
  }
}
new Vue({
  el: "#skills-component",
  components: {
    skillsRow
  },
  data() {
    return {
      skills: [],
    }
  },
  created() {
    const data = require('../../data/skills.json');
    this.skills = data;

  },
  template: "#skills-list"
})