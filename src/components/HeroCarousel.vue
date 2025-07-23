<template>
  <Swiper
    :modules="[Navigation, Autoplay]"
    :pagination="{ clickable: true }"
    :autoplay="{ delay: 5000, disableOnInteraction: false }"
    loop
    class="mySwiper"
  >
    <SwiperSlide v-for="(item, index) in slides" :key="index">
      <div class="slide-content">
        <div class="info">
          <h3 class="title">{{ item.title1 }} <span>{{item.span}} </span> {{item.title2}}</h3>
          <p class="text">{{ item.description }}</p>

          <div class="btns">
            <MyButton>{{ item.textButton }}</MyButton><button class="btn"><p>{{ item.extraText }}</p><span>{{item.discount}}</span></button>
          </div>
        </div>
        <div class="image-wrapper">
          <img :src="item.image" alt="food" class="image"/>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation } from 'swiper/modules';
import slideImg1 from '../assets/imgs/slide-img1.jpg';
import slideImg2 from '../assets/imgs/slide-img2.jpg';
import slideImg3 from '../assets/imgs/slide-img3.jpg';
import slideImg4 from '../assets/imgs/slide-img4.jpg';
import 'swiper/swiper-bundle.css';

const slides = [
  {
    image: slideImg1,
    title1: "Nutrition service.",
    span: "Lose weight fast!",
    textButton: "Order",
    extraText: "Trial day",
    discount: 30
  },
  {
    image: slideImg2,
    title1: "Trust the professionals.",
    span: "I am Kirill Kobylinsky - the founder.",
    textButton: "My Instagram",
    extraText: "Always open for clients",
    description: 'Master of Sports of Ukraine in weightlifting. Higher education from the Institute of Physical Education.',
  },
  {
    image: slideImg3,
    title1: "Keto Diet -  ",
    span: "Delicious and Extreme Fast",
    title2: "Weight Loss",
    textButton: "Order",
    extraText: "Trial day",
    discount: "from 490 UAH"
  },
  {
    image: slideImg4,
    title1: "Detox program –  ",
    span: "delicious body",
    title2: "cleansing",
    textButton: "Order",
    extraText: "Trial day total:",
    discount:'from 427 UAH'
  },
];
</script>

<style scoped lang="scss">
@use "@/assets/styles/_mixins.scss" as *;

.mySwiper {
  width: 100%;
  height: calc(100vh - 317px);
  height: 100%;
  margin-bottom: 80px;
}

.slide-content {
  width: 100%;
  @include flexbox(
    $display: flex,
    $alignItems: center,
    $justifyContent: space-between
  );
}

.info{
  @include flexbox(
    $display: flex,
    $direction: column,
    $alignItems: center,
    $justifyContent: center
  );
  gap: 15px;
  margin-left: 120px;
  max-width: 677px;
  flex: 1;
}

.title{
  text-align: left;
  @include text-style($font-family: Comfortaa,
  $weight: 700,
  $size: 40px,
  $line-height: 100%,
  $letter-spacing: 2.5%,
  $color: var(--black));
  text-align: left;
}

.span{
  color: var(--primary);
}

.text{
  @include text-style($font-family: Montserrat,
  $weight: 400,
  $size: 20px,
  $line-height: 134%,
  $letter-spacing: 0%,
  $color: var(--black));
}

.image-wrapper {
  width: 700px;
  height: 700px;
  border-radius: 50%;
  padding: 20px;
  background: var(--white);
    @include flexbox(
    $display: flex,
    $direction: center,
    $alignItems: center,
    $justifyContent: center
  );
}

.image{
  border-radius: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
}

.btns{
 @include flexbox(
  $display: flex
 );
  gap: 30px;
  margin-top: 30px;
}

.btn{
  @include text-style($font-family: Montserrat,
  $weight: 400,
  $size: 20px,
  $line-height: 100%,
  $letter-spacing: 0%,
  $color: var(--black));
  border: none;
  background: none;
  @include flexbox(
  $display: flex,
  $direction: column,
  $alignItems: center,
  $justifyContent: center
 );
 gap: 3px;
}

@media (max-width: 1024px) {
  .slide-content {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }

  .info {
    margin-left: 0;
    text-align: center;
    max-width: 100%;
    padding: 0 20px;
  }

  .title {
    font-size: 30px;
  }

  .text {
    font-size: 16px;
  }

  .btns {
    flex-direction: column;
    gap: 20px;
  }

  .image-wrapper {
    width: 300px;
    height: 300px;
    padding: 10px;
  }
}

@media (max-width: 600px) {
  .title {
    font-size: 24px;
  }

  .text {
    font-size: 14px;
  }

  .btn {
    font-size: 16px;
  }
}

</style>
