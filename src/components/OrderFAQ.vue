<template>
  <section class="order-faq">
    <div class="order-faq_order order">
      <h3>Place an order</h3>
      <p>
        Discuss all the details of the order by phone or specify all the details
        online yourself
      </p>
      <form>
        <MyInput v-model="inputValue" label="Ім'я" placeholder="Введіть ім'я" />
      </form>
    </div>
    <div class="order-faq_questions questions"></div>
  </section>
</template>
<script setup>
import { ref } from 'vue';
import MyInput from './UI/MyInput.vue';

const inputValue = ref('');
</script>



