<template>
  <div class="flex w-full items-center justify-start bg-secondary-950 sm:px-10">
    <NuxtLink to="/" class="w-fit">
      <img class="w-14 ltr:mr-10 rtl:ml-10" src="/logo.png" alt="logo" />
    </NuxtLink>
    <div
      class="flex w-full items-center justify-start gap-10 font-semibold text-white"
    >
      <NuxtLink
        class="hidden hover:text-primary-600 sm:block"
        to="#philosophy"
        >{{ $t("Our Philosophy") }}</NuxtLink
      >
      <NuxtLink class="hidden hover:text-primary-600 sm:block" to="#about-us">{{
        $t("About Us")
      }}</NuxtLink>
      <NuxtLink class="hidden hover:text-primary-600 sm:block" to="#services">{{
        $t("Services")
      }}</NuxtLink>
      <NuxtLink class="hidden hover:text-primary-600 sm:block" to="#contact">{{
        $t("Contact")
      }}</NuxtLink>
      <NuxtLink class="hidden hover:text-primary-600 sm:block" to="#contact">{{
        $t("Mobile App")
      }}</NuxtLink>
      <div>
        <button
          v-if="locale == 'ar'"
          class="flex items-center gap-x-2 py-2 px-5 rounded-xl hover:text-primary-700 text-white"
          @click="setLocale('fr')"
        >
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
              d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          FR
        </button>
        <button
          v-else
          class="flex items-center gap-x-2 py-2 px-5 rounded-xl hover:text-primary-700 text-white"
          @click="setLocale('ar')"
        >
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
              d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          عربي
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const nav_items = [
  [
    {
      label: "services",
      path: "/services",
    },
    {
      label: "vehicles",
      path: "/vehicles",
    },
    {
      label: "contact",
      slot: "contact",
      path: "#contact",
    },
    {
      label: "login",
      slot: "login",
      path: "/login",
    },
  ],
];

const { locale, setLocale } = useI18n();
</script>
