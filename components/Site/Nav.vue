<script setup>
const localePath = useLocalePath()
const { y } = useWindowScroll()
const scrolled = computed(() => y.value > 100)
const route = useRoute()
const compact = computed(() => !!route.params?.slug && !route.params?.slug[0]?.includes('home'))
</script>

<template>
  <div :class="['nav flex fixed top-0 left-0 right-0 p-site', { scrolled, compact }]">
    <div>
      <NuxtLink to="/">
        <SiteLogo class="nav-logo" />
      </NuxtLink>
      <div class="nav-text max-w-[35ch] leading-[1] tracking-[-0.05em] text-balance mt-site transition">
        Plan de Actuación para la Reactivación del Sector Musical en la Comunitat Valenciana tras la DANA
      </div>
    </div>
  </div>
  <SiteMenu :hide-announcer="scrolled" />
</template>

<style lang="scss" scoped>
.nav {
  &-logo {
    height: calc(10rem + 15vb);
    transition: height 0.3s ease;
  }

  &-text {
    font-size: clamp(1.5rem, 0.55vi + 1.8rem, 3.5rem);
    transition: opacity 0.2s ease;
  }

  &.compact,
  &.scrolled {
    .nav-logo {
      height: 5rem;
    }

    .nav-text {
      opacity: 0;
    }
  }
}
</style>