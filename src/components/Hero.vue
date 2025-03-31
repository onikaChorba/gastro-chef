<template>
  <section class="our-rules">
    <article
      class="our-rules__item"
      v-for="advantage in advantages"
      :key="advantage.text"
    >
      <img :src="advantage.icon" />
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

export default {
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
    };
  },
};
</script>

<style lang="scss" >
@use "@/assets/styles/_mixins.scss" as *;
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
