<template>
  <div class="relative h-[210px] w-full overflow-hidden lg:h-[700px]">
    <img class="lg:-translate-y-40" src="/public/hero-section.jpg" />
    <div class="absolute right-0 top-20 w-screen lg:top-60">
      <div
        class="flex w-full items-center justify-between pl-3 pr-16 lg:justify-between lg:px-36"
      >
        <div class="font-bold text-black lg:space-y-5 lg:text-8xl">
          <h1 style="text-shadow: 3px 3px #6e6e6e">{{ $t("Transform") }}</h1>
          <h1 class="lg:text-7xl" style="text-shadow: 3px 3px #6e6e6e">
            <span class="text-[#1D6E5C]">{{ $t("your visions") }}</span>
            {{ $t("in") }}
          </h1>
          <NuxtLink
            class="rounded-3xl bg-[#1D6E5C] px-3 py-2 text-xs text-white lg:px-8 lg:py-5 lg:text-4xl"
            to="#"
          >
            {{ $t("Download") }} !
          </NuxtLink>
        </div>
        <div class="flex flex-col items-center lg:gap-y-5">
          <img
            class="w-10 lg:w-[230px] lg:-translate-y-20"
            src="/public/logo.png"
            alt=""
          />
          <div class="font-bold text-white lg:-translate-y-20 lg:text-9xl">
            {{ $t("Reality") }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
