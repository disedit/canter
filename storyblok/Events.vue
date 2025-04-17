<script setup>
defineProps({ blok: Object })
</script>

<template>
  <div v-editable="blok">
    <div class="text-md">
      <UtilsRichText :content="blok.content" />
    </div>
    <ul class="border-t-3">
      <StoryblokComponent
        v-for="component in blok.events"
        :key="component._uid"
        :blok="component"
      />
    </ul>
    
  </div>
</template>
