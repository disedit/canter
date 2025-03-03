import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  ssr: process.env.NUXT_PUBLIC_NODE_ENV === 'production' ? true : false,
  runtimeConfig: {
    public: {
      baseUrl: 'https://canter.fevim.org',
      environment: 'preview'
    }
  },
  css: ['~/assets/css/main.css'],
  modules: [
    ['@storyblok/nuxt', { accessToken: process.env.STORYBLOK_TOKEN }],
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@nuxt/icon',
    '@vueuse/nuxt'
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'ca',
    locales: [
      {
        name: 'Valencià',
        code: 'ca',
        language: 'ca-ES'
      },
      {
        name: 'Castellano',
        code: 'es',
        language: 'es-ES'
      },
    ],
    baseUrl: 'https://canter.fevim.org'
  },
  image: process.env.NUXT_PUBLIC_NODE_ENV === 'production' ? {
    provider: 'netlify',
    domains: ['a.storyblok.com']
  } : {
    provider: 'storyblok',
    storyblok: {
      baseURL: 'https://a.storyblok.com'
    }
  },
})
