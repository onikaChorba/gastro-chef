<template>
  <section class="programs">
    <my-button type="primary" size="large">Nutrition programs</my-button>
    <my-button type="secondary" size="large" state="inactive"
      >Special programs</my-button
    >
    <article
      class="programs__item"
      v-for="program in programs"
      :key="program.title"
    >
      <h3>{{ program.title }}</h3>
      <p>{{ program.text }}</p>
    </article>
  </section>
</template>

<script setup>
const programs = [
  { title: "Express Fit", text: "800 ккал" },
  { title: "slim", text: "1000 ккал" },
  { title: "fitness", text: "1300 ккал" },
  { title: "balance", text: "1600 ккал" },
  { title: "balance +", text: "1800 ккал" },
  { title: "strong", text: "2000 ккал" },
  { title: "maxi fit", text: "2400 ккал" },
];
</script>
<style>
.programs {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px 0;
}
</style>
