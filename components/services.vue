<template>
  <div id="services" class="my-20 ">
  <div 
  class="w-full h-72 overflow-hidden relative">
  <img src="/423d560003b308aa94f85e123dab942f.jpg" alt=""
  class="-translate-y-48">
    <h1 class="text-4xl lg:text-8xl font-bold text-[#f9faf9] absolute top-1/3 left-1/4 shadow-md">
      {{ $t("Our Services") }}
    </h1>
    
  </div>
    <div
      class="flex flex-wrap justify-center gap-y-10 gap-x-52 items-center mt-10 lg:px-20"
    >
      <div
        class="relative w-full lg:w-1/3 mt-10 px-10 py-4 rounded-lg hover:shadow-lg"
      >
        <img
          class="absolute w-32 -top-16 -right-5 rtl:-left-5 lg:-left-16"
          src="/normal-service.png"
          alt=""
        />
        <h1 class="text-2xl font-bold text-primary-800">
          {{ $t("Normal Service") }}
        </h1>
        <p>
          {{
            $t(
              "Covering electricity, plumbing, painting, and building, our regular service ensures your ongoing maintenance needs are met promptly and professionally."
            )
          }}
        </p>
      </div>
      <div
        class="relative w-full lg:w-1/3 mt-10 px-10 py-4 rounded-lg hover:shadow-lg"
      >
        <img
          class="absolute w-20 -top-10 right-0 rtl:-left-0 lg:-left-10"
          src="/repair.png"
          alt=""
        />
        <h1 class="text-2xl font-bold text-primary-800">{{ $t("Repair") }}</h1>
        <p>
          {{
            $t(
              "Addressing issues in electricity, plumbing, painting, and building, our repair service offers timely solutions to keep your spaces functional and safe."
            )
          }}
        </p>
      </div>
      <div
        class="relative w-full lg:w-1/3 mt-10 px-10 py-4 rounded-lg hover:shadow-lg"
      >
        <img
          class="absolute w-20 -top-10 -right-0 rtl:-left-0 lg:-left-10"
          src="/urgent-repair.png"
          alt=""
        />
        <h1 class="text-2xl font-bold text-primary-800">
          {{ $t("Urgent Repair") }}
        </h1>
        <p>
          {{
            $t(
              "For critical situations involving electricity and plumbing, our urgent repair service provides immediate assistance to prevent further damage and inconvenience."
            )
          }}
        </p>
      </div>
      <div
        class="relative w-full lg:w-1/3 mt-10 px-10 py-4 rounded-lg hover:shadow-lg"
      >
        <img
          class="absolute w-32 -top-16 -right-5 rtl:-left-5 lg:-left-16"
          src="/consultation.png"
          alt=""
        />
        <h1 class="text-2xl font-bold text-primary-800">
          {{ $t("Consultation") }}
        </h1>
        <p>
          {{
            $t(
              "Gain insights and recommendations from industry experts on electricity, plumbing, painting, and building through our consultation service."
            )
          }}
        </p>
      </div>
      <div
        class="relative w-full lg:w-1/3 mt-10 px-10 py-4 rounded-lg hover:shadow-lg"
      >
        <img
          class="absolute w-32 -top-16 -right-5 rtl:-left-5 lg:-left-24"
          src="/construction.png"
          alt=""
        />
        <h1 class="text-2xl font-bold text-primary-800">
          {{ $t("Construction") }}
        </h1>
        <p>
          {{
            $t(
              "From small-scale renovations to large-scale projects, our construction services cater to diverse needs with quality craftsmanship and attention to detail."
            )
          }}
        </p>
      </div>
    </div>
  </div>
</template>
