<template>
  <div class="product-page">
    <div class="product-page-container">
      <div class="overlay"></div>
      <h2 class="title">Healthy Candies</h2>
      <p class="description">
        We present a sweet collection of healthy candies. Created with love and made from natural products without added
        sugar - with care for you and your loved ones!
        <br /><br />
        Delivery cost is 60 UAH for pre-order (per 1 package). <br />
        Recalculation order - pre-agreed for the next day from 6:00 to 10:00.
        <br />
        Minimum order: 4 pcs. Weight of 1 candy: 25 g.<br />
        Orders for tomorrow are accepted until 11:00 of the current day. <br /><br />
        Sweets are delivered in portioned bags with a sticker. You can order a gift box separately (costing 20 UAH).
      </p>
    </div>
    <div class="container">

      <div class="buttons">
        <button class="back-btn"><img :src="arrow" alt="Back arrow" class="back-btn-icon" /> Back</button>
        <MyButton>Order</MyButton>
      </div>

      <div class="product-grid">
        <div class="product-card" v-for="n in 5" :key="n">
          <img :src="img" alt="Healthy Candy" class="product-image" />
          <div class="product-info">
            <h3 class="product-name">Ginger Candies with Orange</h3>
            <p class="product-description">
              Ingredients: Lightly dried almonds, honey dates, grated ginger, orange, almond flakes. <br />
              Contains no added sugar!
            </p>
            <div class="product-macros">
              <span>Proteins: 8g</span>
              <span>Fats: 20g</span>
              <span>Carbs: 36g</span>
              <span>346 kcal</span>
            </div>
            <div class="product-bottom">
              <div class="quantity">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
              <div class="price">26 UAH / pc</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import img from '../assets/imgs/sweet1.jpg';
import arrow from '../assets/icons/arrow.svg';
</script>

<style scoped lang="scss">
@use "@/assets/styles/_mixins.scss" as *;

.product-page {
  padding: 40px 20px;
}

.product-page-container {
  position: relative;
  background-image: url("../assets/imgs/sweet1.jpg");
  text-align: center;
  margin-bottom: 40px;
  background-size: cover;
  background-position: center;
  background-repeat: repeat;
  text-align: center;
  @include flexbox($display: flex, $alignItems: center, $direction: column, $justifyContent: center);
  min-height: 400px;
  height: fit-content;
}

.overlay {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: #020202b3;
}

.title {
  z-index: 1;
  @include text-style($font-family: Comfortaa,
    $weight: 700,
    $size: 25px,
    $line-height: 134%,
    $letter-spacing: 2.5%,
    $color: var(--white));
  margin-bottom: 20px;
}

.description {
  z-index: 1;
  @include text-style($font-family: Comfortaa,
    $weight: 400,
    $size: 18px,
    $line-height: 134%,
    $letter-spacing: 2.5%,
    $color: var(--white));
  max-width: 980px;
  margin: 0 auto;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1550px;
  margin: 0 auto;
}

.product-grid {
  max-width: 1550px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  gap: 30px;
  margin-bottom: 50px;
}

.product-card {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: 0.3s ease;
  border-radius: 30px;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-image {
  width: 100%;
  height: 288px;
  border-radius: 30px;
  box-shadow: var(--shadow);
  object-fit: cover;
}

.product-info {
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.product-name {
  @include text-style($font-family: Comfortaa,
    $weight: 700,
    $size: 18px,
    $line-height: 100%,
    $letter-spacing: 0%,
    $color: var(--black));
}

.product-description {
  @include text-style($font-family: Comfortaa,
    $weight: 500,
    $size: 14px,
    $line-height: 134%,
    $letter-spacing: 2.5%,
    $color: var(--black));
}

.product-macros {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  @include text-style($font-family: Comfortaa,
    $weight: 700,
    $size: 18px,
    $line-height: 100%,
    $letter-spacing: 0%,
    $color: var(--black));

  span {
    font-weight: 700;
    color: var(--black);
  }
}

.product-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
}

.quantity {
  display: flex;
  align-items: center;
  gap: 10px;
  @include text-style($font-family: Montserrat,
    $weight: 700,
    $size: 20px,
    $line-height: 100%,
    $letter-spacing: 2.5%,
    $color: var(--primary));
}

.quantity button {
  background: var(--grey);
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  cursor: pointer;
  font-weight: bold;
}

.price {
  @include text-style($font-family: Montserrat,
    $weight: 700,
    $size: 20px,
    $line-height: 100%,
    $letter-spacing: 0%,
    $color: var(--primary));
}

.buttons {
  width: 100%;
  @include flexbox($display: flex, $justifyContent: space-between, $alignItems: center);
  margin-bottom: 40px;
}

.back-btn {
  @include text-style($font-family: Comfortaa,
    $weight: 700,
    $size: 18px,
    $line-height: 100%,
    $letter-spacing: 0%,
    $color: var(--black));
  border: none;
  background: none;
  @include flexbox($display: flex, $justifyContent: center, $alignItems: center);
  gap: 10px;

  img {
    width: 20px;
    height: 20px;
    background: var(--grey);
    padding: 5px;
    transform: scaleX(-1);
  }
}

@media (max-width: 1200px) {
  .product-grid {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
  }
}

@media (max-width: 768px) {
  .product-grid {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  .product-page-container {
    height: auto;
    padding: 40px 20px;
  }

  .title {
    font-size: 22px;
  }

  .description {
    font-size: 16px;
    max-width: 100%;
  }

  .buttons {
    flex-direction: column;
    gap: 15px;
  }
}

@media (max-width: 480px) {
  .product-info {
    padding: 20px 15px;
    gap: 15px;
  }

  .product-name {
    font-size: 16px;
  }

  .product-description {
    font-size: 13px;
  }

  .price {
    font-size: 18px;
  }

  .quantity button {
    width: 22px;
    height: 22px;
  }

  .back-btn img {
    width: 16px;
    height: 16px;
    padding: 3px;
  }
}
</style>
