<template>
  <section class="programs">
    <div class="programs__buttons">
      <my-button type="primary" size="large--active">Nutrition programs</my-button>
      <my-button type="secondary" size="large--inactive" state="inactive">Special programs</my-button>
    </div>
    <div class="programs__items">
      <article class="programs__item" v-for="program in programs" :key="program.title">
        <h3 class="programs__item-title">{{ program.title }}</h3>
        <p class="programs__item-text">{{ program.text }}</p>
      </article>
    </div>
    <div class="programs__info">
      <div class="programs__info-price">
        <div>
          <h3>Fitness 1300</h3>
          <p>
            Express Fit Healthy Eating Program. Ideal for: losing weight in the
            shortest time, increasing energy and strength, losing weight with a
            sedentary lifestyle.
          </p>
        </div>
        <ul>
          <li v-for="(item, index) in priceData" :key="index">
            <p>{{ item.title }}:</p>
            <p v-for="(price, priceIndex) in item.prices" :key="priceIndex">{{ price }} UAH</p>
            <p v-if="item.discount">{{ item.discount }}</p>
          </li>
        </ul>
        <my-button type="primary" size="medium">Order a test day</my-button>
      </div>
      <div class="programs__info-menu">
        <ul>
          <li v-for="(day, index) in daysOfWeek" :key="index">{{ day }}</li>
        </ul>
        <ul class="meal-schedule">
          <li v-for="(meal, index) in mealData" :key="index" class="meal-item">
            <h3>{{ meal.meal }}</h3>
            <p>{{ meal.time }}</p>
            <p>{{ meal.food }}</p>
            <p v-if="meal.additionalFood">{{ meal.additionalFood }}</p>
            <p>{{ meal.weight }}</p>
            <p v-if="meal.pcs">{{ meal.pcs }}</p>
            <p v-if="meal.additionalWeight">{{ meal.additionalWeight }}</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const programs = [
  { title: "Express Fit", text: "800 ккал" },
  { title: "slim", text: "1000 ккал" },
  { title: "fitness", text: "1300 ккал" },
  { title: "balance", text: "1600 ккал" },
  { title: "balance +", text: "1800 ккал" },
  { title: "strong", text: "2000 ккал" },
  { title: "maxi fit", text: "2400 ккал" },
];
const priceData = [
  {
    title: "Test Day",
    prices: ["510", "357"],
  },
  {
    title: "1 Day",
    prices: ["357"],
  },
  {
    title: "From 7 Days",
    prices: ["510", "490"],
  },
  {
    title: "From 14 Days",
    prices: ["510", "470"],
  },
  {
    title: "From 30 Days",
    prices: ["510", "445"],
  },
  {
    title: "Breakfast and Dinner",
    prices: ["433"],
    discount: "-15%",
  },
];
const mealData = [
  {
    meal: "Breakfast",
    time: "7:00 AM - 9:00 AM",
    food: "- Frittata with cheese and zucchini",
    weight: "170g",
  },
  {
    meal: "Second Breakfast",
    time: "10:00 AM - 12:00 PM",
    food: "- Farmer's yogurt",
    additionalFood: "- Healthy cookies made from dried fruits and nuts",
    weight: "200g",
    pcs: "2 pcs",
  },
  {
    meal: "Lunch",
    time: "1:00 PM - 3:00 PM",
    food: "- Turkey lula kebab",
    additionalFood: "- Summer salad with olives and cheese",
    weight: "100g",
  },
  {
    meal: "Afternoon Snack",
    time: "4:00 PM - 5:30 PM",
    food: "- Cottage cheese soufflé with cocoa and cherries",
    weight: "100g",
  },
  {
    meal: "Dinner",
    time: "7:00 PM - 8:00 PM",
    food: "- Fish terrine",
    additionalFood: "- Grilled vegetables",
    weight: "100g",
    additionalWeight: "150g",
  },
];
</script>
<style lang="scss" scoped>
@use "@/assets/styles/_mixins.scss" as *;
.programs {
  width: 100%;
  @include flexbox($display: flex, $direction: column);
  gap: 40px;
  padding: 40px 0;
  &__buttons {
    @include flexbox($display: flex, $justifyContent: space-between);
  }
  &__items {
    width: 100%;
    @include flexbox(
      $display: flex,
      $wrap: wrap,
      $justifyContent: space-between
    );
    gap: 40px;
  }
  &__item {
    @include flexbox(
      $display: flex,
      $direction: column,
      $justifyContent: center,
      $alignItems: center
    );
  }
  &__item-title {
    text-transform: uppercase;
    @include text-style(
      $font-family: Comfortaa,
      $weight: 700,
      $size: 10px,
      $line-height: 100%,
      $letter-spacing: 0%,
      $color: var(--black)
    );
  }
  &__item-text {
    @include text-style(
      $font-family: Montserrat,
      $weight: 400,
      $size: 8px,
      $line-height: 100%,
      $letter-spacing: 0%,
      $color: var(--black)
    );
  }
}
</style>
