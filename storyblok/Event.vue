<script setup>
defineProps({ blok: Object })
</script>

<template>
  <li v-editable="blok" class="border-b-3 border-black py-4 -tracking-widest flex flex-col gap-4">
    <div class="uppercase text-lg flex gap-4 items-baseline leading-[1]">
      <IconArrow class="h-[1em] relative top-[.1em]"/>
      <span>
        {{ blok.date }}
        {{ blok.location }}
      </span>
      <span class="text-md text-right md:text-left ms-auto md:ms-0">
        {{ blok.venue }}
        {{ blok.time }}
      </span>
    </div>
    <h2 class="uppercase font-bold text-lg md:text-right leading-[1]">
      {{ blok.artists }}
    </h2>
  </li>
</template>
