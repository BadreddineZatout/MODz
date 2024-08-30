<template>
  <div
    id="download"
    class="relative my-20 overflow-hidden bg-gray-100 px-5 py-20 lg:h-[800px] lg:px-32"
    style="background-image: url(&quot;/Sprinkle.svg&quot;)"
  >
    <h1
      class="w-full text-center text-4xl font-bold text-[#1D6E5C] lg:w-1/2 lg:text-7xl"
      style="text-shadow: 2px 3px #d9dbda"
    >
      {{ $t("Download our app") }}
    </h1>
    <div
      class="mt-10 w-full bg-gray-100 text-2xl lg:w-2/3 lg:text-4xl dark:bg-[#1c1b22]"
    >
      {{ $t("Experience the convenience of Modz") }}
    </div>
    <NuxtLink
      class="absolute bottom-2 left-5 z-20 rounded-3xl bg-gradient-to-r from-[#1D6E5C] to-[#43debc] px-3 py-2 text-2xl text-white lg:bottom-20 lg:left-40 lg:px-8 lg:py-5 lg:text-4xl"
      to="#"
    >
      {{ $t("get the app") }}
    </NuxtLink>
    <img
      class="absolute -bottom-20 right-16 z-0 hidden h-[800px] lg:block"
      src="/8327ae46626dd9bfd64305c5ebcabec5.png"
      alt=""
    />
  </div>
</template>
