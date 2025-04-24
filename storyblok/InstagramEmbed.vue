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

onMounted(() => {
  window.instgrm && window.instgrm.Embeds.process()
})
</script>

<template>
  <div v-editable="blok" v-html="blok.embed" />
</template>
