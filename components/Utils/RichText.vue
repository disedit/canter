<script setup>
const props = defineProps({
  content: {
    type: Object,
    required: true
  },
  format: {
    type: Boolean,
    default: false
  }
})

const renderedContent = computed(() => {
  return renderRichText(props.content)
})
</script>

<template>
  <div v-html="renderedContent" :class="{'rich-text-formatted': format }" />
</template>

<style lang="scss">
.rich-text-formatted {
  a {
    text-decoration: underline;
  }

  p {
    line-height: 1.25;
    hyphens: auto;
  }
}
</style>