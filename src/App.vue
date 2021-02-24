<template>
  <div id="app">
    <nav-bar />
    <router-view class="px-4"/>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from "axios";

import NavBar from '@/components/NavBar'

export default {
  name: 'App',
  components: {
    NavBar
  },
  created() {
    Vue.prototype.$api = axios.create({
      baseURL: 'http://localhost:8000',
      headers: { 'Content-Type': 'multipart/form-data' }
    })
  },
  mounted() {
    // Recupere les images dans la BDD
    this.fetchImages()
      .catch(error => {
        return new Promise(() => {
          console.log('fetching images failed')
          console.log(error)
        })
      })
      .then(response => response.data)
      .then(this.saveImages)
  }
}
</script>

<style>
</style>
