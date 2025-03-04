<script setup>
defineProps({ blok: Object })
</script>

<template>
  <div class="bg-white border-3 mt-8 p-site">
    <StoryblokComponent
      v-for="component in blok.blocks"
      :key="component._uid"
      :blok="component"
    />
  </div>
</template>
