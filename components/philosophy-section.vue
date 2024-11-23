<template>
  <div
    id="about-us"
    class="my-20 px-5 py-10 md:my-5 2xl:mx-20"
    style="background-image: url(&quot;/Sprinkle.svg&quot;)"
  >
    <h1
      class="text-2xl font-bold md:text-2xl lg:text-4xl"
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
      class="mt-10 flex flex-col-reverse items-center justify-center gap-x-10 gap-y-5 md:flex-row"
    >
      <div class="w-full overflow-hidden rounded-xl md:w-1/3 xl:w-1/3">
        <img src="/philosophy-section.jpg" alt="" />
      </div>
      <div
        class="w-full text-xl md:w-1/2 xl:w-3/5 lg:space-y-5"
      >
        <p
          class="text-2xl font-bold font-bogart text-[#1D6E5C] md:text-3xl xl:text-5xl md:pr-32 xl:pr-32"
          style="
            text-shadow:
              1px 1px 0 #c1d9d3,
              3px 3px 0 #c1d9d3,
              4px 4px 0 #c1d9d3;
          "
        >
          {{ $t("We are your key to experts.") }}
        </p>
        <div class="w-full bg-white font-montserrat">
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
