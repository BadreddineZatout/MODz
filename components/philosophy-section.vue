<template>
  <div id="philosophy" class="my-20 px-20">
    <h1 class="text-5xl font-bold text-[#1D6E5C]">
      {{ $t("Why Choose Modz?") }}
    </h1>
    <div
      class="flex justify-between items-center mt-10 px-20"
      style="background-image: url('/Sprinkle.svg')"
    >
      <div class="w-3/5 space-y-16 text-xl font-semibold">
        <div class="w-full indent-5 bg-white dark:bg-black">
          {{
            $t(
              "At Modz, we simplify the process of finding and hiring construction professionals. With our app, you can effortlessly create orders and connect with vetted experts in various fields. Whether you need routine maintenance, urgent repairs, or professional advice, Modz ensures reliable and convenient service, all at your fingertips"
            )
          }}
        </div>
        <div class="w-full indent-5 bg-white dark:bg-black">
          {{
            $t(
              "Modz is your essential tool for seamless access to verified construction experts. Our app simplifies the process of hiring professionals for any job, from routine maintenance to urgent repairs and consultations. Trust Modz to deliver reliable service, every time."
            )
          }}
        </div>
      </div>
      <div class="w-1/3 rounded-xl overflow-hidden">
        <img src="/philosophy-section.jpg" alt="" />
      </div>
    </div>
  </div>
</template>
