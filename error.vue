<script setup>
const props = defineProps({
  error: Object
})
</script>

<template>
  <div class="">
    <div class="">
      <div>{{ error.statusCode }}</div>
      <h1>{{ error.message }}</h1>
    </div>

    <div class="">
      <NuxtLink to="/" class="hover:underline">BACK</NuxtLink>
    </div>
  </div>
</template>