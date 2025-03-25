<template>
  <button :class="buttonClasses">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "MyButton",
  props: {
    type: {
      type: String,
      default: "primary",
    },
    size: {
      type: String,
      default: "medium",
    },
    state: {
      type: String,
      default: "",
    },
  },
  computed: {
    buttonClasses() {
      return [
        "button",
        `button--${this.type}`,
        `button--${this.size}`,
        this.state && `button--${this.state}`,
      ];
    },
  },
};
</script>

<style scoped>
.button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 190px;
  box-shadow: var(--shadow);
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.button--primary {
  background-color: var(--primary);
  color: var(--white);
}

.button--secondary {
  background-color: var(--grey);
  color: #333;
}

.button--active {
  background-color: var(--primary);
  color: var(--white);
  font-family: Montserrat;
  font-weight: 400;
  font-size: 15px;
  line-height: 100%;
  letter-spacing: 2.5%;
}

.button--inactive {
  color: var(--black);
  background-color: var(--white);
  font-family: Montserrat;
  font-weight: 400;
  font-size: 15px;
  line-height: 100%;
  letter-spacing: 2.5%;
}

.button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.button--small {
  width: 35px;
  height: 35px;
  font-size: 14px;
  border-radius: 50%;
}

.button--medium {
  width: 280px;
  height: 52px;
  font-size: 20px;
  line-height: 24px;
}

.button--large {
  width: 580px;
  height: 62px;
  font-size: 25px;
  font-family: "Comfortaa", sans-serif;
  font-weight: 700;
  text-align: center;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

@media (max-width: 580px) {
  .button--medium {
    width: 180px;
    height: 44px;
    font-size: 18px;
  }

  .button--large {
    width: 240px;
    height: 52px;
    font-size: 22px;
  }
}
</style>
