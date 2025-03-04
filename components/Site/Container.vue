<script setup>
defineProps({
  tag: {
    type: String,
    default: 'div'
  },
  padded: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <Component :is="tag" :class="['max-w-container mx-auto', { 'p-site': padded }]">
    <slot />
  </Component>
</template>
