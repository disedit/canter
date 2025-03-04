<script setup>
defineProps({ blok: Object })
</script>

<template>
  <section class="bg-gray bg-cover min-h-fill" :style="{ backgroundImage: `url(${blok.background.filename})`}">
    <div class="pt-nav-area p-site max-w-[1000px] mx-auto">
      <h1 class="text-4xl max-w-[40ch] text-balance leading-[1] tracking-[-0.07em] font-light">
        {{ blok.title }}
      </h1>

      <div class="flex flex-col gap-site">
        <StoryblokComponent
          v-for="component in blok.blocks"
          :key="component._uid"
          :blok="component"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.newsletter-privacy-policy {
  input[type='checkbox'] {
    accent-color: var(--color-black);
    appearance:none;
    width: 1.5em;
    height: 1.5em;
    border: 3px var(--color-black) solid;
    background: var(--color-white);

    &:checked {
      background: var(--color-black);
    }
  }

  a:hover {
    font-weight: bold;
  }
}
</style>