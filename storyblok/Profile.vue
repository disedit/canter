<script setup>
const { blok } = defineProps({ blok: Object })

const showInfo = ref(false)
const showInfoDetails = ref(false)
const isImageTransitioning = ref(false)

function getTransitionName(isModalImage = false) {
  if (!isImageTransitioning.value) {
    return 'none'
  }

  if (isModalImage) {
    return showInfo.value ? `image-${blok._uid}` : 'none'
  }

  return showInfo.value ? 'none' : `image-${blok._uid}`
}

function showInfoBox() {
  if (document.startViewTransition) {
    isImageTransitioning.value = true

    const transition = document.startViewTransition(async () => {
      showInfoDetails.value = false
      showInfo.value = true
      await nextTick()
    })

    transition.finished.finally(() => {
      isImageTransitioning.value = false
      showInfoDetails.value = true
    })

    return
  }

  showInfo.value = true
  showInfoDetails.value = true
}

function closeInfoBox () {
  showInfoDetails.value = false

  if (document.startViewTransition) {
    isImageTransitioning.value = true

    const transition = document.startViewTransition(async () => {
      showInfo.value = false
      await nextTick()
    })

    transition.finished.finally(() => {
      isImageTransitioning.value = false
    })

    return
  }

  showInfo.value = false
}
</script>

<template>
  <div
    v-editable="blok"
  >
    <div @click="showInfoBox" class="relative flex flex-col gap-2 cursor-pointer">
      <div class="relative bg-gray" :style="{ 'view-transition-name': getTransitionName() }">
        <NuxtImg
          v-if="blok.photo?.filename"
          :src="blok.photo.filename"
          :alt="blok.photo.alt"
          width="800"
          class="aspect-1/1.25 object-cover grayscale brightness-150 contrast-75 mix-blend-multiply"
        />
        <div class="artist-blend-overlay absolute inset-0 bg-orange mix-blend-lighten pointer-events-none opacity-100" />
      </div>
      <h3 class="text-blue font-bold text-md leading-[1.1]">
        {{ blok.name }}
      </h3>
      <p v-if="blok.short_description" class="text-blue -mt-2">
        {{ blok.short_description }}
      </p>
    </div>
    <Transition name="fadeUp">
      <div v-if="showInfo" class="fixed z-10000 bg-gray/50 inset-0">
        <div class="info-box fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid md:grid-cols-[1fr_1fr] w-[80vw] md:w-full max-w-5xl bg-white border-2 border-blue text-blue text-base shadow-[.75rem_.75rem_0_0_var(--color-blue)] z-100000">
          <div class="hidden md:block relative bg-gray" :style="{ 'view-transition-name': getTransitionName(true) }">
            <NuxtImg
              v-if="blok.photo?.filename"
              :src="blok.photo.filename"
              :alt="blok.photo.alt"
              width="800"
              class="aspect-1/1.25 object-cover grayscale brightness-150 contrast-75 mix-blend-multiply"
            />
            <div class="artist-blend-overlay absolute inset-0 bg-orange mix-blend-lighten pointer-events-none opacity-100" />
          </div>
          <div class="grid grid-rows-[1fr] max-h-[39.84rem]">
            <div
              class="scroller p-site flex flex-col gap-site transition-opacity duration-150 min-h-0 shrink"
              :class="showInfoDetails ? 'opacity-100' : 'opacity-0 pointer-events-none'"
            >
            <div>  
              <h3 class="text-blue font-bold text-md leading-[1.1]">
                {{ blok.name }}
              </h3>
              <p v-if="blok.short_description" class="text-blue">
                {{ blok.short_description }}
              </p>
            </div>
            <UtilsRichText :content="blok.bio" class="prose text-blue" />
            </div>
          </div>
          <button
            @click="closeInfoBox"
            class="absolute top-4 right-4 bg-blue hover:bg-orange text-white flex items-center justify-center h-[1em] w-[1em] text-lg rounded-full cursor-pointer transition"
            :class="showInfoDetails ? 'opacity-100' : 'opacity-0 pointer-events-none'"
            aria-label="Cerrar información del artista"
          >
            <Icon name="ri:close-line" />
          </button>
        </div>
        <div class="backdrop fixed z-10000 bg-gray/25 inset-0" @click="closeInfoBox" />
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.scroller {
  overflow-y: auto;
  overscroll-behavior: contain;
  scrollbar-color: var(--color-orange) var(--color-white);
}
/* Fade up */
.fadeUp-enter-active, .fadeUp-leave-active {
  transition: all 0.3s ease;
  
  .info-box, .backdrop {
    transition: opacity 0.3s ease;
  }
}

.fadeUp-enter-from {
  opacity: 0;
  transform: translateY(.5rem);

  .info-box, .backdrop {
    opacity: 0;
    transform: translateY(.5rem);
  }
}

.fadeUp-leave-to {
  opacity: 0;
  transform: translateY(.5rem);

  .info-box, .backdrop {
    opacity: 0;
    transform: translateY(.5rem);
  }
}

.fadeUp-enter-to, .fadeUp-leave-from {
  opacity: 1;
  transform: translateY(0);

  .info-box, .backdrop {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
