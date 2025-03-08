<script setup>
defineProps({ blok: Object })
</script>

<template>
  <div v-editable="blok" class="grid md:grid-cols-2 gap-site">
    <StoryblokComponent
      v-for="component in blok.blocks"
      :key="component._uid"
      :blok="component"
    />
  </div>
</template>
