<script setup>
import MyHeader from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import Programs from "./components/Programs.vue";
import Photos from "./components/Photos.vue";
import OrderFAQ from "./components/OrderFAQ.vue";
import Footer from './components/Footer.vue';
</script>

<template>
  <MyHeader />
  <main>
    <Hero />
    <Programs />
    <Photos/>
    <OrderFAQ/>
  </main>
<Footer/>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Average+Sans&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap");

main {
  width: 100%;
  display: flex;
  flex-direction: column;
}
section {
  margin: 0 auto;
  max-width: 1286px;
}
</style>
