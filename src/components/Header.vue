<template>
  <header class="header">
    <div class="header__desktop-logo">
      <img :src="logo" />
    </div>

    <div class="header__mobile-top">
      <div class="header__logo">
        <img :src="logo" />
      </div>
      <button class="burger" :class="{ open: menuOpen }" @click="toggleMenu" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <div class="header__logo-nav" :class="{ open: menuOpen }">
      <div class="header__nav-lang">
        <nav class="nav">
          <router-link class="nav__item" to="/">Nutrition programs</router-link>
          <router-link class="nav__item" to="/business-lunch">Business lunch</router-link>
          <router-link class="nav__item" to="/shop">Gastro Shop</router-link>
          <router-link class="nav__item" to="/about">About us</router-link>
          <router-link class="nav__item" to="/blog">Blog</router-link>
        </nav>

        <div class="header__lang-btns">
          <my-button type="secondary" size="small" state="active">EN</my-button>
          <my-button type="secondary" size="small" state="inactive">UA</my-button>
        </div>

        <div class="header__phone-mobile">
          <my-button type="primary" size="medium" state="inactive-secondary">+38 (068) 949 - 49 -19</my-button>
        </div>
      </div>
    </div>

    <div class="header__phone-desktop">
      <my-button type="primary" size="medium" state="inactive-secondary">+38 (068) 949 - 49 -19</my-button>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import logo from "../assets/icons/logo.svg"

const menuOpen = ref(false)
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}
</script>

<style lang="scss">
@use "@/assets/styles/_mixins.scss" as *;

.header {
  max-width: 1550px;
  margin: 0 auto;
  position: relative;
  padding: 0 20px;
  height: 217px;
  @include flexbox($display: flex, $justifyContent: space-between, $alignItems: center);

  @media (max-width: 1024px) {
    flex-direction: column;
    height: auto;
    padding: 20px;
  }

  &__desktop-logo {
    display: block;
    position: absolute;
    top: -47px;
    @include flexbox($display: flex, $justifyContent: center, $alignItems: center);
    box-sizing: border-box;
    width: 264px;
    height: 264px;
    border-radius: 50%;
    background: var(--background-block);
    box-shadow: var(--shadow);

    img {
      width: auto;
      height: 120px;

      @media (max-width: 1024px) {
        height: 70px;
      }
    }

    @media (max-width: 1024px) {
      display: none;
    }
  }

  &__mobile-top {
    display: none;

    @media (max-width: 1024px) {
      width: 100%;
      @include flexbox($display: flex, $justifyContent: space-between, $alignItems: center);

      img {
        width: auto;
        height: 120px;

        @media (max-width: 1024px) {
          height: 70px;
        }
      }
    }
  }

  &__logo-nav {
    @include flexbox($display: flex, $alignItems: center);
    gap: 40px;

    @media (max-width: 1024px) {
      display: none;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
      background: transparent;
      padding: 0;
      margin-top: 0;
      box-shadow: none;
      border-radius: 0;
      transition: all 0.3s ease;

      &.open {
        display: flex;
        background: var(--white);
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        border-radius: 12px;
        padding: 20px;
        margin-top: 20px;
        animation: fadeInDown 0.3s ease forwards;
        z-index: 10;
      }
    }

    &__logo {
      position: absolute;
      top: -47px;
      @include flexbox($display: flex, $justifyContent: center, $alignItems: center);
      box-sizing: border-box;
      width: 264px;
      height: 264px;
      border-radius: 50%;
      background: var(--background-block);
      box-shadow: var(--shadow);

      @media (max-width: 1024px) {
        position: static;
        width: 120px;
        height: 120px;
        border-radius: 50%;
        box-shadow: none;
        background: transparent;
      }

      img {
        width: auto;
        height: 120px;

        @media (max-width: 1024px) {
          height: 70px;
        }
      }
    }
  }
}

.burger {
  display: none;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 24px;
    height: 18px;
    background: none;
    border: none;
    cursor: pointer;
    position: relative;
    z-index: 20;

    span {
      height: 2px;
      width: 100%;
      background: #000;
      border-radius: 1px;
      transition: all 0.3s ease;
      transform-origin: center;
    }

    &.open span:nth-child(1) {
      transform: rotate(45deg) translate(4px, 4px);
    }

    &.open span:nth-child(2) {
      opacity: 0;
    }

    &.open span:nth-child(3) {
      transform: rotate(-45deg) translate(5px, -5px);
    }
  }
}

.header__nav-lang {
  position: absolute;
  top: 50%;
  left: 304px;
  transform: translateY(-50%);
  @include flexbox($display: flex, $direction: column);
  gap: 20px;

  @media (max-width: 1024px) {
    position: static;
    transform: none;
    gap: 20px;
  }
}

.nav {
  @include flexbox($display: flex, $alignItems: center);
  gap: 40px;
  padding: 0 40px;
  height: 52px;
  box-shadow: var(--shadow);
  border-radius: 190px;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
    padding: 0;
    gap: 20px;
    box-shadow: none;
  }

  &__item {
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      cursor: pointer;
      color: var(--primary);
    }

    &+.router-link-exact-active {
      position: relative;
      font-weight: 600;
      color: var(--primary);

      &::after {
        content: '';
        position: absolute;
        bottom: -6px;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: var(--primary);
      }
    }
  }
}

.header__lang-btns {
  display: flex;
  gap: 20px;

  @media (max-width: 1024px) {
    gap: 10px;
  }
}

.header__phone-desktop {
  @media (max-width: 1024px) {
    display: none;
  }
}

.header__phone-mobile {
  display: none;

  @media (max-width: 1024px) {
    display: block;
    margin-top: 20px;
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
