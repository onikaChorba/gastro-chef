<template>
  <div class="custom-checkbox" @click="toggle">
    <span :class="['checkbox-circle', { active: modelValue }]"></span>
    <label>
      <slot></slot>
    </label>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  modelValue: Boolean,
});

const emit = defineEmits(["update:modelValue"]);

const toggle = () => {
  emit("update:modelValue", !props.modelValue);
};
</script>

<style lang="scss" scoped>
@use '@/assets/styles/_mixins.scss' as *;

.custom-checkbox {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}

.checkbox-circle {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: var(--grey);
  transition: background 0.2s;
  position: relative;
}

.checkbox-circle.active::before {
  content: "";
  width: 12px;
  height: 12px;
  background-color: var(--primary);
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
}

label {
  @include text-style(
$font-family: Comfortaa,
  $weight: 700,
  $size: 16px,
  $line-height: 134%,
  $letter-spacing: 2.5%,
  )

}
</style>
