<template>
  <section class="photos">
    <h2 class="photos__title">Photos of dishes</h2>
    <my-carousel :slides="photos" :carouselConfig="carouselConfig" class="photos__carousel" />
  </section>
</template>

<script setup>
import photo1 from "@/assets/imgs/5d01e25aba0925027306358421589e59.jpeg";
import photo2 from "@/assets/imgs/949efc6f26cbc0233c78e87fce3eabaa.jpeg";
import photo3 from "@/assets/imgs/c40612ba34c12763be88bcb6d347ca1e.jpeg";
import photo4 from "@/assets/imgs/cf04f69ceeb41095ca2fc23d2b7ae779.jpeg";
import photo5 from "@/assets/imgs/d2d7547130591b381abba7b5437b0c8e.jpeg";
import photo6 from "@/assets/imgs/e6adedec0d0f7ddf350c860b8f9ce590.jpeg";

const photos = [
  { src: photo1, alt: "photo1" },
  { src: photo2, alt: "photo2" },
  { src: photo3, alt: "photo3" },
  { src: photo4, alt: "photo4" },
  { src: photo5, alt: "photo5" },
  { src: photo6, alt: "photo6" },
];

const carouselConfig = {
  itemsToShow: 4.5,
  wrapAround: true,
  height: "100%",
  gap: 10,
  breakpoints: {
    1200: {
      itemsToShow: 3.5,
    },
    992: {
      itemsToShow: 2.5,
    },
    768: {
      itemsToShow: 1.5,
    },
    480: {
      itemsToShow: 1,
    },
  },
};
</script>

<style lang="scss" scoped>
@use '@/assets/styles/_mixins.scss' as *;

.photos {
  width: 100%;
  @include flexbox($display: flex, $direction: column, $alignItems: center);
  gap: 40px;

  &__title {
    @include text-style($font-family: Comfortaa,
      $weight: 700,
      $size: 30px,
      $line-height: 100%,
      $letter-spacing: 0%);
    color: var(--black);
    text-align: center;

    @media (max-width: 768px) {
      font-size: 24px;
    }

    @media (max-width: 480px) {
      font-size: 20px;
    }
  }

  &__carousel {
    width: 100%;
    height: 570px;

    @media (max-width: 1200px) {
      height: 500px;
    }

    @media (max-width: 992px) {
      height: 450px;
    }

    @media (max-width: 768px) {
      height: 400px;
    }

    @media (max-width: 480px) {
      height: 350px;
    }
  }
}
</style>
