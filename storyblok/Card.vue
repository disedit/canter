<script setup>
const props = defineProps({ blok: Object })
const { internalLink } = useLinks()
const tag = computed(() => {
  if (props.blok.link?.url) {
    return resolveComponent('NuxtLink')
  }
  return 'div'
})
</script>

<template>
  <Component
    :is="tag"
    :to="internalLink(blok.link)"
    v-editable="blok"
    :class="['bg-white border-3 flex flex-col gap-site', { 'p-site': !blok.edge, 'transition hover:shadow-mario hover:-translate-[1rem]': tag !== 'div' }]"
    :style="blok.style"
  >
    <StoryblokComponent
      v-for="component in blok.blocks"
      :key="component._uid"
      :blok="component"
    />
</Component>
</template>
