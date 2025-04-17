<script setup>
defineProps({ blok: Object })
</script>

<template>
  <img
    :src="blok.image?.filename"
    :alt="blok.image?.alt"
    class="w-full block"
    :style="blok.style"
  />
</template>
