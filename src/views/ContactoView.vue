<template>
  <MainLayout>
    <template v-slot:seccion1>
      <section class="seccion-uno">
        <div class="contacto">
          <h1 class="contacto-h1">Contáctame</h1>
          <div class="descripcion">
            <p>Si tienes algún comentario, crítica o sugerencia, puedes hacérmelo saber enviándome un correo o poniéndote en contacto conmigo a través de mis redes sociales.</p>
          </div>

        <a href="mailto:marianasmatos1@gmail.com">
            <button class="button mt-3">
            <span class="button-text">Enviar mensaje</span>
          </button>
        </a>
        </div>
      </section>
    </template>
    <template v-slot:seccion2>
      
        <section class="seccion-dos">
          <h4 class="m-5 d-md-none">Encuéntrame a través de las redes sociales.</h4>
          <div class="conatiner-fluid d-flex flex-row justify-content-evenly redes">
            <a href="https://www.facebook.com/profile.php?id=764297855"><v-icon name="bi-facebook" scale="1.8" class="icono icono-1"></v-icon></a>
            <a href="https://wa.me/3225278052"><v-icon name="bi-whatsapp" scale="1.8" class="icono icono-2"></v-icon></a>
            <a href="https://github.com/rammariana?tab=repositories"><v-icon name="bi-github" scale="1.8" class="icono icono-3"></v-icon></a>
          </div>
          <img src="../assets/chica-sentada.png" alt="">
        </section>
      
    </template>

  </MainLayout>
</template>
<script setup>
import MainLayout from '../layout/MainLayout.vue'

</script>
<style lang="scss" scoped>
a {
  color: $color-amarillo
}
.button {
  width: 9rem;
  height: 3rem;
  position: relative;
  overflow: hidden;
  padding: 0;
  border: none;
  border-radius: 2rem;
  background-color: $color-amarillo;
  color: $color-blanco;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.button-text {
  position: absolute;
  z-index: 1; 
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.button::before {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  background-color: $color-morado;
  border-radius: 2rem;
  transition: height 0.3s ease-out;
  transition: width 0.3s ease-out;
  opacity: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.button:hover::before {
  width: 100%;
  height: 100%;
  opacity: 1;
}
.button:hover {
  border: none;
}
.contacto {
  height: auto;
  width: 80%;
  p {
    padding-left: 0.5rem;
    color: $color-texto;
  }
  button {
    margin-left: 0.5rem;
  }
}
.contacto-h1 {
  color: $color-texto;
  margin-bottom: 3rem;
}
img {
  width: 100%;
  margin-top: 2.5rem;
}
.icono {
  cursor: pointer;
}
.icono-1 {
  animation: rebote 1.5s ease-out infinite;
}
.icono-2 {
  animation: rebote 1.5s ease-out infinite;
  animation-delay: 0.2s;
}
.icono-3 {
  animation: rebote 1.5s ease-out infinite;
  animation-delay: 0.4s;
}
.ov-icon:hover {
  fill: $color-morado;
}
.redes {
  color: $color-amarillo;
}
.seccion-uno, .seccion-dos {
  animation: aparecer 1s ease;
}
.seccion-uno {
  margin-top: 5rem;
  display: flex;
  justify-content: center;
}
.seccion-dos {
  margin: 3rem 0;
}
@keyframes rebote {
  0%{
    transform: translateY(0);
  }
  50%{
    transform: translateY(50%);
  }
  100%{
    transform: translateY(0);
  }
}
@media screen and (min-width: 768px) {
  .contacto {
    width: 100%;
  }
  img {
    margin-top: 3.5rem;
  }
  .seccion-uno {
    justify-content: flex-start;
    text-align: start;
    margin-left: 4rem;
    margin-top: 8rem;
  }
  .seccion-dos {
    margin-top: 4.5rem;
    margin-bottom: 0 !important;
  }
}
@media screen and (min-width: 768px) {
 
  img {
    margin-top: 1.5rem;
    width: 85%;
  }
}

/*
.button-text {
  position: absolute;
  z-index: 1; 
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

  .contacto-h1 {
    color: $color-blanco;
    background-color: $color-naranja;
  }
  .contenedor {
    width: 100%;
    margin-bottom: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .descripcion {
    width: 80%;
    text-align: justify;
    padding: 3rem 0;
  }
  .fill-button {
  width: 6rem;
  height: 3rem;
  position: relative;
  overflow: hidden;
  padding: 0;
  border: thin solid $color-blanco;
  border-radius: 2rem;
  background-color: transparent;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.fill-button::before {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  background-color: $color-naranja;
  border-radius: 2rem;
  transition: height 0.3s ease-out;
  transition: width 0.3s ease-out;
  opacity: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.fill-button:hover::before {
  width: 100%;
  height: 100%;
  opacity: 1;
}


.fill-button:hover {
  border: none;
}
.form-control:focus {
  border-color: $color-rojo; 
  box-shadow: 0 0 0 0.2rem transparent; 
  background-color: $color-naranja;
  color: $color-blanco;
}
.h4-mensaje {
  margin: 6rem 0 3rem 0;
}
  input, textarea {
    background-color: transparent;
    background-color: $color-naranja;
    color: $color-blanco;
    border: thin solid $color-naranja;

  }
  input::placeholder, textarea::placeholder {
    color: $color-blanco-focus;
  }
  .margen-formulario {
    margin: 2.5rem 0;
  }
  p {
    line-height: 2rem;
  }
  .redes {
    width: 100%;
    text-align: center;
    background-color: $color-naranja;
  }
  @media screen and (min-width: 600px) {
    .contenedor {
      width: 70%;
    }
    .descripcion {
      width: 70%;
      font-size: 1.2rem;
    }
  }
  @media screen and (min-width: 800px) {
    .contenedor {
      width: 50%;
    }
    .descripcion {
      width: 50%;
      padding-bottom: 5rem;
    }
  }
@media screen and (min-width: 1000px) {
    .descripcion {
      font-size: 1.5rem;
    }
}
*/
</style>
