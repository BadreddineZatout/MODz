<template>
  <div class="flex items-start h-fit relative overflow-hidden">
    <div
      class="w-1/2 flex items-end bg-secondary-950 font-bold text-6xl h-[572px] text-secondary-500"
    >
      <div class="absolute top-20 left-20 w-fit space-y-10">
        <h1 class="text-primary-500">Empowering</h1>
        <h1 class="indent-24">Your Construction Projects</h1>
        <h1 class="indent-60">with Trusted Professionals</h1>
      </div>
      <div
        class="w-[500px] h-[500px] border-4 border-primary-400 rounded-full absolute -bottom-80 -left-40"
      ></div>
      <div
        class="text-xl text-white font-semibold flex items-center gap-5 pl-10 pb-5 animate-bounce"
      >
        <svg
          class="w-10 text-primary-500"
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
        <NuxtLink class="hover:text-primary-600" to="#">Get The App</NuxtLink>
      </div>
    </div>
    <div class="w-1/2">
      <img src="/hero-section.jpg" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>
