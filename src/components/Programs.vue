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
          <li>
            <p>Test Day:</p>
            <p>510 UAH</p>
            <p>357 UAH</p>
          </li>
          <li>
            <p>1 Day:</p>
            <p>357 UAH</p>
          </li>
          <li>
            <p>From 7 Days:</p>
            <p>510 UAH</p>
            <p>490 UAH</p>
          </li>
          <li>
            <p>From 14 Days:</p>
            <p>510 UAH</p>
            <p>470 UAH</p>
          </li>
          <li>
            <p>From 30 Days:</p>
            <p>510 UAH</p>
            <p>445 UAH</p>
          </li>
          <li>
            <p>Breakfast and Dinner:</p>
            <p>-15%</p>
            <p>433 UAH</p>
          </li>
        </ul>
        <my-button type="primary" size="medium">Order a test day</my-button>
      </div>
      <div class="programs__info-menu">
        <ul>
          <li>Mon</li>
          <li>Tue</li>
          <li>Wed</li>
          <li>Thu</li>
          <li>Fri</li>
          <li>Sat</li>
          <li>Sun</li>
        </ul>
        <ul class="meal-schedule">
          <li class="meal-item">
            <h3>Breakfast</h3>
            <p>7:00 AM - 9:00 AM</p>
            <p>- Frittata with cheese and zucchini</p>
            <p>170g</p>
          </li>

          <li class="meal-item">
            <h3>Second Breakfast</h3>
            <p>10:00 AM - 12:00 PM</p>
            <p>- Farmer's yogurt</p>
            <p>- Healthy cookies made from dried fruits and nuts</p>
            <p>200g</p>
            <p>2 pcs</p>
          </li>

          <li class="meal-item">
            <h3>Lunch</h3>
            <p>1:00 PM - 3:00 PM</p>
            <p>- Turkey lula kebab</p>
            <p>- Summer salad with olives and cheese</p>
            <p>100g</p>
            <p>100g</p>
          </li>

          <li class="meal-item">
            <h3>Afternoon Snack</h3>
            <p>4:00 PM - 5:30 PM</p>
            <p>- Cottage cheese soufflé with cocoa and cherries</p>
            <p>100g</p>
          </li>

          <li class="meal-item">
            <h3>Dinner</h3>
            <p>7:00 PM - 8:00 PM</p>
            <p>- Fish terrine</p>
            <p>- Grilled vegetables</p>
            <p>100g</p>
            <p>150g</p>
          </li>
        </ul>

      </div>
    </div>
  </section>
</template>

<script setup>
const programs = [
  { title: "Express Fit", text: "800 ккал" },
  { title: "slim", text: "1000 ккал" },
  { title: "fitness", text: "1300 ккал" },
  { title: "balance", text: "1600 ккал" },
  { title: "balance +", text: "1800 ккал" },
  { title: "strong", text: "2000 ккал" },
  { title: "maxi fit", text: "2400 ккал" },
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
