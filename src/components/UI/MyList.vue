<template>
  <li class="list-item" @click="toggle">
    <div class="list-item__question">
      {{ item.question }}
      <span class="arrow" :class="{ open: item.open }">
        <img :src="arrow" />
      </span>
    </div>

    <div v-if="item.open" class="list-item__answer">
      {{ item.answer }}
    </div>
  </li>
</template>

<script setup>
import { ref } from 'vue';
import arrow from '@/assets/icons/arrow.svg'

const props = defineProps({
  item: Object
});

const item = ref({ ...props.item });

const toggle = () => {
  item.value.open = !item.value.open;
};
</script>

<style lang="scss" scoped>
@use '@/assets/styles/_mixins.scss' as *;

.list-item {
  width: 100%;
  background-color: var(--white);
  box-shadow: var(--shadow);
  list-style: none;
  padding: 10px 20px;
  border-radius: 190px;
  margin-bottom: 15px;
  margin-inline-start: 0px;
  cursor: pointer;

  &__question {
    @include flexbox($display: flex, $justifyContent: space-between);
    @include text-style($font-family: Montserrat,
      $weight: 400,
      $size: 16px,
      $line-height: 134%,
      $letter-spacing: 2.5%,
    )
  }

  &__answer {
    max-width: 300px;
    margin-top: 5px;
    color: #666;
  }
}

.arrow {
  transition: transform 0.3s;
}

.arrow img {
  width: 10px;
  height: 10px;
}

.arrow.open {
  transform: rotate(90deg);
}
</style>
