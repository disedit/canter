<script setup>
const settings = await useSettings()
const localePath = useLocalePath()
const { y } = useWindowScroll()
const scrolled = computed(() => y.value > 100)
const route = useRoute()
const compact = computed(() => !!route.params?.slug && !route.params?.slug[0]?.includes('home'))
</script>

<template>
  <header :class="['nav flex fixed top-0 left-0 right-0 p-site', { scrolled, compact }]">
    <div>
      <NuxtLink :to="localePath('/')">
        <SiteLogo class="nav-logo" />
      </NuxtLink>
      <div class="nav-text max-w-[25ch] font-light leading-[1] -tracking-[.1em] text-balance mt-site transition">
        {{ settings?.data.story.content.subtitle }}
      </div>
    </div>
  </header>
  <SiteMenu :hide-announcer="scrolled" :compact-announcer="compact" :settings="settings" />
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
      margin-left: 10rem;
    }
  }
}

@media (max-width: 40rem) {
  .nav {
    &-logo {
      width: 100%;
      height: auto;
      margin-top: 5rem;
      transition: width 0.3s ease, margin 0.3s ease;
    }

    &.compact,
    &.scrolled {
      .nav-logo {
        width: 5rem;
        height: auto;
        margin-top: 0;
      }

      .nav-text {
        opacity: 0;
      }
    }
  }
}
</style>