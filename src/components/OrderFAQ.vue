<template>
  <section class="order-faq">
    <div class="order-faq_order order">
      <h3 class="order__title">Place an order</h3>
      <p class="order__text">
        Discuss all the details of the order by phone or specify all the details
        online yourself
      </p>
      <form class="order__form">
        <MyInput v-model="inputValue" label="Name" placeholder="Ivan Ivanov" />
        <MyInput
          v-model="inputValue"
          label="Phone"
          placeholder="+380907668343"
        />
      </form>
      <div class="order__buttons">
        <my-button type="grey" size="medium" state="inactive-secondary">
          Order by phone
        </my-button>
        <p class="order__buttons-text">or</p>
        <my-button type="primary" size="medium">Online order</my-button>
      </div>
    </div>
    <div class="order-faq_questions questions"></div>
  </section>
</template>
<script setup>
import { ref } from "vue";
import MyInput from "./UI/MyInput.vue";

const inputValue = ref("");
</script>

<style lang="scss" scoped>
@use "@/assets/styles/_mixins.scss" as *;
.order {
  @include flexbox($display: flex, $direction: column);
  gap: 30px;
  &__title {
    text-align: center;
    @include text-style(
      $font-family: Comfortaa,
      $weight: 700,
      $size: 30px,
      $line-height: 100%,
      $letter-spacing: 0%
    );
  }
  &__text {
    text-align: center;
    @include text-style(
      $font-family: Montserrat,
      $weight: 400,
      $size: 16px,
      $line-height: 134%,
      $letter-spacing: 2.5%
    );
  }
  &__form {
    @include flexbox($display: flex, $direction: column);
    gap: 20px;
  }
  &__buttons {
    @include flexbox(
      $display: flex,
      $direction: column,
      $justifyContent: center,
      $alignItems: center
    );
    gap: 10px;
  }
  &__buttons-text {
    text-transform: uppercase;
    @include text-style(
      $font-family: Comfortaa,
      $weight: 700,
      $size: 20px,
      $line-height: 134%,
      $letter-spacing: 2.5%
    );
  }
}
</style>
