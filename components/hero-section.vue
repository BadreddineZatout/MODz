<template>
  <div class="w-full h-[700px] relative overflow-hidden">
    <img class="-translate-y-40" src="/public/hero-section.jpg" />
    <div class="absolute top-60 right-0 w-screen">
      <div class="w-full flex justify-between items-center px-36 z-50">
        <div class="text-8xl font-bold text-black space-y-5">
          <h1 style="text-shadow: 3px 3px #6e6e6e">{{$t('Transform')}}</h1>
          <h1 class="text-7xl" style="text-shadow: 3px 3px #6e6e6e">
            <span class="text-[#1D6E5C]">{{$t('your visions')}}</span> {{$t('in')}}
          </h1>
          <NuxtLink
            class="text-white bg-[#1D6E5C] text-4xl px-8 py-5 rounded-3xl"
            to="#"
          >
            {{ $t("Download") }} !
          </NuxtLink>
        </div>
        <div class="flex flex-col items-center gap-y-5">
          <img class="w-[230px] -translate-y-20" src="/public/logo.png" alt="">
          <div class="-translate-y-20 text-white text-9xl font-bold">{{ $t('Reality') }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
