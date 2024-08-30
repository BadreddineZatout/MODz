<template>
  <div
    id="contact"
    class="bg-secondary-950 px-5 pb-2 text-white lg:px-14 lg:pt-5"
  >
    <div class="flex flex-col justify-around sm:flex-row">
      <div class="w-full lg:w-1/5">
        <NuxtLink to="/">
          <img
            class="w-40 lg:w-40"
            src="/public/b02fd6101114e70f10a84af317d821ca.png"
            alt="logo"
          />
        </NuxtLink>
      </div>

      <div class="w-full flex-col lg:mt-10 lg:w-2/6">
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
        class="mt-10 hidden w-full flex-col items-start justify-start gap-3 font-semibold text-white lg:flex lg:w-1/3"
      >
        <h1 class="text-3xl font-bold">{{ $t("Menu") }}</h1>
        <NuxtLink
          class="hidden hover:text-primary-600 lg:block"
          to="#à propos"
          >{{ $t("About Us") }}</NuxtLink
        >

        <NuxtLink class="hover:text-primary-600" to="#nosservices">{{
          $t("Our Services")
        }}</NuxtLink>
        <NuxtLink class="hover:text-primary-600" to="#télécharger">{{
          $t("Download Our App")
        }}</NuxtLink>
        <NuxtLink class="hover:text-primary-600" to="#contact">{{
          $t("Contact Us")
        }}</NuxtLink>
      </div>
      <div class="mt-10 flex w-full items-start justify-start gap-x-5 lg:w-1/3">
        <NuxtLink class="hover:text-primary-600" to="#"
          ><img class="w-10" src="/public/facebook.svg" alt="logo"
        /></NuxtLink>
        <NuxtLink class="hover:text-primary-600" to="#"
          ><img class="w-10" src="/public/instagram.svg" alt="logo"
        /></NuxtLink>
        <NuxtLink class="hover:text-primary-600" to="#"
          ><img class="w-10" src="/public/linkedin.svg" alt="logo"
        /></NuxtLink>
      </div>
    </div>
    <div class="mt-12 text-center text-secondary-400">
      © 2024 Modz. All rights reserved.
    </div>
  </div>
</template>
