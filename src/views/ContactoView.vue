<template>
  <MainLayout>
    <template v-slot:h1>
      <h1>Contáctame</h1>
    </template>
    <template v-slot:body>
      <div class="conatiner-fluid container sm d-flex flex-row pb-4 justify-content-around">
        <v-icon name="bi-facebook" scale="1.8"></v-icon>
        <v-icon name="bi-whatsapp" scale="1.8"></v-icon>
        <v-icon name="bi-github" scale="1.8"></v-icon>
      </div>
      <h4 class="mb-4 mt-3 fw-semibold">Envíame un mensaje</h4>
      <p class="mb-5">Si tienes algún comentario, crítica o sugerencia, puedes hacermelo saber con un mensaje o poniéndote en contacto conmigo a través de mis redes sociales.</p>
      <form class="contenedor">
        <div class="mb-3">
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="correo@ejemplo.com">
        </div>
        <div class="mb-3">
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Escribe aquí tu mensaje..."></textarea>
        </div>
      </form>
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
  .contenedor {
    width: 100%;
  }

  @media screen and (min-width: 600px) {
    .contenedor {
      width: 90%;
    }
  }
  @media screen and (min-width: 800px) {
    .contenedor {
      width: 80%;
    }
  }

</style>
