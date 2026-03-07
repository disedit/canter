<script setup>
defineProps({ blok: Object })
</script>

<template>
  <div>
    <h2 class="text-2xl tracking-right text-blue mb-10">
      {{ blok.title }}
    </h2>

    <div class="grid md:grid-cols-3 gap-12">
      <StoryblokComponent
        v-for="component in blok.artists"
        :key="component._uid"
        :blok="component"
      />
    </div>
  </div>
</template>