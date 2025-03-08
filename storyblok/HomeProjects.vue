<script setup>
defineProps({ blok: Object })
</script>

<template>
  <section v-editable="blok" :style="{ height: '100vh' }" class="bg-gray" />
</template>