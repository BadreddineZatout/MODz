<template>
  <div
    id="download"
    class="relative my-20 overflow-hidden bg-gray-100 px-5 py-10 pb-20 lg:h-[800px] lg:px-20 2xl:px-32 rtl:text-right"
    style="background-image: url(&quot;/Sprinkle.svg&quot;)"
  >
    <h1
      class="w-full text-center text-4xl font-bold text-[#1D6E5C] lg:w-1/2 lg:text-5xl 2xl:text-7xl"
      style="
        text-shadow:
          1px 1px 0 #e1e6e4,
          3px 3px 0 #e1e6e4,
          4px 4px 0 #e1e6e4;
      "
    >
      {{ $t("Download our app") }}
    </h1>
    <div
      class="mt-10 w-full bg-gray-100 text-2xl lg:w-2/3 lg:text-3xl 2xl:text-4xl"
    >
      {{ $t("Experience the convenience of Modz") }}
    </div>
    <NuxtLink
      class="absolute bottom-2 left-[16%] z-20 w-fit rounded-3xl bg-gradient-to-r from-[#1D6E5C] to-[#43debc] px-3 py-2 text-2xl text-white md:left-[30%] md:text-3xl lg:bottom-20 lg:left-20 lg:px-8 lg:py-5 lg:text-4xl 2xl:left-40 rtl:right-[22%] rtl:md:right-[30%] rtl:lg:right-40"
      to="#"
    >
      {{ $t("get the app") }}
    </NuxtLink>
    <img
      class="absolute -bottom-20 right-0 xl:right-16 z-0 hidden h-[800px] lg:block rtl:hidden"
      src="/8327ae46626dd9bfd64305c5ebcabec5.png"
      alt=""
    />
    <img
      class="absolute -bottom-20 left-0 xl:left-16 z-0 hidden h-[800px] lg:block ltr:hidden"
      src="/download-app-rtl.png"
      alt=""
    />
  </div>
</template>
