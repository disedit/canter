<script setup>
defineProps({ blok: Object })
</script>

<template>
  <div v-editable="blok" class="bg-white border-3 p-site">
    <StoryblokComponent
      v-for="component in blok.blocks"
      :key="component._uid"
      :blok="component"
    />
  </div>
</template>
