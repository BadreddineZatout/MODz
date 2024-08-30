<template>
  <div
    id="about-us"
    class="my-20 px-5 py-10 lg:mx-20 lg:px-10"
    style="background-image: url(&quot;/Sprinkle.svg&quot;)"
  >
    <h1
      class="text-2xl font-bold lg:text-4xl"
      style="text-shadow: 2px 3px #d9dbda"
    >
      {{ $t("Why Choose Modz?") }}
    </h1>

    <div
      class="mt-10 flex flex-col-reverse items-center justify-between gap-y-5 px-5 lg:flex-row lg:px-20"
    >
      <div class="w-full overflow-hidden rounded-xl lg:w-1/3">
        <img src="/philosophy-section.jpg" alt="" />
      </div>
      <div class="w-full space-y-16 text-xl font-semibold lg:w-3/5">
        <h1
          class="text-2xl font-bold text-[#1D6E5C] lg:text-5xl"
          style="text-shadow: 2px 3px #d9dbda"
        >
          {{ $t("We are your key to experts.") }}
        </h1>
        <div class="w-full bg-white indent-5 dark:bg-[#1c1b22]">
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
