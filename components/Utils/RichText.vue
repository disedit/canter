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

    &:hover {
      color: var(--color, var(--color-black));
    }
  }

  p {
    line-height: 1.5;
    hyphens: auto;

    &:not(:last-child) {
      margin-bottom: .75em;
    }
  }

  h2 {
    font-size: var(--text-lg);
    margin-bottom: .25em;
  }

  &.text-lg p {
    line-height: 1.3;
  }
}
</style>