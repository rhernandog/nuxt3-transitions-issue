<template>
  <header class="w-full h-[70px] bg-teal-700 text-white px-4 flex justify-between items-end">
    <!-- Brand -->
    <div class="pb-1 text-3xl font-semibold">EggPlant.</div>
    <!-- Navigation -->
    <nav>
      <ul class="flex gap-4">
        <li v-for="item in menuItems" :key="item.name">
          <NuxtLink
            :to="item.route"
            class="block px-4 pt-2 pb-1 border-b-2 border-transparent hover:border-teal-600 hover:bg-teal-800"
          >
            {{ item.title }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
const menuItems = [
  {
    route: "/",
    name: "home",
    title: "Home",
  },
  {
    route: "/about",
    name: "about",
    title: "About",
  },
  {
    route: "/users",
    name: "users",
    title: "Users",
  },
  {
    route: "/contact",
    name: "contact",
    title: "Contact",
  },
];
</script>
