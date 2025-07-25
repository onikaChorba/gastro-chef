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

<style scoped lang="scss">
@use "@/assets/styles/_mixins.scss" as *;

.button {
  @include flexbox($display: flex, $justifyContent: center, $alignItems: center);
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

.button--grey {
  background-color: var(--grey);
  border: 1px solid var(--primary);
  color: var(--primary);
}

.button--active {
  background-color: var(--primary);
  color: var(--white);
  @include text-style($font-family: Montserrat,
    $weight: 400,
    $size: 15px,
    $line-height: 100%,
    $letter-spacing: 2.5%,
    $color: var(--white));
}

.button--inactive-secondary {
  background-color: var(--white);
  @include text-style($font-family: Montserrat,
    $weight: 700,
    $size: 20px,
    $line-height: 100%,
    $letter-spacing: 0%,
    $color: var(--primary));
}

.button--inactive {
  background-color: var(--white);

  @include text-style($font-family: Montserrat,
    $weight: 400,
    $size: 15px,
    $line-height: 100%,
    $letter-spacing: 2.5%,
    $color: var(--black));
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

.button--large--active {
  width: 580px;
  height: 62px;

  @include text-style($font-family: Comfortaa,
    $weight: 700,
    $size: 25px,
    $line-height: 100%,
    $letter-spacing: 0.5px,
    $color: var(--white));
}

.button--large--inactive {
  width: 580px;
  height: 62px;
  background: var(--grey);
  @include text-style($font-family: Comfortaa,
    $weight: 700,
    $size: 25px,
    $line-height: 100%,
    $letter-spacing: 0.5px,
    $color: var(--black));
}

@media (max-width: 580px) {
  .button--medium {
    width: 180px;
    height: 44px;
    font-size: 14px;
  }

  .button--large {
    width: 240px;
    height: 52px;
    font-size: 22px;
  }
}

@media (max-width: 768px) {

  .button--large--active,
  .button--large--inactive {
    width: 100%;
    max-width: 300px;
    height: 52px;

    @include text-style($font-family: Comfortaa,
      $weight: 700,
      $size: 18px,
      $line-height: 100%,
      $letter-spacing: 0.5px,
      $color: var(--black));
  }

  .button--medium {
    width: 100%;
    max-width: 240px;
    height: 44px;
    font-size: 16px;
  }

  .button--small {
    width: 30px;
    height: 30px;
    font-size: 12px;
  }
}
</style>
