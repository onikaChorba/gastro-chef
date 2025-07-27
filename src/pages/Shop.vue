<template>
  <div class="shop-cards">
    <div v-for="(category, index) in categories" :key="index" class="card" :class="{ 'soon': !category.link }"
      @click="category.link && goToCategory(category)" :style="{ cursor: category.link ? 'pointer' : 'default' }">
      <img :src="category.img" alt="Product image" class="card-image" />
      <div v-if="!category.link" class="soon-label">Soon!</div>

      <div class="card-content">
        <div class="card-title">{{ category.title }}</div>
        <button class="assort-btn" :disabled="!category.link">
          Assortment
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import img1 from '../assets/imgs/shop-img1.jpg';
import img2 from '../assets/imgs/shop-img2.png';

const categories = [
  {
    img: img1,
    title: 'Healthy Candies',
    link: '/shop/healthy-candies',
  },
  {
    img: img2,
    title: 'Granola',
  }
];

import { useRouter } from 'vue-router';
const router = useRouter();

const goToCategory = (category) => {
  if (category.link) {
    router.push(category.link);
  }
};

</script>

<style scoped lang="scss">
@use "@/assets/styles/_mixins.scss" as *;

.shop-cards {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
  padding: 0 20px;
}

.card {
  position: relative;
  width: 100%;
  max-width: 580px;
  flex: 1 1 300px;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: transform 0.3s ease;
  background: #fff;

  &:hover {
    transform: translateY(-5px);
  }
}

.card-image {
  width: 100%;
  height: 300px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 220px;
  }

  @media (max-width: 480px) {
    height: 180px;
  }
}

.soon-label {
  position: absolute;
  top: 0;
  right: 0;
  background: var(--primary);
  color: white;
  padding: 15px 25px;
  border-bottom-left-radius: 12px;
  @include text-style($font-family: Comfortaa,
    $weight: 700,
    $size: 25px,
    $line-height: 100%,
    $letter-spacing: 0%,
    $color: rgba(245, 250, 255, 1))
}

.card-content {
  padding: 15px 20px;
  @include flexbox($display: flex, $justifyContent: space-between, $alignItems: center);
  gap: 10px;
}

.card-title {
  @include text-style($font-family: Comfortaa,
    $weight: 700,
    $size: 20px,
    $line-height: 100%,
    $letter-spacing: 0%,
    $color: var(--black))
}

.assort-btn {
  height: 35px;
  border: 1.5px solid var(--primary);
  @include text-style($font-family: Comfortaa,
    $weight: 500,
    $size: 14px,
    $line-height: 134%,
    $letter-spacing: 2.5%,
    $color: var(--primary));
  padding: 8px 18px;
  background: none;
  border-radius: 190px;
  cursor: pointer;
  transition: 0.3s ease;

  &:disabled {
    border: 1.5px solid rgba(181, 194, 206, 1);
    color: rgba(181, 194, 206, 1);
    cursor: not-allowed;
  }
}
</style>
