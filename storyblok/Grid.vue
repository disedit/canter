<script setup>
defineProps({ blok: Object })
</script>

<template>
  <div
    v-editable="blok"
    class="grid grid-component gap-site"
    :style="{
      '--template-desktop' : blok.template_desktop,
      '--template-mobile' : blok.template_mobile,
    }"
  >
    <StoryblokComponent
      v-for="component in blok.blocks"
      :key="component._uid"
      :blok="component"
    />
  </div>
</template>

<style scoped>
.grid-component {
  grid-template-columns: var(--template-desktop, 1fr 1fr);
}

@media (max-width: 50rem) {
  .grid-component {
    grid-template-columns: var(--template-mobile, 1fr);
  }
}
</style>