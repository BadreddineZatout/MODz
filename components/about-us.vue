<template>
  <div id="about-us" class="my-20 px-5 lg:px-20">
    <h1 class="text-4xl lg:text-5xl font-bold text-[#1D6E5C]">
      {{ $t("About Us") }}
    </h1>
    <div
      class="flex flex-col lg:flex-row justify-around items-center mt-10 lg:px-20"
    >
      <div class="w-full lg:w-2/5">
        <div class="lg:h-[267px] shadow-sm overflow-hidden">
          <img class="" src="/about-us-1.jpg" alt="" />
        </div>
        <div class="mt-5 text-center font-semibold px-10">
          {{
            $t(
              "Modz is your go-to solution for seamless construction services. Our mission is to empower clients by providing easy access to skilled professionals, ensuring every project is handled with expertise and efficiency."
            )
          }}
        </div>
      </div>
      <div class="w-full lg:w-2/5">
        <div class="lg:h-[267px] shadow-sm overflow-hidden">
          <img class="lg:-translate-y-10" src="/about-us-2.jpg" alt="" />
        </div>
        <div class="mt-5 text-center font-semibold px-10">
          {{
            $t(
              "Modz is revolutionizing the way you connect with construction services. Our mission is to provide a user-friendly platform that ensures efficient project management through trusted professionals"
            )
          }}
        </div>
      </div>
    </div>
  </div>
</template>
