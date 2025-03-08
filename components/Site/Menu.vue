<script setup>
import { UtilsRichText } from '#components'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { Vue3Marquee } from 'vue3-marquee'

defineProps({
  settings: { type: Object, required: true },
  hideAnnouncer: { type: Boolean, default: false },
  compactAnnouncer: { type: Boolean, default: false }
})

const { internalLink } = useLinks()
const { hasRichText } = useUtils()

const menuShown = ref(false)
const breakpoints = useBreakpoints(breakpointsTailwind)

function toggleMenu () {
  menuShown.value = !menuShown.value
}

/* Menu animations */
const menuWrapper = ref(null)
const { $gsap } = useNuxtApp()
let timeline

function beforeEnter(el) {
  $gsap.set(el, { opacity: 0, height: 0 })
}

function onEnter(el, done) {
  $gsap.set('.menu .animate', { y: '105%' })
  timeline = $gsap.timeline()

  timeline.to(menuWrapper.value, {
    width: '15em',
    minHeight: '18em',
    duration: .5,
    ease: 'power4.out'
  }).to(el, {
    opacity: 1,
    minHeight: '14.5em',
    duration: .5,
    ease: 'power4.out',
  }, "-=.5s").to('.menu .animate', {
    y: 0,
    duration: .25,
    ease: 'power4.out',
    stagger: .1,
    delay: .25,
    onComplete: done
  }, "-=.75s")
}

function onLeave (el, done) {
  timeline = $gsap.timeline()
  timeline.to('.menu .animate', {
    y: '105%',
    duration: .25,
    stagger: {
      amount: .1,
      from: 'end'
    },
  }).to(el, {
    opacity: 0,
    duration: .4,
    minHeight: 0,
    ease: 'power4.in',
  }, "-=.5s").to(menuWrapper.value, {
    width: breakpoints.greater('md').value ? '9em' : '3em',
    minHeight: '1em',
    duration: .75,
    ease: 'power4.in',
    onComplete: done
  }, "-=.5s")
}

function onEnterCancelled() {
  timeline && timeline.kill()
}

function onLeaveCancelled() {
  timeline && timeline.kill()
}
</script>

<template>
  <div :class="['fixed top-0 right-0 p-site', { 'announcer-hidden': hideAnnouncer, 'compact-announcer': compactAnnouncer, 'menu-shown': menuShown }]">
    <div class="relative">
      <nav
        ref="menuWrapper"
        class="menu-wrapper flex flex-col bg-black text-white rounded-[2rem] relative text-md z-[1000]"
        @mouseenter="menuShown = true"
        @mouseleave="menuShown = false"
      >
        <button
          @click="toggleMenu"
          class="
            flex items-center justify-between gap-5 px-4 md:px-7 py-2 rounded-[2rem]
            w-full border-3 border-black cursor-pointer bg-black
          "
          aria-controls="menu"
          :aria-expanded="menuShown ? 'true' : 'false'"
        >
          <span class="hidden md:block">
            Menú
          </span>

          <div class="ms-auto flex items-center">
            <Icon v-if="!menuShown" name="ri:menu-fill" class="shrink-0" />
            <Icon v-else name="ri:close-large-fill" class="shrink-0" />
          </div>
        </button>
        <Transition
          @before-enter="beforeEnter"
          @enter="onEnter"
          @enter-cancelled="onEnterCancelled"
          @leave="onLeave"
          @leave-cancelled="onLeaveCancelled"
        >
          <div v-if="menuShown" id="menu" class="menu flex flex-col px-7 h-full">
            <ul aria-label="Menú">
              <li
                v-for="item in settings?.data.story.content.menu"
                :key="item._uid"
                class="overflow-clip block"
              >
                <NuxtLink
                  :to="internalLink(item.link)"
                  @click="toggleMenu"
                  class="block animate text-balance"
                >
                  {{ item.label }}
                </NuxtLink>
              </li>
            </ul>
            
            <SiteLanguage class="mt-auto" />
          </div>
        </Transition>
      </nav>
      <div v-if="hasRichText(settings?.data.story.content.announcement)" class="announcer absolute flex top-0 right-0 overflow-clip z-[900] rounded-full text-md">
        <div class="announcer-text bg-white rounded-full border-3 w-full overflow-clip">
          <Vue3Marquee clone :duration="10" class="px-7 py-2">
            <UtilsRichText :content="settings?.data.story.content.announcement" class="mx-10 flex items-center gap-8" />
          </Vue3Marquee>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.menu {
  min-height: 0;
  overflow: clip;

  li {
    line-height: 1.1;
    
    &:not(:last-child) {
      border-bottom: 3px var(--color-white) solid;
    }

    &:hover,
    &:has(+ li:hover) {
      border-color: var(--color-black);
    }
  }

  a {
    padding: .5em 0;
    transition: padding .5s ease;

    &:hover {
      background: var(--color-white);
      color: var(--color-black);
      padding-left: .5em;
      border-radius: 1rem;
    }
  }
}

.menu-wrapper {
  width: var(--initial-width, 9em);
  min-height: 1em;

  button {
    height: 2.5em;
  }
}

.announcer {
  width: calc(25rem + 20vi);
  padding-left: calc(1rem + 2vi);
  height: 2.5em;

  &-text {
    transition: transform .6s cubic-bezier(.47,1.64,.41,.8);

    &:deep(a) {
      text-decoration: underline;
      color: var(--color-purple);
    }
  }
}

.announcer-hidden {
  .announcer-text {
    transform: translateX(100%);
  }
}

@media (max-width: 40rem) {
  .announcer {
    width: 100vi;
    padding-left: calc(1rem + 2vi);
  }

  .menu-wrapper {
    --initial-width: 3em;
  }

  .compact-announcer .announcer {
    width: 70vi;
  }
}

@media (min-width: 40rem) {
  .menu-wrapper {
    min-width: 9em !important;
  }
}
</style>