<template>
  <div class="hero">
    <div class="hero__buttons">
      <div class="hero__button" v-for="button in buttons" :key="button.text || button.src">
        <p v-if="button.text">{{ button.text }}</p>
        <img v-if="button.src" :src="button.src" :alt="button.alt || 'icon'" />
      </div>
    </div>
    <HeroCarousel />
  </div>
  <section class="our-rules">
    <article class="our-rules__item" v-for="advantage in advantages" :key="advantage.text">
      <img :src="advantage.icon" class="our-rules__img" />
      <p>{{ advantage.text }}</p>
    </article>
  </section>
</template>

<script>
import Bags from "@/assets/icons/bags.svg";
import MealIcon from "@/assets/icons/meal.svg";
import replaceMeal from "@/assets/icons/replace-meal.svg";
import cookTime from "@/assets/icons/cook-time.svg";
import delivery from "@/assets/icons/delivery.svg";
import saveEnergy from "@/assets/icons/save-energy.svg";
import fish from "@/assets/icons/fish.svg";
import carrot from "@/assets/icons/carrot.png";
import bottle from "@/assets/icons/bottle.svg";
import meat from "@/assets/icons/meat.svg";
import table from "@/assets/icons/table.png"
import HeroCarousel from "./HeroCarousel.vue";

export default {
  components: {
    HeroCarousel
  },
  data() {
    return {
      advantages: [
        { icon: Bags, text: "We protect nature. Eco-containers and parts." },
        {
          icon: MealIcon,
          text: "28 days without repetition, more than 300 dishes!",
        },
        {
          icon: replaceMeal,
          text: "We replace dishes and ingredients free of charge.",
          isImage: true,
        },
        {
          icon: cookTime,
          text: "We cook at night, pack and send to you!",
          isImage: true,
        },
        {
          icon: delivery,
          text: "Daily convenient and free delivery from 6:00 to 10:00",
          isImage: true,
        },
        {
          icon: saveEnergy,
          text: "We save your energy and free you up to 14 hours a week from cooking!",
          isImage: true,
        },
      ],
      buttons: [
        { text: "kcal"},
        { src: fish, alt: "fish"},
        { src: carrot, alt: "carrot" },
        { src: bottle, alt: "bottle" },
        { src: meat, alt: "meat" },
        { src: table, alt: "table", text:"5" },
      ]
    };
  },
};
</script>

<style lang="scss" >
@use "@/assets/styles/_mixins.scss" as *;
.hero{
  width: 100%;
  min-height: calc(100vh - 217px );

  &__buttons{
    position: absolute;
    left: 50px;
    top: 50%;
    transform: translateY(-50%);
    @include flexbox($display: flex, $direction: column, $justifyContent: space-between, $alignItems: center);
    gap: 50px;
    @include text-style(
      $font-family: Comfortaa,
        $weight: 700,
        $size: 20px,
        $line-height: 138%,
        $letter-spacing: 0%,
        $color: var(--black)
    )
  }
  &__button{
    width: 70px;
    height: 70px;
    @include flexbox($display: flex, $direction: column, $justifyContent: center, $alignItems: center);
    background: var(--background-block);
    box-shadow: var(--shadow);
    border-radius: 50%;

    img{
      width: 40px;
      height: 40px;
      object-fit: contain;
    }
  }
}
.our-rules {
  max-width: 1286px;
  @include flexbox($display: flex, $wrap: wrap, $justifyContent: space-between, $alignItems: center);
  align-self: flex-end;
  gap: 20px;
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  height: auto;
  background: var(--background-block);
  border-radius: 30px;

  &__item{
    @include flexbox($display: flex, $direction: column)
  }
  &__img{
    width: auto;
    height: 67px;
  }
}

article {
  @include flexbox($display: flex, $direction: center, $alignItems: center);
  gap: 20px;
  width: 175px;
  @include text-style(
    $font-family: Montserrat,
    $weight: 500,
    $size: 16px,
    $line-height: 130%,
    $letter-spacing: 0%,
    $color: var(--black)
  );
  text-align: center;
}
</style>
