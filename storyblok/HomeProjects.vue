<script setup>
defineProps({ blok: Object })
</script>

<template>
  <section v-editable="blok" class="home-projects bg-gray">
    <div>
      <ul
        ref="slider"
        class="projects"
      >
        <div class="projects-items pe-site">
          <StoryblokComponent
            v-for="component in blok.projects"
            :key="component._uid"
            :blok="component"
          />
          <div class="w-site shrink-0" />
        </div>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.home-projects {
  background-image: url(../assets/images/purple.svg);
  background-size: cover;
  padding-top: calc(36rem + 5vh);
}

.projects {
  user-select: none;
  overflow: auto;
  padding: var(--spacing-site);

  &-items {
    display: flex;
    column-gap: var(--spacing-site);
  }

  &::-webkit-scrollbar {
    width: 1.5rem;
  }

  &::-webkit-scrollbar-track {
    background: var(--color-white);
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: var(--color-white);
    border-radius: 2rem;
    border: .25rem var(--color-white) solid;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: var(--color-white);
  }
}
</style>