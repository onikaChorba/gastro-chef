<template>
  <section class="order-faq">
    <div class="order-faq__order order">
      <h3 class="order__title">Place an order</h3>
      <p class="order__text">
        Discuss all the details of the order by phone or specify all the details
        online yourself
      </p>
      <form class="order__form">
        <MyInput v-model="inputValue" label="Name" placeholder="Ivan Ivanov" />
        <MyInput v-model="inputValue" label="Phone" placeholder="+380907668343" />
        <MyCheckbox v-model="isChecked1">Test day! Get a -30% discount?</MyCheckbox>
        <MyCheckbox v-model="isChecked2">
          I agree with <a href="#"><span> of cooperation</span></a>
        </MyCheckbox>
      </form>
      <div class="order__buttons">
        <my-button type="grey" size="medium" state="inactive-secondary">
          Order by phone
        </my-button>
        <p class="order__buttons-text">or</p>
        <my-button type="primary" size="medium">Online order</my-button>
      </div>
    </div>
    <div class="order-faq__questions questions">
      <h2 class="questions__title">Frequently asked questions</h2>
      <ul class="questions__list">
        <MyList v-for="(item, index) in faqItems" :key="index" :item="item" />
      </ul>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";

const inputValue = ref("");
const isChecked1 = ref(true);
const isChecked2 = ref(false);

const faqItems = ref([
  {
    question: "How is healthy food delivery carried out?",
    answer: "Delivery is made daily from 8:00 AM to 12:00 PM by a courier.",
    open: false
  },
  {
    question: "Can I change the delivery time/location?",
    answer: "Yes, changes can be made one day before delivery.",
    open: false
  },
  {
    question: "How and in what is the food delivered?",
    answer: "The food is delivered in special containers that maintain freshness.",
    open: false
  },
  {
    question: "When do you cook?",
    answer: "We cook daily at night to ensure the food is fresh.",
    open: false
  },
  {
    question: "What products do you use?",
    answer: "Only fresh and high-quality products without preservatives.",
    open: false
  }
]);

const toggleAnswer = (index) => {
  faqItems.value[index].open = !faqItems.value[index].open;
};

</script>

<style lang="scss" scoped>
@use "@/assets/styles/_mixins.scss" as *;
.order-faq{
    @include flexbox($display: flex, $justifyContent: space-between);
    gap: 20px;

    &__order, 
    &__questions{
      width: 50%;
    }
}
.order {
  width: 50%;
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
.questions{
  width: 100%;
}
</style>
