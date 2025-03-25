<template>
  <header class="header">
    <div class="header__logo-nav">
      <div class="header__logo">
        <img :src="logo" />
      </div>
      <div class="header__nav-lang">
        <nav class="nav">
          <a class="nav__item">Nutrition programs</a>
          <a class="nav__item">Business lunch</a>
          <a class="nav__item">Gastro Shop</a>
          <a class="nav__item">About us</a>
          <a class="nav__item">Blog</a>
        </nav>

        <div class="header__lang-btns">
          <my-button type="secondary" size="small" state="active">EN</my-button>
          <my-button type="secondary" size="small" state="inactive"
            >UA</my-button
          >
        </div>
      </div>
    </div>
    <my-button type="primary" size="medium">+38 (068) 949 - 49 -19</my-button>
  </header>
</template>

<script setup>
import logo from "../assets/icons/logo.svg";
</script>

<style>
.header {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 217px;
}

.header__logo-nav {
  display: flex;
  align-items: center;
  gap: 40px;
}

.header__logo {
  position: absolute;
  top: -47px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 264px;
  height: 264px;
  border-radius: 50%;
  background: #f5faff;
  box-shadow: var(--shadow);
}

.header__nav-lang {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 304px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.nav {
  display: flex;
  align-items: center;
  gap: 40px;
  padding: 0 40px;
  height: 52px;
  box-shadow: var(--shadow);
  border-radius: 190px;
}

.nav__item {
  font-size: 16px;
  color: #333;
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav__item:hover {
  color: #64d370;
}

.header__lang-btns {
  display: flex;
  gap: 20px;
}
</style>
