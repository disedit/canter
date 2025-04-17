<script setup>
defineProps({ blok: Object })
const { internalLink } = useLinks()
</script>

<template>
  <div v-editable="blok" class="bg-black text-white flex flex-col md:flex-row text-lg -tracking-[0.05em] md:gap-4 justify-evenly p-site md:p-0">
    <NuxtLink
      v-for="link in blok.links"
      :key="link._uid"
      :to="internalLink(link.link)"
      class="md:py-8 py-2 hover:underline underline-offset-[0.2em] decoration-[0.05em]"
    >
      {{ link.label }}
    </NuxtLink>
  </div>
</template>
