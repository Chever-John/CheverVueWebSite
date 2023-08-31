<template>
  <header>
    <!-- header 中放入 HelloWorld 模块 -->
    <div class="wrapper">
      <HelloWorld msg="Chever John's Website" />
    </div>
  </header>

  <main>
    <!-- 在 main 中放入 TheWelcome 模块 -->
    <TheWelcome />
  </main>
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
