<template>
  <div class="layout">
    <Header />
    <main>
      <slot />
    </main>

    <div class="chat-wrapper">
      <div class="chat-btn">
        <img :src="chat" alt="chat" class="icon" />
        <p>1</p>
        <div class="chat-description">
          We are online! Consultation and -30% in chat. No call!
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from './Header.vue';
import chat from '../assets/icons/chat.svg';
</script>

<style lang="scss">
@use "@/assets/styles/_mixins.scss" as *;

.layout {
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-image: url('../assets/icons/bg.svg');
  background-repeat: no-repeat;
  background-position: right top;
  background-size: auto;
}

.chat-wrapper {
  position: relative;
}

.chat-btn {
  cursor: pointer;
  position: fixed;
  bottom: 80px;
  right: 80px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: var(--white);
  box-shadow: var(--shadow);
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  z-index: 10;

  p {
    @include flexbox($display: flex, $justifyContent: center, $alignItems: center);
    position: absolute;
    top: -10px;
    right: 0px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: var(--black);

    @include text-style(
      $font-family: Comfortaa,
      $weight: 700,
      $size: 12px,
      $line-height: 134%,
      $letter-spacing: 0%,
      $color: var(--white)
    );

    text-align: center;
  }

  .chat-description {
    display: none;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, 10px);
    background: white;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    white-space: nowrap;
    z-index: 1;
  }

  &:hover .chat-description {
    display: block;
  }
}

.icon {
  width: 37px;
  height: 37px;
}
</style>
