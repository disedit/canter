<script setup>
defineProps({ blok: Object })
</script>

<template>
  <section
    v-editable="blok"
    class="page-wrapper bg-gray min-h-fill"
  >
    <div class="pt-nav-area p-site max-w-[1000px] mx-auto">
      <h1 class="text-4xl max-w-[40ch] text-balance leading-[.9] -tracking-[.1em] font-light text-blue">
        {{ blok.title }}
      </h1>

      <div class="page-wrapper-content flex flex-col gap-site mt-8">
        <StoryblokComponent
          v-for="component in blok.blocks"
          :key="component._uid"
          :blok="component"
        />
      </div>
    </div>
  </section>
</template>
