<script setup>
defineProps({ blok: Object })

const { internalLink } = useLinks()
</script>

<template>
  <section v-editable="blok" class="p-site flex flex-col items-center justify-center min-h-svh mb-14">
    <div>
      <img src="../assets/images/jarra.png" alt="Jarra" class="w-auto h-[65svh]" />
    </div>
    <UtilsRichText :content="blok.text" class="text-base max-w-[70ch] text-balance text-center leading-[1.1]" />
    <ul class="flex flex-wrap gap-4 mt-8 justify-center">
      <li v-for="item in blok.buttons" :key="item._uid" class="text-sm text-subtext mt-4">
        <NuxtLink :to="internalLink(item.link)" class="bg-orange tracking-tight text-md font-bold text-white py-3 px-6 rounded-full hover:bg-blue focus-blue transition">
          {{ item.label }}
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>
