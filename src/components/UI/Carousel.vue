<template>
    <Carousel v-bind="carouselConfig">
      <Slide v-for="slide in slides" :key="slide.src">
        <img :src="slide.src" :alt="slide.alt" />
      </Slide>

      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
</template>
<script setup>
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import 'vue3-carousel/carousel.css';

defineProps(
  {
    slides: Array,
    carouselConfig: Object
  }
)
</script>
<style>
.carousel {
  --vc-nav-border-radius: 100%;
}

img {
  width: 100%;
  height: 100%;
  border-radius: 30px;
  object-fit: cover;
}
</style>
