<script setup>
defineProps({ blok: Object })

const showInfo = ref(false)
</script>

<template>
  <div
    v-editable="blok"
    class="relative flex flex-col gap-2 cursor-pointer"
    @mouseenter="showInfo = true"
    @mouseleave="showInfo = false"
  >
    <div class="relative">
      <NuxtImg
        v-if="blok.photo?.filename"
        :src="blok.photo.filename"
        :alt="blok.photo.alt"
        width="800"
        class="aspect-[1/1.25] object-cover grayscale brightness-150 contrast-75 mix-blend-multiply"
      />
      <div class="absolute inset-0 bg-orange mix-blend-lighten pointer-events-none opacity-100" />
    </div>
    <h3 class="text-blue font-bold text-md leading-[1.1]">
      {{ blok.name }}
    </h3>
    <Transition name="fadeUp">
      <div v-if="showInfo" class="absolute right-0 bottom-[50%] w-[500px] translate-x-[50%] bg-white border-2 border-blue text-blue text-base shadow-[.5rem_.5rem_0_0_var(--color-blue)] z-100">
        <h3 class="text-blue font-bold text-md leading-[1.1] p-site">
          {{ blok.name }}
        </h3>
        <UtilsRichText :content="blok.bio" class="max-h-[50svh] overflow-auto p-site" />
      </div>
    </Transition>
  </div>
</template>

<style scoped>
/* Fade up */
.fadeUp-enter-active, .fadeUp-leave-active {
  transition: all 0.3s ease;
}

.fadeUp-enter-from {
  opacity: 0;
  transform: translateY(.25rem);
}

.fadeUp-leave-to {
  opacity: 0;
  transform: translateY(-.25rem);
}

.fadeUp-enter-to, .fadeUp-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>