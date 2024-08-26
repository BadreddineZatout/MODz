<template>
  <div class="flex w-full items-center justify-start bg-secondary-950 lg:px-10">
    <NuxtLink to="/" class="hidden lg:block w-fit">
      <img class="w-20 ltr:mr-10 rtl:ml-10" src="public/b02fd6101114e70f10a84af317d821ca.png" alt="logo" />
    </NuxtLink>
    <div
      class="flex flex-wrap lg:flex-nowrap py-5 px-2 lg:py-0 lg:px-0 w-full items-center justify-between lg:justify-start gap-4 lg:gap-10 font-semibold text-white"
    >
      <NuxtLink class="hidden lg:block hover:text-primary-600 underline" to="#à propos">{{
        $t("About Us")
      }}</NuxtLink>
      <NuxtLink class="hidden lg:block hover:text-primary-600 underline" to="#Nos services">{{
        $t("Our Services")
      }}</NuxtLink>
      <NuxtLink class="hidden lg:block hover:text-primary-600 underline" to="#télecharger">{{
        $t("Download Our App") 
      }}</NuxtLink>
      <NuxtLink class="hidden lg:block hover:text-primary-600 underline" to="#contact">{{
        $t("Contact")
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
          arabe
        </button>
      </div>
      <UDropdown
        class="ml-5 lg:hidden"
        :items="nav_items"
        mode="click"
        :popper="{ placement: 'bottom-start' }"
      >
        <UButton
          class="bg-secondary-950"
          trailing-icon="i-heroicons-bars-4-20-solid"
        />
      </UDropdown>
    </div>
  </div>
</template>

<script setup>
const { locale, setLocale, t } = useI18n();
const nav_items = [
  [
    {
      label: t("Our Philosophy"),
      path: "#philosophy",
    },
    {
      label: t("About Us"),
      path: "#about-us",
    },
    {
      label: t("Services"),
      path: "#services",
    },
    {
      label: t("Contact"),
      path: "#contact",
    },
  ],
];
</script>
