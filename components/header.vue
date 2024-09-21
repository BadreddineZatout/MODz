<template>
  <div
    class="flex h-20 w-full items-center justify-start overflow-y-hidden bg-secondary-950 lg:px-10"
  >
    <NuxtLink to="/" class="mx-10 hidden w-fit lg:block">
      <img class="w-40" src="public/full-logo.png" alt="logo" />
    </NuxtLink>
    <div
      class="flex w-full flex-wrap items-center justify-between gap-4 px-2 py-5 text-2xl font-bold text-white lg:flex-nowrap lg:justify-start lg:gap-10 lg:px-0 lg:py-0"
    >
      <NuxtLink
        class="ltr:ml-20 rtl:mr-72 hidden hover:text-[#1D6E5C] lg:block"
        to="#about-us"
        >{{ $t("About Us") }}</NuxtLink
      >
      <NuxtLink class="hidden hover:text-[#1D6E5C] lg:block" to="#services">{{
        $t("Our Services")
      }}</NuxtLink>
      <NuxtLink class="hidden hover:text-[#1D6E5C] lg:block" to="#download">{{
        $t("Download Our App")
      }}</NuxtLink>
      <NuxtLink
        class="ltr:mr-20 rtl:ml-72 hidden hover:text-[#1D6E5C] lg:block"
        to="#contact"
        >{{ $t("Contact Us") }}</NuxtLink
      >
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
      <div>
        <button
          v-if="locale == 'ar'"
          class="flex items-center gap-x-2 rounded-xl px-5 py-2 text-white hover:text-[#1D6E5C]"
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
          class="flex items-center gap-x-2 rounded-xl px-5 py-2 text-white hover:text-[#1D6E5C]"
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
    </div>
  </div>
</template>

<script setup>
const { locale, setLocale, t } = useI18n();
const nav_items = [
  [
    {
      label: t("About Us"),
      path: "#about-us",
    },
    {
      label: t("Our Services"),
      path: "#services",
    },
    {
      label: t("Download Our App"),
      path: "#download",
    },
    {
      label: t("Contact Us"),
      path: "#contact",
    },
  ],
];
</script>
