<script setup>
defineProps({ blok: Object })
const { internalLink, target } = useLinks()
</script>

<template>
  <NuxtLink
    :to="internalLink(blok.link)"
    :target="target(blok.link)"
    :class="[
      'project relative flex flex-col border-3 bg-white h-[calc(15vw+15rem)] w-[calc(12vw+12rem)] overflow-clip',
      'transition hover:shadow-mario hover:-translate-[1rem] p-site shrink-0 gap-2',
      {
        'justify-end': blok.position === 'bottom'
      }
    ]"
  >
    <h2 class="project-title font-italic text-2xl hyphens-auto text-balance leading-[.9] -tracking-[.1em] font-light">
      {{ blok.title }}
    </h2>
    <img
      v-if="blok.asset?.filename"
      :src="blok.asset.filename"
      alt=""
      :style="blok.asset_style"
      class="project-asset"
    />
  </NuxtLink>
</template>

<style lang="scss" scoped>
.project.justify-end {
  .project-title {
    order: 2;
    margin-top: auto;
  }

  .project-asset {
    order: 1;
  }
}

.project:not(.justify-end) {
  .project-asset {
    margin-top: auto;
  }
}
</style>