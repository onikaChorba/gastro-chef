<template>
  <section class="about">
    <div class="slide-content">
      <div class="info">
        <h3 class="title">Hello! My name is <span>Kirill Kobylinsky</span> and I am <span> the founder of
            GastroChef</span>.</h3>
        <p class="text">I am a Master of Sports of Ukraine in weightlifting, and was also a member of the Ukrainian
          national team.</p>
        <p class="text">I have a higher education from the National University of Physical Education and Sports of
          Ukraine (NUPESU), and in the past I was a professional fitness trainer!</p>
        <p class="text bold">And I want to tell you more about <span> GastroChef</span></p>
      </div>

      <div class="image-wrapper">
        <img :src="img" alt="food" class="image" />
      </div>
    </div>

    <div class="wrapper">
      <div>
        <img :src="about" alt="about" class="image" />
      </div>
      <div class="info">
        <h3 class="subtitle">The history of GastroChef began more than 6 years ago...</h3>
        <p class="text">For a long time I have observed how people do not have enough time for proper and healthy
          nutrition, what
          proper, just regular nutrition.</p>
        <p class="text">
          They could have breakfast, eat something like shawarma or a snack at lunch, and then eat their fill in the
          evening due to hunger, which had a negative effect on their metabolism and, naturally, their health.
        </p>
        <p class="text">
          The desire to somehow change the situation and help people did not give me peace and I decided to open a
          delivery service of healthy food.
        </p>
        <p class="text">
          With my 17 years of experience in sports and professional education, together with a nutritionist, we
          developed healthy eating plans with calorie counting (KBZhU).
        </p>
        <p class=" text bold">Meet the Gastro Chef Team!</p>
      </div>
    </div>

    <div class="team-wrapper">
      <img :src="team" alt="team" class="team-image" />
    </div>

    <div class="wrapper">
      <div class="info">
        <h3 class="subtitle">"GastroChef - easy for busy people"</h3>
        <p>GastroChef - healthy food with home delivery, created to make life easier, free up time from cooking,
          unnecessary snacks, fast foods and give the opportunity to feel light and full of energy, strength, for new
          achievements and victories.</p>
        <p>
          All products for preparing healthy meals are purchased only with certificates, and the meals are prepared in a
          modern and safe kitchen the night before arriving to you!
        </p>
        <p>
          Friends, if you have any questions, you can easily call us or write to me personally on Instagram or Facebook.
        </p>
        <p class="bold">Sincerely, Kirill Kobylinsky.</p>
      </div>

      <div><img :src="about2" alt="about2" /><span></span></div>
    </div>

    <Photos />
    <OrderFAQ />
  </section>
</template>

<script setup>
import img from '../assets/imgs/slide-img2.jpg';
import about from '../assets/imgs/about.png';
import about2 from '../assets/imgs/about-2.png';
import team from '../assets/imgs/team.png';
import Photos from '@/components/Photos.vue';
import OrderFAQ from '@/components/OrderFAQ.vue';
</script>

<style lang="scss" scoped>
@use "@/assets/styles/_mixins.scss" as *;

.about {
  min-height: 100vh;
}

.slide-content {
  width: 100%;
  @include flexbox($display: flex, $alignItems: center, $justifyContent: space-between);

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 30px;
  }
}

.info {
  @include flexbox($display: flex, $direction: column, $alignItems: flex-start, $justifyContent: center);
  gap: 15px;
  margin-left: 120px;
  max-width: 677px;
  flex: 1;

  @media (max-width: 1024px) {
    margin-left: 0;
    text-align: center;
    align-items: center;
    padding: 0 20px;
    max-width: 100%;
  }
}

.title {
  text-align: left;
  @include text-style($font-family: Comfortaa,
    $weight: 700,
    $size: 32px,
    $line-height: 100%,
    $letter-spacing: 2.5%,
    $color: var(--black));

  @media (max-width: 1024px) {
    font-size: 30px;
    text-align: center;

    span {
      color: var(--black);
    }
  }

  @media (max-width: 600px) {
    font-size: 24px;
  }
}

.subtitle {
  @include text-style($font-family: Montserrat,
    $weight: 700,
    $size: 32px,
    $line-height: 100%,
    $letter-spacing: 0%,
    $color: var(--black));
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 22px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
}

.text {
  @include text-style($font-family: Montserrat,
    $weight: 300,
    $size: 20px,
    $line-height: 100%,
    $letter-spacing: 0%,
    $color: var(--black));

  &+.bold {
    font-weight: 700;
  }

  @media (max-width: 1024px) {
    font-size: 16px;
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }
}

.wrapper {
  padding: 60px 0px;
  gap: 40px;
  @include flexbox($display: flex, $alignItems: center, $justifyContent: center);

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 40px 20px;
    text-align: center;
  }
}

.team-wrapper {
  text-align: center;
  padding: 40px 20px;

  img {
    max-width: 100%;
    height: auto;
  }
}

.image-wrapper {
  width: 700px;
  height: 700px;
  border-radius: 50%;
  padding: 20px;
  background: var(--white);
  @include flexbox($display: flex, $alignItems: center, $justifyContent: center);

  @media (max-width: 1024px) {
    width: 300px;
    height: 300px;
    padding: 10px;
  }

  @media (max-width: 600px) {
    width: 240px;
    height: 240px;
  }
}

.image {
  border-radius: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
}
</style>