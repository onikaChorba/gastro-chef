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
        <div class="info-price">
          <h3 class="info-price__title">Fitness 1300</h3>
          <p>
            Express Fit Healthy Eating Program. Ideal for: losing weight in the
            shortest time, increasing energy and strength, losing weight with a
            sedentary lifestyle.
          </p>
        </div>

        <ul class="info-price__list">
          <li v-for="(item, index) in priceData" :key="index" class="info-price__item">
            <p>{{ item.title }}:</p>
            <p v-for="(price, priceIndex) in item.prices" :key="priceIndex"
              :class="{ strikethrough: item.prices.length > 1 && priceIndex === 0 }">
              {{ price }} UAH
            </p>
            <p v-if="item.discount">{{ item.discount }}</p>
          </li>
        </ul>

        <my-button type="primary" size="medium">Order a test day</my-button>
      </div>

      <div class="programs__info-menu">
        <ul class="days-of-week">
          <li v-for="(day, index) in daysOfWeek" :key="index" class="day-of-week">{{ day }}</li>
        </ul>

        <div class="meal-schedule">
          <div v-for="(meal, index) in mealData" :key="index" class="meal-schedule__item">
            <div>
              <h3>{{ meal.meal }}</h3>
              <p>{{ meal.time }}</p>
            </div>

            <div>
              <p>{{ meal.food }}</p>
              <p v-if="meal.additionalFood">{{ meal.additionalFood }}</p>
            </div>

            <p>{{ meal.weight }}</p>

            <div>
              <p v-if="meal.pcs">{{ meal.pcs }}</p>
              <p v-if="meal.additionalWeight">{{ meal.additionalWeight }}</p>
            </div>
          </div>
        </div>
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
    @include flexbox($display: flex,
      $wrap: wrap,
      $justifyContent: space-between);
    gap: 40px;
  }

  &__item {
    @include flexbox($display: flex,
      $direction: column);
  }

  &__item-title {
    text-transform: uppercase;
    @include text-style($font-family: Comfortaa,
      $weight: 700,
      $size: 14px,
      $line-height: 100%,
      $letter-spacing: 0%,
      $color: var(--black));
  }

  &__item-text {
    @include text-style($font-family: Montserrat,
      $weight: 400,
      $size: 14px,
      $line-height: 100%,
      $letter-spacing: 0%,
      $color: var(--black));
  }

  &__info {
    @include flexbox($display: flex, $justifyContent: space-between, $alignItems: flex-start);
    gap: 14px;
  }

  &__info-price {
    width: 30%;
    @include flexbox($display: flex, $direction: column, $alignItems: center);
    gap: 20px;
    padding: 0px 20px;
    box-sizing: border-box;
  }

  &__info-menu {
    width: 70%;
    @include flexbox($display: flex, $direction: column, $alignItems: center);
    gap: 20px;
  }
}

.info-price {
  @include flexbox($display: flex, $direction: column, $alignItems: flex-start);
  gap: 10px;
  background: var(--primary);
  box-shadow: var(--shadow);
  border-radius: 30px;
  padding: 20px;
  box-sizing: border-box;
  @include text-style($font-family: Montserrat,
    $weight: 500,
    $size: 16px,
    $line-height: 20px,
    $letter-spacing: 0%,
    $color: var(--white));

  &__title {
    text-transform: uppercase;
    @include text-style($font-family: Comfortaa,
      $weight: 700,
      $size: 18px,
      $line-height: 20px,
      $letter-spacing: 0%,
      $color: var(--white));
  }

  &__list {
    width: 100%;
    padding: 0px 20px;
    padding-inline-start: 20px;
    @include flexbox($display: flex, $direction: column, $alignItems: flex-start);
    gap: 20px;
    @include text-style($font-family: Montserrat,
      $weight: 400,
      $size: 14px,
      $line-height: 10px,
      $letter-spacing: 0%,
      $color: var(--black));
  }

  &__item {
    width: 100%;
    @include flexbox ($display: flex, $justifyContent: space-between);
  }
}

.days-of-week {
  @include flexbox($display: flex, $justifyContent: space-between, $alignItems: center);
  width: 100%;
  height: 53px;
  padding: 0px 20px;
  padding-inline-start: 20px;
  background-color: var(--white);
  box-shadow: var(--shadow);
  border-radius: 30px;
  list-style: none;
  text-transform: uppercase;
  @include text-style($font-family: Comfortaa,
    $weight: 700,
    $size: 16px,
    $line-height: 20px,
    $letter-spacing: 0%,
    $color: var(--black));
}

.meal-schedule {
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: var(--white);
  box-shadow: var(--shadow);
  border-radius: 30px;
}

.meal-schedule__item {
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 2fr auto auto;
  gap: 20px;
  align-items: flex-start;
}

.meal-schedule__item h3 {
  margin: 0;
  font-size: 14px;
}

.meal-schedule__item p {
  margin: 0;
}

@media (max-width: 1024px) {
  .programs {
    padding: 0px 20px;

    &__buttons {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;
    }

    &__info {
      flex-direction: column;
      align-items: stretch;

      &-price,
      &-menu {
        width: 100%;
        padding: 0;
      }
    }

    &__items {
      justify-content: center;
    }
  }

  .meal-schedule__item {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .days-of-week {
    flex-wrap: wrap;
    gap: 10px;
    height: auto;
    padding: 10px;
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .programs {
    gap: 30px;

    &__items {
      gap: 20px;
    }

    &__item-title,
    &__item-text {
      text-align: center;
    }
  }

  .info-price {
    padding: 15px;

    &__list {
      padding: 0 10px;
    }
  }

  .meal-schedule {
    padding: 15px;
  }

  .meal-schedule__item {
    padding: 15px;
  }
}
</style>
