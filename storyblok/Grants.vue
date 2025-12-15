<script setup>
defineProps({ blok: Object })
</script>

<template>
  <div v-editable="blok">
    <h2 class="text-lg font-bold tracking-tight">
      {{ blok.title }}
    </h2>
    <div class="grid md:grid-cols-[1fr_1fr_1fr_1.5fr] gap-4 bg-red/25 p-4 my-4 leading-[1.1]">
      <div>
        <div class="text-xl font-bold">
          {{ blok.empreses }}
        </div>
        Empreses que han sol·licitat assessorament
      </div>
      <div>
        <div class="text-xl font-bold">
          {{ blok.tramitades }}
        </div>
        Sol·licituts tramitades
      </div>
      <div>
        <div class="text-xl font-bold">
          {{ blok.concedides }}
        </div>
        Sol·licituts concedides
      </div>
      <div>
        <div class="text-xl font-bold whitespace-nowrap">
          {{ blok.total }}
        </div>
        Import total
      </div>
    </div>
    <ul>
      <StoryblokComponent
        v-for="component in blok.grants"
        :key="component._uid"
        :blok="component"
      />
    </ul>
    
  </div>
</template>
