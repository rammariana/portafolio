<template>
  <nav class="container-fluid aparecer nav-home">
    <div class="container-sm d-flex flex-row justify-content-between align-items-center p-3">
      <router-link :to="{name: 'about'}">
        <v-icon name="ri-home-2-fill" class="home"/>
      </router-link> 
      <!-- Menu hamburguesa -->
      <div class="raya-container" @click="mostrarOcultarMenu">
        <div class="raya raya-1"></div>
        <div class="raya raya-2"></div>
      </div>
    </div>
  </nav>
  <section class="position-fixed menu d-flex justify-content-end" v-show="mostrar">
    <div class="contenedor-menu" v-show="lista">
      <div id="ul-contenedor">
        <ul>
          <router-link :to="{name: 'portafolio'}">
            <li>Portafolio</li>
          </router-link>
          <router-link :to="{name: 'contacto'}">
            <li>Contacto</li>
          </router-link>
          <router-link :to="{name: 'about'}">
            <li>Sobre mí</li>
          </router-link>
          <router-link :to="{name: 'cv'}">
            <li>Cv</li>
          </router-link>
        </ul>
      </div>
    </div>
  </section>
  <router-view/>
</template>
<script setup>
import { ref } from 'vue'

const mostrar = ref(false)
const lista = ref(false)


const mostrarOcultarMenu = () => {
  mostrar.value = !mostrar.value
  lista.value = !lista.value
  const menu = document.querySelector('.menu')
  const ul = document.getElementById('ul-contenedor')
  const rayaContainer = document.querySelector('.raya-container')
  const raya1 = document.querySelector('.raya-1')
  const raya2 = document.querySelector('.raya-2')
  let nav = document.querySelector('nav').children[0].children[0]
  //console.log(document.querySelector('.menu'))
  //
  rayaContainer.classList.toggle('rotar-menu')
  raya1.classList.toggle('mover-raya-1')
  raya2.classList.toggle('mover-raya-2')
  nav.style.color = 'white'
  // Color del nav en blanco cuando se abre el menu
  if (mostrar.value) {
    // Muestro el menu
    menu.classList.remove('animacion-menu-reverse')
    ul.classList.remove('desplazamiento-abajo')
    menu.classList.add('animacion-menu')
    ul.classList.add('desplazamineto-arriba')
  } else {
    // Lo oculto
    menu.classList.remove('animacion-menu')
    ul.classList.remove('desplazamineto-arriba')
    menu.classList.add('animacion-menu-reverse')
    ul.classList.add('desplazamiento-abajo')
    nav.style.color = 'rgb(142, 146, 150)'
    // Restableciendo el color del nav cuando se abre el menu
  }

  
  
}
document.addEventListener('click', el => {
  // Controlando que cuando se elija un enlace se cierre el menu
  const menu = document.querySelector('.menu')
  const rayaContainer = document.querySelector('.raya-container')
  const raya1 = document.querySelector('.raya-1')
  const raya2 = document.querySelector('.raya-2')
  let nav = document.querySelector('nav').children[0].children[0]

    if (el.target.nodeName === 'LI') {
      menu.classList.remove('animacion-menu')
      menu.classList.add('animacion-menu-reverse')
      rayaContainer.classList.toggle('rotar-menu')
      raya1.classList.toggle('mover-raya-1')
      raya2.classList.toggle('mover-raya-2')
      mostrar.value = !mostrar.value
      lista.value = !lista.value
    // Restableciendo el color del nav cuando se abre el menu
      nav.style.color = 'rgb(142, 146, 150)'
    }
  })

</script>
<style lang="scss">
*, html, ::after, ::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  user-select: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $color-texto;
}
.aparecer {
  transition: all 1s;
  animation: aparecer 1s ease-out;
}
.contenedor-menu {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  transition: opacity 2s ease;
  opacity: 1;
  z-index: 99;
}
.desplazamineto-arriba {
  margin-top: 4rem;
  animation: desplazarArriba 2s ease backwards;
}
.desplazamiento-abajo {
  animation: desplazarAbajo 2s ease backwards;
}
.menu {
  width: 5rem;
  height: 5rem;
  color: $color-blanco;
  background-color: $color-negro;
  border-radius: 50%;
  right: -1rem;
  top: -1rem;
  transition: opacity 1s ease;
  opacity: 0;
  z-index: 80;
}
.animacion-menu {
  transition: all 1s ease;
  animation: crecer 2s ease backwards;
  border-radius: 0%;
  width: 100vw;
  height: 100vh;  
  right: 0rem;
  top: 0rem;
  opacity: 1;
}
.animacion-menu-reverse {
  transition: all 0.5s ease backwards;
  animation: reverso 2s ease backwards;
  width: 5rem;
  height: 5rem;  
  right: 0rem;
  top: 0rem;
  border-radius: 0;
  opacity: 0;
}
.mover-raya-1 {
  transform: rotate(90deg) translateX(3.5px) !important;
  border: thin solid $color-blanco !important;
}
.mover-raya-2 {
    transform: translateY(-2.5px) !important;
    border: thin solid $color-blanco !important;
}
.nav-home {
  color: $color-texto;
  z-index: 90;
  position: fixed;
  a {
    font-weight: bold;
    color: $color-texto;
  }
}
.raya-container {
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  padding: 1rem;
  position: relative;
  transition: transform 1s ease-in-out;
}
// Cuando haga hover sobre el contenedor
// se cambiara el color de la x
.raya-container:hover > .raya {
  border: thin solid $color-morado;
}
.raya {
  width: 1rem;
  height: 0.5px;
  border: thin solid $color-texto;
  border-radius: 1rem;
}
.raya-1 {
  margin-bottom: 0.3rem;
  transition: transform 0.5s ease-in-out;
}
.raya-2 {
  transition: transform 0.5s ease-in-out;
}
.rotar-menu {
  transform: rotate(45deg);
}
.ov-icon:hover {
  fill: $color-morado;
}
#ul-contenedor {
  transition: display 5s ease;
  margin-top: 4rem;
  ul {
    list-style: none;
    padding-left: 0;
    a {
      text-decoration: none;
    }
    li {
      padding-bottom: 1.5rem;
      color: $color-blanco;
    }
  }
}
@keyframes aparecer {
  0% {
    opacity: 0;
    transform: translateY(0%);
  }
  100% {
    opacity: 1;
    transform: translateY(100%);
  }
}
@keyframes crecer {
  // Aqui hacemos la animacion del menu hamburguesa
  0% {
    width: 5rem;
    height: 5rem;
    right: -5rem;
    top: -3rem;
    border-radius: 50%;
  }
  50% {
    width: 60rem;
    height: 60rem;
    right: -7rem;
    top: -3rem;
    border-top-right-radius: 0;
  }
  100% {
    width: 100vw;
    height: 100vh;  
    right: 0rem;
    top: 0rem;
  }
}
@keyframes desplazarArriba {
  0%{
    transform: translateY(100%);
    opacity: 0;
  }
  100%{
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes desplazarAbajo {
  0%{
    transform: translateY(0);
    opacity: 0;
  }
  100%{
    transform: translateY(100%);
    opacity: 1;
  }
}

@keyframes reverso {
  0% {
    width: 100vw;
    height: 100vh;  
    right: 0rem;
    top: 0rem;
  }
  50% {
    width: 20rem;
    height: 20rem;
    right: -8rem;
    top: -3rem;
    border-radius: 50%;
  }
  100% {
    width: 5rem;
    height: 5rem;
    right: -8rem;
    top: 0rem;
    border-radius: 50%;
  }
}
@media screen and (min-width: 600px) {
  #ul-contenedor {
    margin-top: 8rem;
  }
 @keyframes reverso {
  0% {
    width: 100vw;
    height: 100vh;  
    right: -3rem;
    top: 0rem;
  }
  50% {
    width: 20rem;
    height: 20rem;
    right: -8rem;
    top: -3rem;
    border-radius: 50%;
  }
  100% {
    width: 5rem;
    height: 5rem;
    right: -8rem;
    top: 0rem;
    border-radius: 50%;
  }
}

@keyframes crecer {
  0% {
    width: 5rem;
    height: 5rem;
    right: -5rem;
    top: -3rem;
    border-radius: 50%;
  }
  50% {
    width: 80rem;
    height: 80rem;
    right: -12rem;
    top: -3rem;
    border-top-right-radius: 0;
  }
  100% {
    width: 100vw;
    height: 100vh;  
    right: 0rem;
    top: 0rem;
  }
}

}
@media screen and (min-width: 900px) {
  @keyframes crecer {
  0% {
    width: 5rem;
    height: 5rem;
    right: -5rem;
    top: -3rem;
    border-radius: 50%;
  }
  50% {
    width: 80rem;
    height: 80rem;
    right: -10.5rem;
    top: -3rem;
    border-top-right-radius: 0;
  }
  100% {
    width: 100vw;
    height: 100vh;  
    right: 0rem;
    top: 0rem;
  }
}
}
@media screen and (min-width: 1000px) {
  @keyframes crecer {
  0% {
    width: 5rem;
    height: 5rem;
    right: -9rem;
    top: -2rem;
    border-radius: 50%;
  }
  50% {
    width: 100rem;
    height: 100rem;
    right: -12rem;
    top: -2rem;
    border-top-right-radius: 0;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
  }
  100% {
    width: 100vw;
    height: 100vh;  
    right: 0rem;
    top: 0rem;
  }
}
}

</style>
