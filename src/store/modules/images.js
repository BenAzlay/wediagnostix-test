const images = {
    namespaced: true,
    state: {
      images: []
    },
    getters: {
    },
    mutations: {
      addImages: (state, payload) => {
        state.images = payload.sort((a, b) => (a.titre > b.titre) ? 1 : -1) // ordre alphabetique
      }
    },
    actions: {
      saveImages ({ commit }, payload) {
        return new Promise((resolve) => {
          commit('addImages', payload)
          resolve()
        })
      }
    }
  }
  
  export default images
  