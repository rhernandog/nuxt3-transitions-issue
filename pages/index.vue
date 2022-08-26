<script setup>
import pageTransitionConfig from "@/static/pageTransitions";

useHead({
  title: "Home"
});

definePageMeta({
  pageTransition: pageTransitionConfig,
});
</script>

<template>
  <main class="flex-grow bg-blue-200 opacity-0">
    <div class="container mx-auto px-4 py-8">
      HOME PAGE
    </div>
  </main>
</template>
