<template>
  <div>
    <h1 class="font-bold text-xl text-center mb-4 text-blue-600">Images uploaded in the last hour</h1>
    <images-list v-if="lastHourImages.length" :list="lastHourImages" />
    <p v-else class="italic text-center">No image was uploaded in the last hour</p>
  </div>
</template>

<script>
import ImagesList from '@/components/ImagesList'

export default {
  name: 'ListImages',
  components: {
    ImagesList
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  computed: {
    lastHourImages () {
      const now = new Date()
      return this.images.filter(image => new Date(image.date_db).getTime() > (now.getTime() - (1000*60*60)))
    }
  },
  methods: {
  }
}
</script>
