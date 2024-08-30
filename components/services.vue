<template>
  <div id="services" class="my-20">
    <div class="w-full h-96 overflow-hidden relative">
      <img
        src="/423d560003b308aa94f85e123dab942f.jpg"
        alt=""
        class="-translate-y-48"
      />
      <div
        class="bg-[#1D6E5C] opacity-40 absolute w-screen h-96 top-0 left-0"
      ></div>
      <h1
        class="text-4xl lg:text-8xl font-bold text-[#f9faf9] absolute top-1/3 left-[30%] shadow-md"
        style="text-shadow: 2px 3px gray"
      >
        {{ $t("Our Services") }}
      </h1>
    </div>
    <div
      class="flex flex-wrap justify-center gap-y-10 gap-x-52 items-center mt-10 lg:px-20"
    >
      <div
        class="relative w-full lg:w-1/3 mt-10 px-10 py-4 rounded-lg hover:shadow-lg"
      >
        <h1 class="text-4xl font-bold text-primary-800">
          {{ $t("Regular service") }}
        </h1>
        <p>
          {{
            $t(
              "Electricity, plumbing, painting and construction, our regular service meets your maintenance needs with professionalism and responsiveness"
            )
          }}
        </p>
      </div>
      <div
        class="relative w-full lg:w-1/3 mt-10 px-10 py-4 rounded-lg hover:shadow-lg"
      >
        <h1 class="text-4xl font-bold text-primary-800">
          {{ $t("Rpair") }}
        </h1>
        <p>
          {{
            $t(
              "Addressing electrical, plumbing, painting, and construction issues, our repair service offers quick solutions to keep your spaces functional and safe."
            )
          }}
        </p>
      </div>
      <div class="flex lg:flex-row justify-between bg-left mt-15">
        <div class="w-1/2 space-y-5">
          <img
            class="h-50"
            src="/514719d14a617f6ef2ad56f5de834d23.jpg"
            alt=""
          />
          <img
            class="h-50"
            src="/81b70b71a9fcf48c1e6e8cb76c27f3c9.jpg"
            alt=""
          />
        </div>
        <div class="flex flex-col justify-center gap-y-20 w-1/4">
          <h1 class="text-5xl shadow-md text-primary-800">
            {{ $t("Emergency Repair") }}
          </h1>
          <p>
            {{
              $t(
                "For critical situations involving electrical and plumbing, our emergency repair service provides immediate assistance to prevent further damage and inconvenience."
              )
            }}
          </p>
        </div>
      </div>

      <div class="flex justify-between">
        <h1 class="text-5xl shadow-md text-primary-800">
          {{ $t("Consultation") }}
        </h1>
        <div class="flex lg:flex-col"></div>
        <div class="w-1/2 space-y-5">
          <img
            class="h-50"
            src="/3c60aa465731b6213560888ad82e8e9b.png"
            alt=""
          />
          <img
            class="h-50"
            src="/0a5fcd07e54cbd5f5bec437dee505c10.jpg"
            alt=""
          />
        </div>
        <p>
          {{ $t("Receive expert advice with our consultation service.") }}
        </p>
      </div>
      <div
        class="flex flex-col-reverse lg:flex-row justify-between bg-left mt-15"
      >
        <div class="flex flex-col justify-center gap-y-20 w-1/4">
          <h1 class="text-5xl shadow-md text-primary-800">
            {{ $t("Building site") }}
          </h1>
          <p>
            {{
              $t(
                "From small renovations to large projects, our construction services meet various needs with quality craftsmanship and attention to detail."
              )
            }}
          </p>
        </div>
        <div class="w-1/2 space-y-5">
          <img class="h-50" src="/about-us-2.jpg" alt="" />
          <img
            class="h-50"
            src="/bcd25091758a4018b0baec5ed4fe5473.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>
