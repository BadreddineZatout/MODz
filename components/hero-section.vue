<template>
  <div class="relative w-full overflow-hidden md:h-[500px] xl:h-[700px]">
    <img class="w-full object-cover" src="/public/hero-section.png" />
    <NuxtLink
      class="absolute bottom-5 left-5 rounded-3xl bg-[#1D6E5C] px-3 py-2 text-xs text-white md:px-8 md:py-5 md:bottom-20 md:left-20 md:text-xl lg:bottom-7 lg:left-20 lg:px-8 lg:py-5 lg:text-2xl xl:bottom-20 xl:left-40 2xl:bottom-20 2xl:left-40 2xl:text-4xl"
      to="#"
    >
      {{ $t("Download") }} !
    </NuxtLink>
  </div>
</template>

<script setup lang="ts"></script>
