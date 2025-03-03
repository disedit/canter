<script setup>
import { Vue3Marquee } from 'vue3-marquee'

defineProps({
  hideAnnouncer: { type: Boolean, default: false }
})

const menuShown = ref(false)

function toggleMenu () {
  menuShown.value = !menuShown.value
}

/* Menu animations */
const { $gsap } = useNuxtApp()
let timeline

function beforeEnter(el) {
  $gsap.set(el, { opacity: 0, height: 0 })
}

function onEnter(el, done) {
  $gsap.set('.menu .animate', { y: '105%' })
  timeline = $gsap.timeline()

  timeline
  .to('.menu-toggle', {
    width: '15em',
    minHeight: '18em',
    duration: .5,
    ease: 'power4.out'
  }).to(el, {
    opacity: 1,
    height: 'auto',
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
    height: 0,
    ease: 'power4.in',
  }, "-=.5s").to('.menu-toggle', {
    width: '9em',
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
  <div :class="['fixed top-0 right-0 p-site', { 'announcer-hidden': hideAnnouncer, 'menu-shown': menuShown }]">
    <div class="relative">
      <div class="menu-toggle bg-black text-white rounded-[2rem] relative text-md z-[1000]">
        <button
          @click="toggleMenu"
          class="flex items-center justify-between gap-5 px-7 py-2 rounded-[2rem] w-full border-3 border-black cursor-pointer"
        >
          Menú

          <div class="flex items-center">
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
          <div v-if="menuShown" class="menu px-7">
            <ul>
              <li class="overflow-clip block">
                <NuxtLink to="/" class="block animate">Qué es Cànter?</NuxtLink>
              </li>
              <li class="overflow-clip block">
                <NuxtLink to="/" class="block animate">Música en directo</NuxtLink>
              </li>
              <li class="overflow-clip block">
                <NuxtLink to="/" class="block animate">Herramientas digitales</NuxtLink>
              </li>
              <li class="overflow-clip block">
                <NuxtLink to="/" class="block animate">Centro de gestión de ayudas</NuxtLink>
              </li>
            </ul>   
          </div>
        </Transition>
      </div>
      <div class="announcer absolute flex top-0 right-0 overflow-clip z-[900] rounded-full text-md">
        <div class="announcer-text bg-white rounded-full border-3 w-full overflow-clip">
          <Vue3Marquee clone :duration="10" class="px-7 py-2">
            <span class="mx-10 flex items-center gap-8">
              <span>146 inscripcions artístiques rebudes</span>
              <span>Gràcies</span>
            </span>
          </Vue3Marquee>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.menu {
  height: 0;
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

.menu-toggle {
  width: 9em;
  min-height: 1em;
}

.announcer {
  width: calc(25rem + 20vi);
  padding-left: calc(1rem + 2vi);

  &-text {
    transition: transform .6s cubic-bezier(.47,1.64,.41,.8);
  }
}

.announcer-hidden {
  .announcer-text {
    transform: translateX(100%);
  }
}
</style>