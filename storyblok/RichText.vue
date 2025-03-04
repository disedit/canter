<script setup>
defineProps({ blok: Object })
</script>

<template>
  <UtilsRichText
    :content="blok.text"
    format
    :class="[`color-${blok.accent_color}`, {
      'text-base': blok.text_base === 'base',
      'text-md': blok.text_base === 'md',
      'text-lg': blok.text_base === 'lg'
    }]"
  />
</template>
