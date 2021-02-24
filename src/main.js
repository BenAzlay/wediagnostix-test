import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import { mapState, mapActions } from 'vuex'

Vue.config.productionTip = false

Vue.mixin({
  computed: {
    ...mapState('images', ['images']),
  },
  methods: {
    ...mapActions('images', ['saveImages']),

    // Backend API methods
    // GET Images
    fetchImages () {
      console.log(`fetching images`)
      return this.$api.get(`/api/images/`)
    },
    // POST Image
    postImage (image) {
      console.log(`posting image`)
      return this.$api.post(`/api/images/`, image)
    },
  },
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
