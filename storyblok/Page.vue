<script setup>
defineProps({ blok: Object })
</script>

<template>
  <StoryblokComponent
    v-for="component in blok.body"
    :key="component._uid"
    :blok="component"
  />
</template>
