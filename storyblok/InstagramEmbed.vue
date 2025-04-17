<script setup>
defineProps({ blok: Object })

useHead({
  script: [
    {
      src: '//www.instagram.com/embed.js',
      async: true,
    },
  ],
})
</script>

<template>
  <div v-editable="blok" v-html="blok.embed" />
</template>
