<template>
  <div class="relative w-full overflow-hidden lg:h-[700px]">
    <img class="w-full object-cover" src="/public/hero-section.png" />

    <NuxtLink
      class="absolute bottom-5 left-5 md:bottom-20 md:left-20 lg:bottom-20 lg:left-40 rounded-3xl bg-[#1D6E5C] px-3 py-2 text-xs text-white lg:px-8 lg:py-5 md:text-xl lg:text-4xl"
      to="#"
    >
      {{ $t("Download") }} !
    </NuxtLink>
  </div>
</template>

<script setup lang="ts"></script>
