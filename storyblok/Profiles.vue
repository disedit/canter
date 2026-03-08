<script setup>
defineProps({ blok: Object })
</script>

<template>
  <div class="px-12 md:p-0">
    <h2 class="text-3xl max-w-[40ch] text-balance leading-[.9] -tracking-[.08em] font-light text-blue mb-10">
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