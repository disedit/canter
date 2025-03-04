<script setup>
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
})

useHead({
  htmlAttrs: { lang: head.value.htmlAttrs.lang, dir: head.value.htmlAttrs.dir, class: 'bg-white' },
  meta: [
    { name: 'theme-color', content: '#e4e6e5' },
    { name: 'msapplication-TileColor', content: '#e4e6e5' },
    { name: 'apple-mobile-web-app-title', content: 'Cànter' },
    ...head.value.meta
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicons/favicon-96x96.png', sizes: '96x96' },
    { rel: 'icon', type: 'image/svg+xml', href: '/favicons/favicon.svg' },
    { rel: 'shortcut icon', href: '/favicons/favicon.ico' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png' },
    { rel: 'manifest', href: '/favicons/site.webmanifest' },
    ...head.value.link
  ],
  script: [
    { src: 'https://cloud.umami.is/script.js', 'data-website-id': '835cacb8-b52a-4d9d-935d-8142928d0714', defer: true }
  ]
})
</script>

<template>
  <div class="font-sans">
    <NuxtLoadingIndicator color="#000" />
    <SiteNav />
    <main class="flex flex-col gap-site min-h-fill">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>
