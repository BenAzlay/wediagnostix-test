<template>
  <div>
    <h1 class="font-bold text-xl mb-4 text-center text-blue-600">All uploaded Images</h1>
    <images-list :list="images" />
  </div>
</template>

<script>
import ImagesList from '@/components/ImagesList'

export default {
  name: 'AllImages',
  components: {
    ImagesList
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>
