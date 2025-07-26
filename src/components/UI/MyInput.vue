<template>
  <div class="input-wrapper">
    <label v-if="label" :for="id">{{ label }}</label>
    <div class="input-container">
      <input :id="id" :type="type" :placeholder="placeholder" :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: String,
  label: String,
  placeholder: String,
  type: {
    type: String,
    default: 'text'
  },
  id: {
    type: String,
    default: () => `input-${Math.random().toString(36).substr(2, 9)}`
  }
});

defineEmits(['update:modelValue']);
</script>

<style lang="scss" scoped>
@use '@/assets/styles/_mixins.scss' as *;

.input-wrapper {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

label {
  padding-left: 20px;
  @include text-style($font-family: Comfortaa,
    $weight: 700,
    $size: 18px,
    $line-height: 134%,
    $letter-spacing: 2.5%,
    $color: var(--primary))
}

.input-container {
  position: relative;
  width: 100%;
}

input {
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  background: var(--grey);
  border-radius: 190px;
  border: none;
  color: var(--black);
  padding: 10px 20px;
}

input::placeholder {
  opacity: 0.3;
  @include text-style($font-family: Montserrat,
    $weight: 400,
    $size: 16px,
    $line-height: 134%,
    $letter-spacing: 2.5%,
    $color: var(--black))
}

input:focus {
  outline: none;
}

.input-container::before {
  content: "";
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--primary);
}
</style>
