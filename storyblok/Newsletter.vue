<script setup>
defineProps({ blok: Object })
</script>

<template>
  <section
    v-editable="blok"
    class="bg-gray text-blue bg-cover p-site"
    :style="{ backgroundImage: `url(${blok.background.filename})`}"
  >
    <h2 class="text-xl max-w-[20ch] text-balance leading-[1.15] -tracking-[.1em] font-light">{{ blok.heading }}</h2>

    <form :action="blok.action_url" method="post" class="mt-16 mb-10">
      <div class="flex flex-col md:flex-row">
        <label for="r0c0m1i1" class="sr-only">Email</label>
        <input
          id="r0c0m1i1"
          name="email_1"
          type="email"
          placeholder="Email"
          required
          class="bg-white py-3 px-6 text-lg border-3 border-blue w-full max-w-[900px] rounded-l-2xl"
        />
        <input type="text" name="a1070279c" tabindex="-1" value="" style="position: absolute; left: -4900px;" aria-hidden="true" id="a1070279c" autocomplete="off"/>
        <input type="email" name="b1070279c" tabindex="-1" value="" style="position: absolute; left: -5000px;" aria-hidden="true" id="b1070279c" autocomplete="off"/>
        <input type="checkbox" name="c1070279c" tabindex="-1" style="position: absolute; left: -5100px;" aria-hidden="true" id="c1070279c" autocomplete="off"/>
        <input
          type="submit"
          :value="blok.button || 'Subscriure\'s'"
          class="bg-blue text-white text-lg border-3 rounded-r-2xl border-blue py-3 px-6 hover:text-orange cursor-pointer focus-black" />
      </div>
      <input type="hidden" name="ok_redirect" id="id_redirect" value="https://canter.fevim.org/newsletter">
      <label class="newsletter-privacy-policy mt-4 flex gap-4 text-base items-center">
        <input type="checkbox" name="d1070279c" required class="checkbox" />
        <UtilsRichText :content="blok.privacy_policy" format />
      </label>
    </form>
  </section>
</template>

<style lang="scss">
.newsletter-privacy-policy {
  input[type='checkbox'] {
    accent-color: var(--color-black);
    appearance:none;
    width: 1.5em;
    height: 1.5em;
    border: 3px var(--color-blue) solid;
    background: var(--color-white);
    border-radius: .5rem;

    &:checked {
      background: var(--color-blue);
    }
  }

  a:hover {
    font-weight: bold;
  }
}
</style>