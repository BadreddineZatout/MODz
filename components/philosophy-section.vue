<template>
  <div id="philosophy" class="my-20 mx-20">
    <h1
      class="text-2xl lg:text-4xl font-bold"
      style="text-shadow: 2px 3px #d9dbda"
    >
      {{ $t("Why Choose Modz?") }}
    </h1>

    <div
      class="flex flex-col-reverse lg:flex-row justify-between items-center mt-10 px-5 lg:px-20"
      style="background-image: url('/Sprinkle.svg')"
    >
      <div class="w-full lg:w-1/3 rounded-xl overflow-hidden">
        <img src="/philosophy-section.jpg" alt="" />
      </div>
      <div class="w-full lg:w-3/5 space-y-16 text-xl font-semibold">
        <h1 class="text-2xl lg:text-5xl font-bold text-[#1D6E5C]"
        style="text-shadow: 2px 3px #d9dbda;">
          {{ $t("We are your key to experts.") }}
        </h1>
        <div class="w-full indent-5 bg-white dark:bg-[#1c1b22]">
          Modz simplifie votre accès à des experts en construction ​de
          confiance. Nous vous mettons en relation avec des ​professionnels
          vérifiés pour tous vos besoins, de la ​maintenance régulière aux
          réparations urgentes, avec ​un service fiable à chaque fois.
        </div>
      </div>
    </div>
  </div>
</template>
