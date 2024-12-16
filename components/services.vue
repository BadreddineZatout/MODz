<template>
  <div id="services" class="my-20">
    <div class="relative h-fit w-full overflow-hidden md:h-64 lg:h-[96] xl:h-[375px]">
      <img
        src="/423d560003b308aa94f85e123dab942f.jpg"
        alt=""
        class="md:-translate-y-28 lg:-translate-y-48"
      />
      <div
        class="absolute left-0 top-0 h-96 w-screen bg-[#1D6E5C] opacity-40"
      ></div>
      <h1
        class="font-poppins absolute left-1/4 top-1/3 text-4xl font-bold text-[#f9faf9] md:left-[28%] lg:left-[20%] md:text-7xl lg:text-8xl 2xl:text-9xl xl:left-[30%] 2xl:left-[25%] rtl:right-[38%] rtl:md:right-[38%] rtl:md:text-6xl rtl:lg:right-[35%] rtl:lg:text-9xl rtl:2xl:right-[38%]"
        style="
          text-shadow: 0.03291944em 0.09044541em 0.0625em rgba(0, 0, 0, 0.42);
        "
      >
        {{ $t("Our Services") }}
      </h1>
    </div>
    <div class="mt-20 space-y-10 px-5 lg:mt-40 lg:space-y-36 lg:px-20">
      <div
        class="mt-15 flex flex-wrap items-center gap-x-3 md:flex-nowrap lg:items-start 2xl:gap-x-0"
      >
        <div class="w-full space-y-5 lg:w-1/2 lg:space-y-5">
          <h1
            class="mb-5 font-poppins text-4xl leading-tight text-[#1D6E5C] lg:w-1/2 md:text-5xl xl:text-7xl"
            style="
              text-shadow: 0.03291944em 0.09044541em 0.0625em
                rgba(0, 0, 0, 0.42);
            "
          >
            {{ $t("Regular service") }}
          </h1>
          <div class="lg:w-[400px] xl:w-[535px] lg:h-[393px] overflow-hidden">
            <img
            class="w-full h-full"
            src="/9418d9ed799730053e6a8ea7dd72e3cf.jpg"
            alt=""
          />
          </div>
        </div>
        <div class="font-montserrat flex w-full flex-col justify-center lg:w-2/3">
          <div class="item-center hidden gap-x-2 rtl:gap-x-5 lg:flex">
            <div class="lg:h-[335px] lg:w-[170px] xl:h-[403px] xl:w-[210px] overflow-hidden">
              <img
                class="lg:-translate-x-3 lg:scale-125 xl:-translate-x-10 xl:scale-150 h-full w-full object-cover"
                src="/152f760f5322e5b6b8b5e0dc99c3af1f.jpg"
                alt=""
              />
            </div>
            <div class="space-y-8 lg:space-y-3 xl:space-y-8 rtl:space-y-5">
              <img
                class="h-[150px] lg:h-[160px] xl:h-[210px] w-[500px] object-cover"
                src="/46041f59fb8743308017c0b8b1b2e5b8.jpg"
                alt=""
              />
              <img
                class="h-[150px] lg:h-[160px] xl:h-[160px] w-[500px] object-cover"
                src="/6f1148f049f8b34bbf1bb0a2c8cf266b.jpg"
                alt=""
              />
            </div>
          </div>
          <p class="mt-5 px-1 text-xl xl:text-2xl md:mt-10 xl:mt-5 2xl:px-20">
            {{
              $t(
                "Electricity, plumbing, painting and construction, our regular service meets your maintenance needs with professionalism and responsiveness",
              )
            }}
          </p>
        </div>
      </div>
      <div class="flex flex-col justify-between md:flex-row">
        <div class="flex w-full flex-col justify-center lg:w-2/5 lg:gap-y-20">
          <h1
            class="text-4xl font-poppins text-[#1D6E5C] md:text-5xl xl:text-7xl"
            style="
              text-shadow: 0.03291944em 0.09044541em 0.0625em
                rgba(0, 0, 0, 0.42);
            "
          >
            {{ $t("Repair") }}
          </h1>
          <p class="my-5 font-montserrat text-xl xl:text-2xl lg:my-0">
            {{
              $t(
                "Addressing electrical, plumbing, painting, and construction issues, our repair service offers quick solutions to keep your spaces functional and safe.",
              )
            }}
          </p>
        </div>
        <div class="w-full space-y-5 lg:w-1/2">
          <img
            class="hidden lg:block lg:h-[215px] lg:w-[382px] xl:h-[286px] xl:w-[509px]"
            src="/4d181383ef4115818e1c5919c04b5f09.jpg"
            alt=""
          />
          <img
            class="lg:h-[215px] lg:w-[382px] xl:h-[286px] xl:w-[509px]"
            src="/7a2043bfdac8e51b9f9a753dad93de6e.jpg"
            alt=""
          />
        </div>
      </div>
      <div
        class="mt-15 flex flex-col-reverse items-center justify-between gap-x-3 md:flex-row lg:gap-x-0"
      >
        <div class="w-full space-y-5 lg:w-1/2">
          <img
            class="hidden lg:block lg:h-[183px] lg:w-[382px] xl:w-[510px] xl:h-[244px]"
            src="/514719d14a617f6ef2ad56f5de834d23.jpg"
            alt=""
          />
          <img
            class="lg:h-[183px] lg:w-[382px] xl:w-[510px] xl:h-[244px]"
            src="/81b70b71a9fcf48c1e6e8cb76c27f3c9.jpg"
            alt=""
          />
        </div>
        <div class="flex w-full flex-col justify-center lg:w-2/5 xl:w-1/2 lg:gap-y-20">
          <h1
            class="text-4xl font-poppins text-[#1D6E5C] md:text-5xl xl:text-7xl"
            style="
              text-shadow: 0.03291944em 0.09044541em 0.0625em
                rgba(0, 0, 0, 0.42);
            "
          >
            {{ $t("Emergency Repair") }}
          </h1>
          <p class="my-5 font-montserrat text-xl xl:text-2xl lg:my-0">
            {{
              $t(
                "For critical situations involving electrical and plumbing, our emergency repair service provides immediate assistance to prevent further damage and inconvenience.",
              )
            }}
          </p>
        </div>
      </div>
      <div
        class="mt-15 flex flex-col items-start justify-between gap-x-3 md:flex-row xl:gap-x-32"
      >
        <div class="w-full space-y-5 lg:w-1/2">
          <h1
            class="w-full font-poppins text-4xl text-[#1D6E5C] lg:mb-20 lg:w-1/2 md:text-5xl xl:text-7xl"
            style="
              text-shadow: 0.03291944em 0.09044541em 0.0625em
                rgba(0, 0, 0, 0.42);
            "
          >
            {{ $t("Consultation") }}
          </h1>
          <img
            class="lg:w-[400px] lg:h-[295px] xl:w-[533px] xl:h-[394px]"
            src="/7218b74c0980a8fcf22d3d317d9209e9.jpg"
            alt=""
          />
        </div>
        <div class="flex w-full flex-col items-center justify-center lg:w-1/2">
          <div class="flex item-center  gap-x-5">
            <img
              class="hidden h-[295px] w-[162px] xl:h-[393px] xl:w-[216px] lg:block"
              src="/3c60aa465731b6213560888ad82e8e9b.png"
              alt=""
            />
            <img
              class="hidden h-[295px] w-[162px] xl:h-[393px] xl:w-[216px] lg:block"
              src="/0a5fcd07e54cbd5f5bec437dee505c10.jpg"
              alt=""
            />
          </div>
          <p class="mt-5 font-montserrat text-xl xl:text-2xl lg:mt-10">
            {{ $t("Receive expert advice with our consultation service.") }}
          </p>
        </div>
      </div>
      <div class="flex flex-col justify-between md:flex-row">
        <div
          class="flex w-full flex-col justify-center lg:w-1/3 lg:gap-y-20 2xl:w-1/4"
        >
          <h1
            class="text-4xl font-poppins text-[#1D6E5C] md:text-5xl xl:text-7xl"
            style="
              text-shadow: 0.03291944em 0.09044541em 0.0625em
                rgba(0, 0, 0, 0.42);
            "
          >
            {{ $t("Building site") }}
          </h1>
          <p class="my-5 font-montserrat text-xl xl:text-2xl lg:my-0">
            {{
              $t(
                "From small renovations to large projects, our construction services meet various needs with quality craftsmanship and attention to detail.",
              )
            }}
          </p>
        </div>
        <div class="w-full space-y-5 lg:w-1/2">
          <img class="h-[205px] w-[366px] xl:h-[275px] xl:w-[488px]" src="/about-us-2.jpg" alt="" />
          <img
            class="hidden h-[205px] w-[366px] xl:h-[275px] xl:w-[488px] lg:block"
            src="/bcd25091758a4018b0baec5ed4fe5473.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>
