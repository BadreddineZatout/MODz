<template>
  <div :dir="locale == 'ar' ? 'rtl' : 'ltr'">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <UNotifications />
  </div>
</template>
<script setup lang="ts">
const { locale } = useI18n();
useSeoMeta({
  title: "Modz",
  description:
    "Modz is your go-to solution for seamless construction services. Our mission is to empower clients by providing easy access to skilled professionals, ensuring every project is handled with expertise and efficiency.",
});
</script>
