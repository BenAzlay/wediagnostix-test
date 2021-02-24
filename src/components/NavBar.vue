<template>
  <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-blue-800 mb-3">
    <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div class="relative flex w-auto px-4 justify-start items-center">
            <router-link to="/" class="navbar-item whitespace-no-wrap" title="Upload form">
                Upload Image
            </router-link>
            <router-link to="/images" class="navbar-item whitespace-no-wrap" title="List of all images">
                All Images
            </router-link>
            <router-link to="/recent-images" class="navbar-item whitespace-no-wrap" title="List of images uploaded less than 1 hour ago">
                Recent Images
            </router-link>
        </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
.navbar-item {
    font-weight: 700;
    line-height: 1.625;
    display: inline-block;
    margin-right: 2.5rem;
    text-transform: uppercase;
    --tw-text-opacity: 1;
    color: rgba(255, 255, 255, var(--tw-text-opacity));
}
.navbar-item:hover {
    --tw-text-opacity: 1;
    color: rgba(209, 213, 219, var(--tw-text-opacity));
}
</style>
