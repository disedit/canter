<script setup>
defineProps({ blok: Object })
</script>

<template>
  <section
    v-editable="blok"
    :class="['bg-gray min-h-fill', `bg-shapes-${blok.shapes}`]"
    :style="{ backgroundImage: blok.background.filename ? `url(${blok.background.filename})` : false }"
  >
    <div class="pt-nav-area p-site max-w-[1000px] mx-auto">
      <h1 class="text-4xl max-w-[40ch] text-balance leading-[.9] -tracking-[.1em] font-light">
        {{ blok.title }}
      </h1>

      <div class="flex flex-col gap-site mt-8">
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

.bg-shapes-purple {
  background-image: url(../assets/images/purple.svg);
}

.bg-shapes-red {
  background-image: url(../assets/images/red.svg);
}

.bg-shapes-lime {
  background-image: url(../assets/images/lime.svg);
}

.bg-shapes-canters {
  background-image: url(../assets/images/canters.svg);
}
</style>