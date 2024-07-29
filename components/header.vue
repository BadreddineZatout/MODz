<template>
  <div class="flex w-full items-center justify-start bg-secondary-950 sm:px-10">
    <NuxtLink to="/" class="w-fit">
      <img class="w-14 mr-10" src="/logo.png" alt="logo" />
    </NuxtLink>
    <div
      class="flex w-full items-center justify-start gap-10 font-semibold text-white"
    >
      <NuxtLink class="hidden hover:text-primary-600 sm:block" to="#philosophy"
        >Our Philosophy</NuxtLink
      >
      <NuxtLink class="hidden hover:text-primary-600 sm:block" to="#about-us"
        >About Us</NuxtLink
      >
      <NuxtLink class="hidden hover:text-primary-600 sm:block" to="#services"
        >Services</NuxtLink
      >
      <NuxtLink class="hidden hover:text-primary-600 sm:block" to="#contact"
        >Contact</NuxtLink
      >
      <NuxtLink class="hidden hover:text-primary-600 sm:block" to="#contact"
        >Mobile App</NuxtLink
      >
    </div>
  </div>
</template>

<script setup>
const nav_items = [
  [
    {
      label: "services",
      path: "/services",
    },
    {
      label: "vehicles",
      path: "/vehicles",
    },
    {
      label: "contact",
      slot: "contact",
      path: "#contact",
    },
    {
      label: "login",
      slot: "login",
      path: "/login",
    },
  ],
];
</script>
