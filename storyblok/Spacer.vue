<script setup>
defineProps({ blok: Object })
</script>

<template>
  <div v-editable="blok" :style="{ height: blok.height }" />
</template>