<template>
  <div>
    <h1 class="font-bold text-xl text-center text-blue-600">Image upload form</h1>
    <div class="mb-2">
      <label class="font-semibold mb-2">
          Title
      </label>
      <input
          v-model="imageToUpload.title"
          type="text" 
          placeholder="Image title"
          autocomplete="off"
          class="py-3 px-4 border-2 block rounded appearance-none">
    </div>
    <div class="flex flex-row items-center mb-6">
      <file-input-field @change="onFilePicked" />
      <img v-if="displayedImage.length" :src="displayedImage" class="h-12 ml-4" alt="Image">
    </div>
    <button
      class="py-3 px-4 uppercase rounded mb-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
      @click.prevent="addImage">Submit</button>
    
    <p class="text-green-600 italic">{{ validationMessage }}</p>
  </div>
</template>

<script>
import FileInputField from '../components/FileInputField.vue'

export default {
  name: 'UploadPage',
  components: {
    FileInputField
  },
  data () {
    return {
        imageToUpload: {
          title: '',
          image_file: null,
          date_taken: '',
          // date_db: null
        },
        validationMessage: '',
        displayedImage: ''
    }
  },
  methods: {
    onFilePicked (files) {
      this.imageToUpload.image_file = files[0]
      this.imageToUpload.date_taken = new Date().toISOString()
      // For display
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
          this.displayedImage = fileReader.result
      })
      fileReader.readAsDataURL(files[0]);
    },
    addImage() {
      var payload = new FormData();

      payload.append("title", this.imageToUpload.title);
      payload.append('image_file', this.imageToUpload.image_file);
      payload.append('date_taken', this.imageToUpload.date_taken);
      payload.append('date_db', new Date().toISOString());
      this.postImage(payload)
        .catch(error => {
        return new Promise(() => {
            console.error('Caught Error', error)
        })
        })
        .then(this.fetchImages)
        .then(response => response.data)
        .then(this.saveImages)
        .then(() => {
            this.validationMessage = `'${this.imageToUpload.title}' has been successfully uploaded to the DB`
            this.imageToUpload = {
              title: '',
              image_file: null,
              date_taken: new Date(),
              date_db: null
            }
            this.displayedImage = ''
        })
    }
  }
}
</script>
