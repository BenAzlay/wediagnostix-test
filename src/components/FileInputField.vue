<template>
    <div>
        <button
            class="py-3 px-4 uppercase rounded border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            @click.prevent="onPickFile">Select Image</button>
        <input
            type="file"
            style="display: none"
            ref="fileInput"
            accept="image/*"
            @change="$emit('change', $event.target.files)"/>
    </div>
</template>

<script>
export default {
  name: 'FileInputField',
  components: {
  },
  props: {
  },
  computed: {
  },
  methods: {
    onPickFile () {
        this.$refs.fileInput.click()
    },
  }
}
</script>

<style scoped>
input {
  appearance: none;
  display: block;
  width: 100%;
  --tw-text-opacity: 1;
  color: rgba(55, 65, 81, var(--tw-text-opacity));
  border-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgba(156, 163, 175, var(--tw-border-opacity));
  border-radius: 0.25rem;
  margin-bottom: 0.75rem;
  line-height: 1.25;
  --tw-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
}
</style>
