<template>
  <section class="blog">
    <div class="pagination">
      <button class="arrow-btn left" @click="prevPage" :disabled="currentPage === 1">
        <img :src="arrow" alt="arrow left" class="icon left" />
      </button>

      <button v-for="n in totalPages" :key="'bottom' + n" class="page-btn" :class="{ active: n === currentPage }"
        @click="currentPage = n">
        {{ n }}
      </button>

      <button class="arrow-btn" @click="nextPage" :disabled="currentPage === totalPages">
        <img :src="arrow" alt="arrow right" class="icon" />
      </button>
    </div>

    <div class="blog-grid">
      <div v-for="(post, index) in posts" :key="index" class="card">
        <img :src="post.img" alt="Post image" class="card-img" />
        <h3 class="card-title">{{ post.title }}</h3>
        <div class="card-footer">
          <span class="date">{{ post.date }}</span>
          <button class="more-btn">Детальніше <img :src="arrow" alt="arrow" class="icon" /></button>
        </div>
      </div>
    </div>

    <div class="pagination">
      <button class="arrow-btn left" @click="prevPage" :disabled="currentPage === 1">
        <img :src="arrow" alt="arrow left" class="icon left" />
      </button>

      <button v-for="n in totalPages" :key="'bottom' + n" class="page-btn" :class="{ active: n === currentPage }"
        @click="currentPage = n">
        {{ n }}
      </button>

      <button class="arrow-btn" @click="nextPage" :disabled="currentPage === totalPages">
        <img :src="arrow" alt="arrow right" class="icon" />
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import img1 from '../assets/imgs/blog-img1.jpg';
import img2 from '../assets/imgs/blog-img2.jpg';
import img3 from '../assets/imgs/blog-img3.jpg';
import arrow from '../assets/icons/arrow.svg';

const posts = [
  {
    img: img1,
    title: "How to change your eating habits?",
    date: "29.05.2020",
  },
  {
    img: img2,
    title: "How to change your eating habits?",
    date: "29.05.2020",
  },
  {
    img: img3,
    title: "How to change your eating habits?",
    date: "29.05.2020",
  },
  {
    img: img1,
    title: "How to change your eating habits?",
    date: "29.05.2020",
  },
  {
    img: img2,
    title: "How to change your eating habits?",
    date: "29.05.2020",
  },
  {
    img: img3,
    title: "How to change your eating habits?",
    date: "29.05.2020",
  },
];

const currentPage = ref(1);
const totalPages = 3;

const nextPage = () => {
  if (currentPage.value < totalPages) currentPage.value++;
};

const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--;
};
</script>

<style scoped lang="scss">
@use "@/assets/styles/_mixins.scss" as *;

.blog {
  width: 100%;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: "Comfortaa", sans-serif;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 32px;
  margin: 40px 0;
}

.card {
  overflow: hidden;
  border-radius: 18px;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-4px);
  }
}

.card-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 18px;
  box-shadow: 0px 0px 20px 0px rgba(86, 86, 86, 0.5);
}

.card-title {
  @include text-style($font-family: Comfortaa,
    $weight: 700,
    $size: 16px,
    $line-height: 100%,
    $letter-spacing: 0%,
    $color: var(--black));
  margin: 20px;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.date {
  @include text-style($font-family: Montserrat,
    $weight: 500,
    $size: 14px,
    $line-height: 134%,
    $letter-spacing: 2.5%,
    $color: var(--grey));
  margin-left: 20px;
}

.more-btn {
  @include text-style($font-family: Montserrat,
    $weight: 500,
    $size: 14px,
    $line-height: 134%,
    $letter-spacing: 2.5%,
    $color: var(--primary));
  border: 1.5px solid var(--primary);
  background: none;
  transition: all 0.3s;
  border-radius: 190px;
  padding: 8px 20px;

  &:hover {
    background: var(--primary);
    color: var(--white);
  }
}

.icon {
  width: 10px;
  height: 10px;
}

.pagination {
  display: flex;
  gap: 12px;
  padding-left: 20px;
}

.page-btn {
  border: none;
  background: rgba(222, 230, 238, 1);
  border-radius: 50%;
  width: 30px;
  height: 30px;
  @include text-style($font-family: Montserrat,
    $weight: 500,
    $size: 14px,
    $line-height: 100%,
    $letter-spacing: 2.5%,
    $color: var(--black));
  transition: 0.3s;

  &:hover {
    background: var(--primary);
    border-color: var(--primary);
    color: white;
  }
}

.arrow-btn {
  width: 30px;
  height: 30px;
  border: none;
  background: rgba(222, 230, 238, 1);
  border-radius: 50%;
  cursor: pointer;

  .icon {
    width: 10px;
    height: 10px;
  }

  &.left .icon {
    transform: rotateY(180deg);
  }

  &.right .icon {
    transform: none;
  }
}

.page-btn.active {
  background: var(--primary);
  color: white;
}
</style>
