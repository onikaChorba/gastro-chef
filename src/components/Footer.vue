<template>
  <div class="footer-wrapper">
    <span class="ellips-1"></span>
    <span class="ellips-2"></span>
    <span class="ellips-3"></span>
    <footer class="footer">
      <section class="footer-content">
        <ul class="footer-content__links">
          <li><a href="#Nutrition programs"> Nutrition programs</a></li>
          <li><a href="#About us">About us</a></li>
          <li><a href="#Business lunches">Business lunches</a></li>
          <li><a href="#Gastro Shop">Gastro Shop</a></li>
          <li><a href="#Blog">Blog</a></li>
        </ul>

        <div class="footer-content__logo">
          <img :src="logo" />
          <p>healthy food service</p>
        </div>

        <ul class="footer-content__links">
          <li>Terms of cooperation</li>
          <li>FAQ</li>
          <li class="footer-content__link">
            <img :src="insta" alt="insta" />
            <img :src="fb" alt="fb" />
            <img :src="viber" alt="viber" />
            <img :src="telegram" alt="telegram" />
          </li>
          <li><span>+38 (068) 949 - 49 - 19</span></li>
        </ul>
      </section>
    </footer>
  </div>
</template>

<script setup>
import logo from '@/assets/icons/logo.svg';
import insta from '@/assets/icons/insta.svg';
import fb from '@/assets/icons/fb.svg';
import viber from '@/assets/icons/viber.svg';
import telegram from '@/assets/icons/telegram.svg';
</script>

<style lang="scss">
@use '@/assets/styles/_mixins.scss' as *;

.footer-wrapper {
  position: relative;
}

.footer {
  position: relative;
  z-index: 2;
  width: 100%;
  box-shadow: var(--shadow);
  padding: 20px;
  background: var(--background-block);
}

.ellips-1 {
  display: block;
  position: absolute;
  top: -100px;
  left: -60px;
  z-index: 0;
  width: 520px;
  height: 520px;
  border-radius: 50%;
  border: 30px solid rgba(100, 211, 112, 0.5)
}

.ellips-2 {
  display: block;
  position: absolute;
  top: 50px;
  right: -60px;
  z-index: 0;
  width: 345px;
  height: 345px;
  border-radius: 50%;
  border: 30px solid rgba(100, 211, 112, 0.5)
}

.ellips-3 {
  display: block;
  position: absolute;
  top: -60px;
  right: 40%;
  z-index: 0;
  width: 345px;
  height: 345px;
  border-radius: 50%;
  border: 30px solid rgba(100, 211, 112, 0.5)
}

.footer-content {
  @include flexbox($display: flex, $justifyContent: space-between, $alignItems: flex-start);
  gap: 40px;

  &__links {
    @include flexbox($display: flex, $direction: column, $alignItems: flex-start);
    gap: 20px;
    list-style: none;
    padding: 0;
    margin: 0;

    @include text-style($font-family: Comfortaa,
      $weight: 700,
      $size: 20px,
      $line-height: 100%,
      $letter-spacing: 0%,
    );
  }

  &__link {
    @include flexbox($display: flex, $wrap: wrap, $alignItems: center);
    gap: 10px;

    img {
      width: 30px;
      height: 30px;
    }
  }

  &__logo {
    @include flexbox($display: flex, $direction: column, $alignItems: center);
    text-align: center;
    gap: 10px;

    @include text-style($font-family: Comfortaa,
      $weight: 400,
      $size: 20px,
      $line-height: 116%,
      $letter-spacing: 0%,
    );
  }
}

@media (max-width: 1024px) {
  .footer-content {
    @include flexbox($direction: column, $alignItems: center);
    gap: 30px;

    &__links {
      align-items: center;
      text-align: center;
    }
  }
}

@media (max-width: 600px) {
  .footer-content {
    gap: 20px;

    &__logo p {
      font-size: 16px;
    }

    &__links {
      gap: 15px;

      li {
        font-size: 16px;
      }
    }

    &__link {
      justify-content: center;

      img {
        width: 24px;
        height: 24px;
      }
    }
  }
}
</style>