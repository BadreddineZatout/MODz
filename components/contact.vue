<template>
  <div id="contact" class="my-20 px-5 lg:px-20">
    <h1 class="text-4xl font-bold text-[#1D6E5C] lg:text-5xl">
      {{ $t("Contact Us") }}
    </h1>
    <div class="mt-10 flex items-center justify-between lg:px-20">
      <div class="hidden w-2/3 overflow-hidden rounded-xl lg:block">
        <img class="rtl:hidden scale-125" src="/contact-us.png" alt="" />
        <img
          class="-translate-x-16 scale-125 ltr:hidden"
          src="/contact-us-rtl.png"
          alt=""
        />
      </div>
      <div class="w-full space-y-16 text-xl font-semibold lg:w-3/5">
        <UForm
          :schema="schema"
          :state="conatctForm"
          class="space-y-4 text-black"
          @submit="onSubmit"
        >
          <UFormGroup :label="$t('Name')" name="name">
            <UInput v-model="conatctForm.name" class="bg-white" />
          </UFormGroup>
          <UFormGroup :label="$t('Email')" name="email">
            <UInput v-model="conatctForm.email" />
          </UFormGroup>

          <UFormGroup :label="$t('phone')" name="phone">
            <UInput v-model="conatctForm.phone" />
          </UFormGroup>
          <UFormGroup :label="$t('message')" name="message">
            <UTextarea v-model="conatctForm.message" />
          </UFormGroup>

          <UButton class="bg-[#1D6E5C] hover:bg-primary-700" type="submit">
            {{ $t("submit") }}
          </UButton>
        </UForm>
      </div>
    </div>
  </div>
</template>
<script setup>
import { object, string } from "yup";
const { t } = useI18n();

const schema = object({
  name: string().required(t("Required")),
  email: string().email(t("Invalid email")),
  phone: string()
    .min(9, t("Must be at least 9 characters"))
    .max(10, t("Must be at most 10 characters"))
    .required(t("Required")),
  message: string().required(t("Required")),
});

const conatctForm = reactive({
  name: "",
  email: "",
  phone: "",
  message: "",
});

const toast = useToast();

async function onSubmit(event) {
  const data = await $fetch("https://api.mo-dz.com/contact", {
    method: "POST",
    body: {
      name: conatctForm.name,
      email: conatctForm.email,
      phone: conatctForm.phone,
      message: conatctForm.message,
    },
  });

  if (data) {
    toast.add({ title: t("Message Sent Successfully!") });
    conatctForm.name = "";
    conatctForm.email = "";
    conatctForm.phone = "";
    conatctForm.message = "";
  }
}
</script>
