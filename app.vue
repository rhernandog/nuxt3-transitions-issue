<script setup>
  useHead({
    titleTemplate: (titleChunk) => {
      return titleChunk ? `Nuxt3 Test - ${titleChunk}` : 'Nuxt3 Test';
    }
  })
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <HeaderComponent />
    <NuxtPage />
    <FooterComponent />
  </div>
</template>
