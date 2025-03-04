<script setup>
defineProps({ blok: Object })
</script>

<template>
  <div :style="{ height: blok.height }" />
</template>