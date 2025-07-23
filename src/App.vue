<script setup>
import Hero from "./components/Hero.vue";
import Programs from "./components/Programs.vue";
import Photos from "./components/Photos.vue";
import OrderFAQ from "./components/OrderFAQ.vue";
import Footer from './components/Footer.vue';
import Layout from "./components/Layout.vue";
</script>

<template>
  <Layout>
    <Hero />
    <Programs />
    <Photos />
    <OrderFAQ />
    <Footer />
  </Layout>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Average+Sans&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap");

main {
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 1550px;
  margin: 0 auto;
}
section {
  margin: 0 auto;
  max-width: 1286px;
}
</style>
