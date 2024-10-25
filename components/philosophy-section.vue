<template>
  <div
    id="about-us"
    class="my-20 px-5 py-10 lg:mx-20 lg:px-10"
    style="background-image: url(&quot;/Sprinkle.svg&quot;)"
  >
    <h1
      class="text-2xl font-bold md:text-3xl lg:text-4xl"
      style="
        text-shadow:
          1px 1px 0 #e1e6e4,
          3px 3px 0 #e1e6e4,
          4px 4px 0 #e1e6e4;
      "
    >
      {{ $t("Why Choose Modz?") }}
    </h1>

    <div
      class="mt-10 flex flex-col-reverse items-center justify-between gap-x-3 gap-y-5 px-5 md:flex-row lg:px-20"
    >
      <div class="w-full overflow-hidden rounded-xl md:w-1/2 lg:w-1/3">
        <img src="/philosophy-section.jpg" alt="" />
      </div>
      <div
        class="w-full space-y-5 text-xl font-semibold lg:w-3/5 lg:space-y-16"
      >
        <h1
          class="text-2xl font-bold text-[#1D6E5C] lg:text-5xl"
          style="
            text-shadow:
              1px 1px 0 #c1d9d3,
              3px 3px 0 #c1d9d3,
              4px 4px 0 #c1d9d3;
          "
        >
          {{ $t("We are your key to experts.") }}
        </h1>
        <div class="w-full bg-white">
          {{
            $t(
              "Modz simplifies your access to trusted construction experts. We connect you with verified professionals for all your needs, from regular maintenance to urgent repairs, with reliable service every time.",
            )
          }}
        </div>
      </div>
    </div>
  </div>
</template>
