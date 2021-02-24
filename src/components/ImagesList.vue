<template>
  <div class="grid gap-4 grid-cols-4">
        <div v-for="image in list" :key="image.id" class="flex flex-col p-2 mb-4 border-2 border-blue-800 rounded-md items-center">
            <h2 class="font-bold text-lg text-blue-800">{{ image.title }}</h2>
            <img :src="image.image_file" class="h-32 mb-2" alt="Image">
            <h2 class="font-semibold">Date Taken: {{ new Date(image.date_taken).toLocaleString() }}</h2>
            <h2 class="font-semibold">Date DB: {{ new Date(image.date_db).toLocaleString() }}</h2>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ImagesList',
  components: {
  },
  props: {
      list: {
          type: Array,
          required: true
      }
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
