<script setup>
defineProps({ blok: Object })
</script>

<template>
  <li v-editable="blok" class="border-b-3 border-black py-4 -tracking-widest">
    <div class="uppercase text-lg flex gap-4 items-baseline">
      <IconArrow class="h-[1em] relative top-[.1em]"/>
      <span>
        {{ blok.date }}
        {{ blok.location }}
      </span>
      <span class="text-md">
        {{ blok.venue }}
        {{ blok.time }}
      </span>
    </div>
    <h2 class="uppercase font-bold text-lg text-right">
      {{ blok.artists }}
    </h2>
  </li>
</template>
