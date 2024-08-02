<template>
  <div id="contact" class="bg-secondary-950 px-14 pb-2 pt-5 text-white">
    <div class="flex flex-col justify-around sm:flex-row">
      <div class="w-1/5">
        <NuxtLink to="/">
          <img src="/logo.png" alt="logo" />
        </NuxtLink>
      </div>
      <div class="w-full flex-col sm:w-2/6 mt-10">
        <h1 class="text-3xl font-bold">MODz</h1>
        <div class="mb-2 mt-6 flex items-center">
          <svg
            class="w-5"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 16 16"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="m3.855 7.286l1.067-.534a1 1 0 0 0 .542-1.046l-.44-2.858A1 1 0 0 0 4.036 2H3a1 1 0 0 0-1 1v2c0 .709.082 1.4.238 2.062a9.01 9.01 0 0 0 6.7 6.7A9 9 0 0 0 11 14h2a1 1 0 0 0 1-1v-1.036a1 1 0 0 0-.848-.988l-2.858-.44a1 1 0 0 0-1.046.542l-.534 1.067a7.52 7.52 0 0 1-4.86-4.859"
              clip-rule="evenodd"
            />
          </svg>
          <a href="tel:++213 557 45 76 02" class="ml-2 font-semibold"
            >+213 557 45 76 023</a
          >
        </div>
        <div class="mb-2 flex items-center">
          <svg
            class="w-5"
            data-slot="icon"
            aria-hidden="true"
            fill="none"
            stroke-width="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          <p class="ml-2 font-semibold">contact@mo-dz.com</p>
        </div>
      </div>
      <div
        class="flex flex-col w-full items-start justify-start gap-3 font-semibold text-white sm:w-1/2 mt-10"
      >
        <h1 class="text-3xl font-bold">Menu</h1>
        <NuxtLink
          class="hidden hover:text-primary-600 sm:block"
          to="#philosophy"
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
      <div class="mt-10">
        <h1 class="text-3xl font-bold">Download Our App</h1>
        <p class="mt-5 w-2/3">
          Experience the convenience of Modz today. Download our app and connect
          with trusted construction professionals in just a few taps.
        </p>
        <div
          class="text-white text-xl font-bold flex items-center gap-1 mt-5 hover:text-primary-600"
        >
          <NuxtLink class="" to="#">Get The App</NuxtLink>
          <svg
            class="w-5"
            data-slot="icon"
            aria-hidden="true"
            fill="none"
            stroke-width="3.0"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
      </div>
    </div>
    <div class="text-center text-secondary-400 mt-12">
      © 2024 Modz. All rights reserved.
    </div>
  </div>
</template>
