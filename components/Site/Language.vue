<script lang="ts" setup>
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const abbrs = {
  ca: 'VAL',
  es: 'CAS',
}
</script>

<template>
  <ul aria-label="Idioma" class="flex languages">
    <li v-for="lang in locales" :key="lang.code">
      <NuxtLink
        :to="switchLocalePath(lang.code)"
        :class="{ 'active': locale === lang.code }"
      >
        {{ abbrs[lang.code] }}
      </NuxtLink>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.languages {
  li:not(:last-child) {
    &::after {
      content: '/';
      margin-inline: .5em;
    }
  }

  a {
    &.active {
      font-weight: bold;
    }

    &:hover {
      color: var(--color-lime);
    }
  }
}
</style>