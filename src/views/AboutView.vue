
<template>
  <MainLayout>
    <template v-slot:seccion1>
      <section class="seccion-uno">
        <div class="card">
          <div class="front" id="0">
            <img v-bind:src="imageA" id="src-0" />
          </div>
        </div>
      </section>
  </template>
  <template v-slot:seccion2>
    <section class="seccion-dos">
      <h3 class="mb-1">Mariana Ramírez</h3>
      <h5 class="mb-5">Frontend Dev</h5>
      <div class="container d-flex flex-row justify-content-evenly mb-5">
        <router-link :to="{name: 'portafolio'}">
          <button class="button"><span class="button-text">Portafolio</span></button>
        </router-link>
        <router-link :to="{name: 'cv'}">
          <button class="button"><span class="button-text">Cv</span></button>
        </router-link>
      </div>
      <div class="contenedor-seccion-dos">
        <p>Soy autodidacta en el desarrollo web frontend y una persona curiosa, me gusta buscar nuevos retos para expandir conocimientos y mejorar mis capacidades tanto en el ámbito personal como en el profesional. Me gusta la naturaleza, tejer, programar, y hacer ejercicios en mi tiempo libre.<!--En estos momentos me encuentro desarrollando mis habilidades con <b>Vue.js</b> y estoy entrando al backend con <b>Node.js</b> ya que es un área que me llama mucho la atención.--></p>
        <p>Bienvenido a mi espacio personal, aquí encontrarás los proyectos que he realizado a lo largo de mi formacion como autodidacta y algunos proyectos para clientes.</p>
      </div>
    </section>
  </template>
  </MainLayout>
</template>

<script setup>
import MainLayout from '../layout/MainLayout.vue'
import {onMounted, ref} from 'vue'
const arrImageA = ["https://img.freepik.com/vector-premium/mujeres-corriendo-paisaje-mujeres-ropa-deportiva-correr-atleta-femenina-deportistas_24877-64763.jpg", "https://img.freepik.com/vector-gratis/programador-trabajando-codigo-desarrollo-web-ingeniero-programacion-script-python-php-java-computadora_90220-249.jpg", "https://img.freepik.com/vector-premium/mujer-teje-casa-tiempo-pasatiempo-hogar-acogedor-ilustracion-dibujos-animados-planos-lindos-vector-concepto-hecho-mano_564312-500.jpg", "https://img.freepik.com/vector-gratis/dibujado-mano-ilustracion-plantacion-arboles-diseno-plano_23-2149210052.jpg"]

let imageA = ref(null)
let indexImgA = ref(0);

onMounted(() => {
imageA.value = arrImageA[indexImgA.value]
  let cero = document.getElementById("0");
  let degA = ref(0);
  
 
  setInterval(() => {
    degA.value += 360
    cero.style.transform = `perspective(500px) rotateY(${degA.value}deg)`
    setTimeout(() => {
      indexImgA.value++;
      if (indexImgA.value === arrImageA.length) {
        indexImgA.value = 0;
      }
      imageA.value = arrImageA[indexImgA.value];  
    }, 3155);
  }, 3000);

})

</script>
<style lang="scss" scoped>
.back {
  background-color: yellowgreen;
  transform: perspective(500px) rotateY(180deg);
}
.button {
  width: 6rem;
  height: 3rem;
  position: relative;
  overflow: hidden;
  padding: 0;
  border: none;
  border-radius: 2rem;
  background-color: $color-morado;
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
  background-color: $color-amarillo;
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
.card {
  position: relative;
  width: 100%;
  height: 100%;
  border: none;
}
.card div {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  backface-visibility: hidden; /* oculta la parte de atras*/
  transition: 1s;
}
.contenedor-layout {
  display: flex;
  align-items: center;
  justify-content: center;
}
.contenedor-seccion-dos{
  width: 80%;
  text-align: justify;
}
.front {
  background-color: transparent;
  transform: perspective(500px) rotateY(0deg);
  transition: opacity 1.5s;
  animation: opacidad 1.5s ease;
}
img {
  width: 100%;
  height: 100%;
  transition: opacity 1.5s;
  animation: opacidad 1.5s ease;
}
.ov-icon:hover {
  fill: $color-morado;
}
p {
  text-indent: 0.8rem;
}

.seccion-uno, .seccion-dos {
  animation: aparecer 1s ease;
}
.seccion-uno {
  margin: 3rem 0;
  width: 100vw;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
}
.seccion-dos {
  margin: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
  @keyframes opacidad {
    0% {
      opacity: 0;
    }
    100%{
      opacity: 1;
    }    
  }

@media screen and (min-width: 500px) {
 .card {
   width: 20rem;
   height: 20rem;
  }
  .seccion-uno {
    margin-top: 3rem;
  }
}
@media screen and (min-width: 768px) {
  .seccion-uno {
    padding-left: 2rem;
    width: auto;
    height: auto;
  }
}

</style>
