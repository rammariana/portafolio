<template>
  <MainLayout>
    <template v-slot:h1>
      <h1>Contacto</h1>
    </template>
    <template v-slot:body>
      <div class="conatiner-fluid container sm d-flex flex-row pb-4">
        <button>Cv</button>
        <button>Portafolio</button>
      </div>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa atque repudiandae consequatur odio ad perspiciatis velit recusandae quam libero ipsam. Aut dolorem id repellendus praesentium error neque dolorum dolore. Beatae!</p>
    </template>
  </MainLayout>
</template>
<script setup>
import MainLayout from '../layout/MainLayout.vue'
</script>
<style lang="scss" scoped>
  button {
    width: 6rem;
    padding: 0.5rem;
    border: none;
    border-radius: 2rem;
    background-color: transparent;
    box-shadow: 0.5px 0.5px 5px #242323cc;
  }
</style>
