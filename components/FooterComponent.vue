<template>
  <footer class="w-full px-4 pb-1 pt-2 bg-slate-600 text-white text-sm">
    Copyright &copy; {{ year }}, EggPlant. All rights reserved
  </footer>
</template>

<script setup>
  const year = new Date().getFullYear();
</script>

<style lang="postcss" scoped>

</style>