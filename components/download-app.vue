<template>
  <div
    id="download"
    class="relative my-20 overflow-hidden rtl:text-right bg-gray-100 px-5 py-20 lg:h-[800px] lg:px-32"
    style="background-image: url(&quot;/Sprinkle.svg&quot;)"
  >
    <h1
      class="w-full text-center text-4xl font-bold text-[#1D6E5C] lg:w-1/2 lg:text-7xl"
    >
      {{ $t("Download our app") }}
    </h1>
    <div
      class="mt-10 w-full bg-gray-100 text-2xl lg:w-2/3 lg:text-4xl"
    >
      {{ $t("Experience the convenience of Modz") }}
    </div>
    <NuxtLink
      class="absolute bottom-2 w-fit lg:bottom-20 left-[22%] md:left-[30%] lg:left-40 rtl:right-[22%] rtl:md:right-[30%] rtl:lg:right-40 z-20 rounded-3xl bg-gradient-to-r from-[#1D6E5C] to-[#43debc] px-3 py-2 text-2xl text-white lg:px-8 lg:py-5 md:text-3xl lg:text-4xl"
      to="#"
    >
      {{ $t("get the app") }}
    </NuxtLink>
    <img
      class="rtl:hidden absolute -bottom-20 right-16 z-0 hidden h-[800px] lg:block"
      src="/8327ae46626dd9bfd64305c5ebcabec5.png"
      alt=""
    />
    <img
      class="ltr:hidden absolute -bottom-20 left-16 z-0 hidden h-[800px] lg:block"
      src="/download-app-rtl.png"
      alt=""
    />
  </div>
</template>
