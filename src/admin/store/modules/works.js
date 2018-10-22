const works = {
  namespaced: true,
  state: {
    data: []
  },
  mutations: {
    loadWorks: (state, works) => state.data = works,
    addNewWork: (state, newWork) => state.data.push(newWork),
    editWork: (state, work) => state.work = work.post,
    removeWork: (state, workId) => state.data = state.data.filter(work => work.id !== workId)
  },
  actions: {
    fetch({commit}) {
      this.$axios.get('/works/43').then(
        response => {
          console.log(response.data);
          commit('loadWorks', response.data);
        },
        error => {
          console.error(error)
        }
      );
    },
    add({commit}, work) {
      const data = new FormData();

      data.append('title', work.title);
      data.append('techs', work.techs);
      data.append('link',work.link);
      data.append('photo', work.photo);
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      };
      this.$axios.post('/works', data, config).then(
        response => {
          commit('addNewWork', response.data);
        },
        error => {
          console.error(error)
        }
      );
    },
    edit({
      commit
    }, work) {
      const data = new FormData();

      data.append('title', work.title);
      data.append('techs', work.techs);
      data.append('link', work.link);
      data.append('photo', work.photo);
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      };
      this.$axios.post(`/works/${work.id}`, data, config).then(
        response => {
          commit('editWork', response.data);
          commit('removeWork', work.id);
          commit('addNewWork', work);
        },
        error => {
          console.log(error)
        }
      )
    },
    remove({commit}, workId) {
      this.$axios.delete(`/works/${workId}`).then(
        response => {
          commit('removeWork', workId)
        },
        error => {
          console.error(error)
        }
      )
    }
  }
}

export default works;