<script setup>
const settings = await useSettings()
</script>

<template>
  <footer class="footer bg-black text-white">
    <SiteContainer padded class="grid grid-cols-2 gap-site">
      <div>
        <img
          src="~assets/images/footer_logos.svg"
          alt="Fevim - Ministerio de Cultura - Valencan Music Office"
          class="h-[4rem]"
        />
      </div>
      <div class="text-right self-end">
        <UtilsRichText :content="settings?.data.story.content.footer_legal" format />
      </div>
    </SiteContainer>
  </footer>
</template>

<style lang="scss">
.footer {
  a:hover {
    color: var(--color-lime);
  }
}
</style>