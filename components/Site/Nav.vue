<script setup>
const settings = await useSettings()
const localePath = useLocalePath()
const { y } = useWindowScroll()
const scrolled = computed(() => y.value > 100)
const route = useRoute()
const compact = computed(() => !!route.params?.slug && !route.params?.slug[0]?.includes('home') && !route.params?.slug[1]?.includes('home'))
</script>

<template>
  <header :class="['nav flex fixed top-0 left-0 right-0 p-site', { scrolled, compact }]">
    <div>
      <NuxtLink :to="localePath('/')" class="text-blue">
        <SiteLogo class="nav-logo" />
      </NuxtLink>
      <div v-if="!compact" class="nav-text">
        <div class="max-w-[25ch] font-light leading-[1] -tracking-[.05em] text-balance mt-site transition">
          {{ settings?.data.story.content.subtitle }}
        </div>
        <UtilsRichText :content="settings?.data.story.content.subtitle_2" class="text-[.5em] text-subtext font-light leading-[1] -tracking-[.05em] text-balance mt-2 transition" />
      </div>
    </div>
  </header>
  <SiteMenu :hide-announcer="scrolled" :compact-announcer="compact" :settings="settings" />
</template>

<style lang="scss">
.nav {
  z-index: 1000;

  &-logo {
    height: calc(10rem + 15vb);
    transition: height 0.3s ease;
  }

  &-text {
    font-size: clamp(1.5rem, 0.55vi + 1.8rem, 3.5rem);
    transition: opacity 0.2s ease;

    strong {
      font-weight: bold;
    }
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