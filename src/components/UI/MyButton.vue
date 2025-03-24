<template>
  <button :class="['button', buttonStyle]">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "my-button",
  props: {
    buttonStyle: {
      type: String,
      default: "primary",
    },
  },
};
</script>

<style scoped>
.button {
  box-sizing: border-box;
  box-shadow: var(--shadow);
  border-radius: 190px;
  border: none;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  text-transform: uppercase; /* Зробити текст великими літерами */
  letter-spacing: 0.5px; /* Легке збільшення відстані між літерами */
}

.button.primary {
  width: 222px;
  height: 32px;
  font-family: "Comfortaa", sans-serif;
  font-weight: 700;
  font-size: 26px;
  line-height: 134%;
  letter-spacing: 2.5%;
  color: var(--white);
  background-color: var(--primary);
}

.button.secondary {
  width: 280px;
  height: 52px;
  border-radius: 190px;
  box-shadow: var(--shadow);
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: 0%;
  color: var(--primary);
}

.button.small {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: var(--white);
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 100%;
  letter-spacing: 2.5%;
}

.button.small.active {
  background-color: var(--primary);
  color: var(--white);
}
</style>
