<script setup>
const settings = await useSettings()
</script>

<template>
  <footer class="footer bg-gray text-blue grid md:grid-cols-[1fr_auto] gap-14 p-site">
    <div class="flex flex-col md:flex-row gap-12">
      <div class="flex flex-col gap-2">
        <h4 class="font-bold text-base whitespace-nowrap">{{ $i18n.locale == 'ca' ? 'Suport principal' : 'Soporte principal' }}</h4>
        <div>
          <img
            src="~assets/images/ministerio_cultura.svg"
            alt="Ministerio de Cultura"
            class="h-10"
          />
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <h4 class="font-bold text-base">{{ $i18n.locale == 'ca' ? 'Col·laboradors' : 'Colaboradores' }}</h4>
        <div class="flex gap-6 flex-wrap">
          <img
            src="~assets/images/ivc.svg"
            alt="Institut Valencià de Cultura"
            class="h-10"
          />
          <img
            src="~assets/images/vmc.svg"
            alt="Valencan Music City"
            class="h-8"
          />
          <img
            src="~assets/images/vmo.svg"
            alt="Valencan Music Office"
            class="h-10"
          />
        </div>
      </div>
    </div>
    <div class="md:text-right md:self-end">
      <UtilsRichText :content="settings?.data.story.content.footer_legal" format />
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  a:hover {
    color: var(--color-orange);
  }
}
</style>