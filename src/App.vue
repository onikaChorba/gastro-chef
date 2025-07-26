<script setup>
import Footer from './components/Footer.vue';
import Layout from "./components/Layout.vue";
</script>

<template>
  <Layout>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
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
  max-width: 1550px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
