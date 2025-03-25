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

<style>
.our-rules {
  align-self: flex-end;
  max-width: 1286px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  height: auto;
  background: var(--background-block);
  border-radius: 30px;
}

article {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 175px;
  font-family: Montserrat;
  font-weight: 500;
  font-size: 12px;
  line-height: 130%;
  letter-spacing: 0%;
  text-align: center;
}
</style>
