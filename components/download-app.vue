<template>
  <div
    id="download"
    class="my-20 px-32 py-20 bg-gray-100 relative overflow-hidden h-[800px]"
    style="background-image: url('/Sprinkle.svg')"
  >
    <h1
      class="text-2xl lg:text-7xl font-bold text-[#1D6E5C] w-1/2 text-center"
      style="text-shadow: 2px 3px #d9dbda"
    >
      {{ $t("Download our app") }}
    </h1>
    <div class="mt-10 w-2/3 bg-gray-100 dark:bg-[#1c1b22] text-4xl">
      {{ $t("Experience the convenience of Modz") }}
    </div>
    <NuxtLink
      class="text-white bg-gradient-to-r from-[#1D6E5C] to-[#43debc] text-4xl px-8 py-5 rounded-3xl absolute bottom-20 left-40 z-20"
      to="#"
    >
      {{ $t("get the app") }}
    </NuxtLink>
    <img
      class="h-[800px] z-0 absolute -bottom-20 right-16"
      src="/8327ae46626dd9bfd64305c5ebcabec5.png"
      alt=""
    />
  </div>
</template>
