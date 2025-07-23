<template>
  <div class="layout">
    <Header />
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup>
import Header from './Header.vue'
</script>


<style lang="scss">
.layout {
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-image: url('../assets/icons/bg.svg');
  background-repeat: no-repeat;
  background-position: right top;
  background-size: auto;
}
</style>