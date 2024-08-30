<template>
  <div id="services" class="my-20">
    <div class="w-full h-96 relative overflow-hidden">
      <img
        src="/423d560003b308aa94f85e123dab942f.jpg"
        alt=""
        class="-translate-y-48"
      />
      <div
        class="bg-[#1D6E5C] opacity-40 absolute w-screen h-96 top-0 left-0"
      ></div>
      <h1
        class="text-4xl lg:text-8xl font-bold text-[#f9faf9] absolute top-1/3 left-[30%]"
        style="text-shadow: 2px 3px gray"
      >
        {{ $t("Our Services") }}
      </h1>
    </div>
    <div class="mt-40 space-y-36 px-36">
      <div class="flex items-start mt-15">
        <div class="w-1/2 space-y-5">
          <h1
            class="text-7xl w-1/2 mx-auto text-[#1D6E5C]"
            style="text-shadow: 2px 3px #d9dbda"
          >
            {{ $t("Regular service") }}
          </h1>
          <img
            class="w-[500px] h-[430px]"
            src="/9418d9ed799730053e6a8ea7dd72e3cf.jpg"
            alt=""
          />
        </div>
        <div class="flex flex-col justify-center w-2/3">
          <div class="flex item-center">
            <div class="h-[500px] w-[350px] overflow-hidden">
              <img
                class="-translate-x-5 object-cover"
                src="/152f760f5322e5b6b8b5e0dc99c3af1f.jpg"
                alt=""
              />
            </div>
            <div class="space-y-8">
              <img
                class="object-cover w-[500px] h-[200px]"
                src="/46041f59fb8743308017c0b8b1b2e5b8.jpg"
                alt=""
              />
              <img
                class="object-cover w-[500px] h-[200px]"
                src="/6f1148f049f8b34bbf1bb0a2c8cf266b.jpg"
                alt=""
              />
            </div>
          </div>
          <p class="text-2xl px-20">
            {{
              $t(
                "Electricity, plumbing, painting and construction, our regular service meets your maintenance needs with professionalism and responsiveness"
              )
            }}
          </p>
        </div>
      </div>
      <div class="flex flex-col-reverse lg:flex-row justify-between">
        <div class="flex flex-col justify-center gap-y-20 w-1/3">
          <h1
            class="text-7xl text-[#1D6E5C]"
            style="text-shadow: 2px 3px #d9dbda"
          >
            {{ $t("Repair") }}
          </h1>
          <p class="text-2xl">
            {{
              $t(
                "Addressing electrical, plumbing, painting, and construction issues, our repair service offers quick solutions to keep your spaces functional and safe."
              )
            }}
          </p>
        </div>
        <div class="w-1/2 space-y-5">
          <img
            class="w-[500px] h-[300px]"
            src="/4d181383ef4115818e1c5919c04b5f09.jpg"
            alt=""
          />
          <img
            class="w-[500px] h-[300px]"
            src="/7a2043bfdac8e51b9f9a753dad93de6e.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="flex lg:flex-row justify-between items-start mt-15">
        <div class="w-1/2 space-y-5">
          <img
            class="w-[500px] h-[300px]"
            src="/514719d14a617f6ef2ad56f5de834d23.jpg"
            alt=""
          />
          <img
            class="w-[500px] h-[300px]"
            src="/81b70b71a9fcf48c1e6e8cb76c27f3c9.jpg"
            alt=""
          />
        </div>
        <div class="flex flex-col justify-center gap-y-20 w-1/3">
          <h1
            class="text-7xl text-[#1D6E5C]"
            style="text-shadow: 2px 3px #d9dbda"
          >
            {{ $t("Emergency Repair") }}
          </h1>
          <p class="text-2xl">
            {{
              $t(
                "For critical situations involving electrical and plumbing, our emergency repair service provides immediate assistance to prevent further damage and inconvenience."
              )
            }}
          </p>
        </div>
      </div>
      <div class="flex justify-between items-start gap-x-32 mt-15">
        <div class="w-1/2 space-y-5">
          <h1
            class="text-7xl w-1/2 text-[#1D6E5C] mb-20"
            style="text-shadow: 2px 3px #d9dbda"
          >
            {{ $t("Consultation") }}
          </h1>
          <img
            class="h-[430px]"
            src="/7218b74c0980a8fcf22d3d317d9209e9.jpg"
            alt=""
          />
        </div>
        <div class="flex flex-col justify-center items-center w-1/2">
          <div class="flex item-center gap-x-5">
            <img
              class="object-cover w-[220px] h-[550]"
              src="/3c60aa465731b6213560888ad82e8e9b.png"
              alt=""
            />
            <img
              class="object-cover w-[220px] h-[550]"
              src="/0a5fcd07e54cbd5f5bec437dee505c10.jpg"
              alt=""
            />
          </div>
          <p class="text-2xl mt-20">
            {{ $t("Receive expert advice with our consultation service.") }}
          </p>
        </div>
      </div>
      <div class="flex flex-col-reverse lg:flex-row justify-between">
        <div class="flex flex-col justify-center gap-y-20 w-1/4">
          <h1
            class="text-7xl text-[#1D6E5C]"
            style="text-shadow: 2px 3px #d9dbda"
          >
            {{ $t("Building site") }}
          </h1>
          <p class="text-2xl">
            {{
              $t(
                "From small renovations to large projects, our construction services meet various needs with quality craftsmanship and attention to detail."
              )
            }}
          </p>
        </div>
        <div class="w-1/2 space-y-5">
          <img class="w-[500px] h-[300px]" src="/about-us-2.jpg" alt="" />
          <img
            class="w-[500px] h-[300px]"
            src="/bcd25091758a4018b0baec5ed4fe5473.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>
