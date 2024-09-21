<template>
  <div id="services" class="my-20">
    <div class="relative h-fit w-full overflow-hidden md:h-64 lg:h-96">
      <img
        src="/423d560003b308aa94f85e123dab942f.jpg"
        alt=""
        class="md:-translate-y-28 lg:-translate-y-48"
      />
      <div
        class="absolute left-0 top-0 h-96 w-screen bg-[#1D6E5C] opacity-40"
      ></div>
      <h1
        class="absolute left-1/4 top-1/3 rtl:right-[38%] text-4xl font-bold text-[#f9faf9] md:left-[38%] lg:left-[30%] lg:text-8xl rtl:md:text-6xl rtl:md:right-[38%] rtl:lg:right-[45%]"
      >
        {{ $t("Our Services") }}
      </h1>
    </div>
    <div class="mt-20 space-y-10 px-5 lg:mt-40 lg:space-y-36 lg:px-36">
      <div class="mt-15 flex flex-wrap items-center gap-x-3 lg:gap-x-0 lg:items-start md:flex-nowrap">
        <div class="w-full space-y-2 lg:w-1/2 lg:space-y-5">
          <h1
            class="mx-auto text-4xl text-[#1D6E5C] lg:w-1/2 lg:text-7xl"
          >
            {{ $t("Regular service") }}
          </h1>
          <img
            class="lg:h-[430px] lg:w-[500px]"
            src="/9418d9ed799730053e6a8ea7dd72e3cf.jpg"
            alt=""
          />
        </div>
        <div class="flex w-full flex-col justify-center lg:w-2/3">
          <div class="item-center hidden lg:flex">
            <div class="h-[500px] w-[350px] overflow-hidden">
              <img
                class="-translate-x-5 object-cover"
                src="/152f760f5322e5b6b8b5e0dc99c3af1f.jpg"
                alt=""
              />
            </div>
            <div class="space-y-8">
              <img
                class="h-[200px] w-[500px] object-cover"
                src="/46041f59fb8743308017c0b8b1b2e5b8.jpg"
                alt=""
              />
              <img
                class="h-[200px] w-[500px] object-cover"
                src="/6f1148f049f8b34bbf1bb0a2c8cf266b.jpg"
                alt=""
              />
            </div>
          </div>
          <p class="px-1 text-2xl lg:px-20">
            {{
              $t(
                "Electricity, plumbing, painting and construction, our regular service meets your maintenance needs with professionalism and responsiveness",
              )
            }}
          </p>
        </div>
      </div>
      <div class="flex flex-col justify-between md:flex-row">
        <div class="flex w-full flex-col justify-center lg:w-1/3 lg:gap-y-20">
          <h1
            class="text-4xl text-[#1D6E5C] lg:text-7xl"
          >
            {{ $t("Repair") }}
          </h1>
          <p class="text-2xl">
            {{
              $t(
                "Addressing electrical, plumbing, painting, and construction issues, our repair service offers quick solutions to keep your spaces functional and safe.",
              )
            }}
          </p>
        </div>
        <div class="w-full space-y-5 lg:w-1/2">
          <img
            class="hidden lg:block lg:h-[300px] lg:w-[500px]"
            src="/4d181383ef4115818e1c5919c04b5f09.jpg"
            alt=""
          />
          <img
            class="lg:h-[300px] lg:w-[500px]"
            src="/7a2043bfdac8e51b9f9a753dad93de6e.jpg"
            alt=""
          />
        </div>
      </div>
      <div
        class="mt-15 flex flex-col-reverse items-center gap-x-3 lg:gap-x-0 justify-between md:flex-row"
      >
        <div class="w-full space-y-5 lg:w-1/2">
          <img
            class="hidden lg:block lg:h-[300px] lg:w-[500px]"
            src="/514719d14a617f6ef2ad56f5de834d23.jpg"
            alt=""
          />
          <img
            class="lg:h-[300px] lg:w-[500px]"
            src="/81b70b71a9fcf48c1e6e8cb76c27f3c9.jpg"
            alt=""
          />
        </div>
        <div class="flex w-full flex-col justify-center lg:w-1/3 lg:gap-y-20">
          <h1
            class="text-4xl text-[#1D6E5C] lg:text-7xl"
          >
            {{ $t("Emergency Repair") }}
          </h1>
          <p class="text-2xl">
            {{
              $t(
                "For critical situations involving electrical and plumbing, our emergency repair service provides immediate assistance to prevent further damage and inconvenience.",
              )
            }}
          </p>
        </div>
      </div>
      <div
        class="mt-15 flex flex-col items-center gap-x-3 justify-between md:flex-row lg:gap-x-32"
      >
        <div class="w-full space-y-5 lg:w-1/2">
          <h1
            class="w-full text-4xl text-[#1D6E5C] lg:mb-20 lg:w-1/2 lg:text-7xl"
          >
            {{ $t("Consultation") }}
          </h1>
          <img
            class="lg:h-[430px]"
            src="/7218b74c0980a8fcf22d3d317d9209e9.jpg"
            alt=""
          />
        </div>
        <div class="flex w-full flex-col items-center justify-center lg:w-1/2">
          <div class="item-center flex gap-x-5">
            <img
              class="hidden h-[550] w-[220px] object-cover lg:block"
              src="/3c60aa465731b6213560888ad82e8e9b.png"
              alt=""
            />
            <img
              class="hidden h-[550] w-[220px] object-cover lg:block"
              src="/0a5fcd07e54cbd5f5bec437dee505c10.jpg"
              alt=""
            />
          </div>
          <p class="text-2xl lg:mt-20">
            {{ $t("Receive expert advice with our consultation service.") }}
          </p>
        </div>
      </div>
      <div class="flex flex-col justify-between md:flex-row">
        <div class="flex w-full flex-col justify-center lg:w-1/4 lg:gap-y-20">
          <h1
            class="text-4xl text-[#1D6E5C] lg:text-7xl"
          >
            {{ $t("Building site") }}
          </h1>
          <p class="text-2xl">
            {{
              $t(
                "From small renovations to large projects, our construction services meet various needs with quality craftsmanship and attention to detail.",
              )
            }}
          </p>
        </div>
        <div class="w-full space-y-5 lg:w-1/2">
          <img class="h-[300px] w-[500px]" src="/about-us-2.jpg" alt="" />
          <img
            class="hidden h-[300px] w-[500px] lg:block"
            src="/bcd25091758a4018b0baec5ed4fe5473.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>
