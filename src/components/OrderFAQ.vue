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
    answer: "Delivery is carried out daily from 8:00 AM to 12:00 PM by a courier.",
    open: false
  },
  {
    question: "Can I change the delivery time/location?",
    answer: "Yes, changes can be made one day before delivery.",
    open: false
  },
  {
    question: "How is the food delivered and in what packaging?",
    answer: "The food is delivered in special containers that keep it fresh.",
    open: false
  },
  {
    question: "When do you prepare the meals?",
    answer: "We cook every night to ensure the food is fresh.",
    open: false
  },
  {
    question: "What kind of products do you use?",
    answer: "Only fresh and high-quality ingredients without preservatives.",
    open: false
  },
  {
    question: "Will I be eating the same food every day?",
    answer: "No, we offer a varied menu to ensure a balanced diet.",
    open: false
  },
  {
    question: "I have allergies and food intolerances. Can you accommodate that?",
    answer: "Yes, let us know in advance, and we will customize your meals accordingly.",
    open: false
  },
  {
    question: "In what order should I eat the meals?",
    answer: "We recommend eating meals in the order provided to maintain a balanced diet.",
    open: false
  },
  {
    question: "Can I pause my meal plan?",
    answer: "Yes, you can freeze your program by notifying us in advance.",
    open: false
  }
]);

</script>

<style lang="scss" scoped>
@use "@/assets/styles/_mixins.scss" as *;

.order-faq {
  @include flexbox($display: flex, $justifyContent: space-between);
  gap: 20px;
  padding: 40px 0;

  &__order,
  &__questions {
    width: 50%;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 40px;

    &__order,
    &__questions {
      width: 100%;
    }
  }
}

.order {
  @include flexbox($display: flex, $direction: column);
  gap: 30px;
  padding: 0px 20px;

  &__title {
    text-align: center;
    @include text-style($font-family: Comfortaa,
      $weight: 700,
      $size: 30px,
      $line-height: 100%,
      $letter-spacing: 0%);
  }

  &__text {
    text-align: center;
    @include text-style($font-family: Montserrat,
      $weight: 400,
      $size: 16px,
      $line-height: 134%,
      $letter-spacing: 2.5%);
  }

  &__form {
    @include flexbox($display: flex, $direction: column);
    gap: 20px;
  }

  &__buttons {
    @include flexbox($display: flex,
      $direction: column,
      $justifyContent: center,
      $alignItems: center);
    gap: 10px;

    @media (min-width: 768px) {
      flex-direction: row;
      gap: 20px;

      .order__buttons-text {
        order: 2;
        margin: 0 10px;
      }

      my-button:first-of-type {
        order: 1;
      }

      my-button:last-of-type {
        order: 3;
      }
    }
  }

  &__buttons-text {
    text-transform: uppercase;
    @include text-style($font-family: Comfortaa,
      $weight: 700,
      $size: 20px,
      $line-height: 134%,
      $letter-spacing: 2.5%);
  }
}

.questions {
  width: 100%;

  &__title {
    text-align: center;
    padding-bottom: 30px;
    @include text-style($font-family: Comfortaa,
      $weight: 700,
      $size: 25px,
      $line-height: 100%,
      $letter-spacing: 0%);
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0px 20px;
  }
}
</style>
