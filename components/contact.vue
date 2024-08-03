<template>
  <div id="contact" class="my-20 px-20">
    <h1 class="text-5xl font-bold text-[#1D6E5C]">Contact Us</h1>
    <div class="flex justify-between items-center mt-10 px-20">
      <div class="w-2/3 rounded-xl overflow-hidden">
        <img src="/contact-us.png" alt="" />
      </div>
      <div class="w-3/5 space-y-16 text-xl font-semibold">
        <UForm
          :schema="schema"
          :state="conatctForm"
          class="space-y-4"
          @submit="onSubmit"
        >
          <UFormGroup label="Name" name="name">
            <UInput v-model="conatctForm.name" />
          </UFormGroup>
          <UFormGroup label="Email" name="email">
            <UInput v-model="conatctForm.email" />
          </UFormGroup>

          <UFormGroup label="phone" name="phone">
            <UInput v-model="conatctForm.phone" />
          </UFormGroup>
          <UFormGroup label="message" name="message">
            <UTextarea
              v-model="conatctForm.message"
              placeholder="Enter your message..."
            />
          </UFormGroup>

          <UButton class="bg-[#1D6E5C] hover:bg-primary-700" type="submit">
            Submit
          </UButton>
        </UForm>
      </div>
    </div>
  </div>
</template>
<script setup>
import { object, string } from "yup";

const schema = object({
  name: string().required("Required"),
  email: string().email("Invalid email"),
  phone: string()
    .min(9, "Must be at least 9 characters")
    .max(10, "Must be at most 10 characters")
    .required("Required"),
  message: string().required("Required"),
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
    toast.add({ title: "Message Sent Successfully!" });
    conatctForm.name = "";
    conatctForm.email = "";
    conatctForm.phone = "";
    conatctForm.message = "";
  }
}
</script>
