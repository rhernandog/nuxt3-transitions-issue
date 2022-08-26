<script setup>
import pageTransitionConfig from "@/static/pageTransitions";

useHead({
  title: "About Us"
});


definePageMeta({
  pageTransition: pageTransitionConfig,
});

</script>

<template>
  <main class="flex-grow bg-purple-200 opacity-0">
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl text-center mb-12">ABOUT US</h1>
    </div>
  </main>
</template>
