<template>
  <div class="sm:flex items-start h-fit relative overflow-hidden">
    <div
      class="w-full sm:w-1/2 flex items-end bg-secondary-950 font-bold text-3xl sm:text-6xl sm:h-[572px] text-white"
    >
      <div
        class="sm:absolute top-20 ltr:left-20 rtl:right-20 w-fit space-y-5 sm:space-y-10 pb-5 sm:pb-0"
      >
        <h1 class="indent-2 text-[#1D6E5C] sm:rtl:indent-24">
          {{ $t("Empowering") }}
        </h1>
        <h1 class="indent-5 sm:indent-44">
          {{ $t("Your Construction Projects") }}
        </h1>
        <h1 class="indent-20 sm:indent-60 sm:rtl:indent-96">
          {{ $t("With Trusted Professionals") }}
        </h1>
      </div>
      <div
        class="hidden sm:block w-[500px] h-[500px] border-4 border-[#1D6E5C] rounded-full absolute -bottom-80 ltr:-left-40 rtl:-right-40"
      ></div>
      <div
        class="hidden sm:flex text-xl text-white font-semibold items-center gap-5 ltr:pl-5 rtl:pr-5 pb-5 animate-bounce"
      >
        <svg
          class="w-10 text-[#1D6E5C]"
          data-slot="icon"
          aria-hidden="true"
          fill="none"
          stroke-width="3.0"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
        <NuxtLink class="hover:text-primary-600" to="#">{{
          $t("Get The App")
        }}</NuxtLink>
      </div>
    </div>
    <div class="w-full sm:w-1/2">
      <img src="/hero-section.jpg" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>
