<template>
<div class="slider">
    <div class="barra-contenedor">
      <div class="barra" @click="barraHandle(0, $event)"></div>
      <div class="barra" @click="barraHandle(1, $event)"></div>
      <div class="barra" @click="barraHandle(2, $event)"></div>
      <div class="barra" @click="barraHandle(3, $event)"></div>
      <div class="barra" @click="barraHandle(4, $event)"></div>
    </div>
  <div class="slider-container">
    <div class="slide" id="0">
      <div class="img">
        <div class="foto foto-g video">
          <video src="../assets/barraza-1.webm" autoplay="true" muted="true" loop="true"></video>
        </div>
        <div class="foto foto-p">
          <img src="../assets/barraza-2.png" alt="Barraza Investors">
        </div> 
        <h3>Barraza Investors</h3>  
        <div class="tecnologias">
          <v-icon name="la-html5" scale="1.8"></v-icon>
          <v-icon name="la-css3-alt" scale="1.8"></v-icon>
          <v-icon name="ri-vuejs-line" scale="1.8"></v-icon>
          <v-icon name="si-bootstrap" scale="1.8"></v-icon>
        </div>     
        <div class="btn-container">
          <button class="button">
            <span class="button-text">Demo</span>
          </button>
           <button class="button">
            <span class="button-text">Code</span>
          </button>
        </div>        
      </div>
    </div>
    <div class="slide" id="1">
      <div class="img">
        <div class="foto foto-g">
          <img src="../assets/tienda-1.png" alt="IDtly">
        </div>
        <div class="foto foto-p">
          <img src="../assets/tienda-2.png" alt="IDtly">
        </div>
        <h3>Tienda de Modas</h3>  
        <div class="tecnologias">
          <v-icon name="la-html5" scale="1.8"></v-icon>
          <v-icon name="la-css3-alt" scale="1.8"></v-icon>
          <v-icon name="fa-sass" scale="1.8"></v-icon>
          
        </div> 
        <div class="btn-container">
          <button class="button">
            <span class="button-text">Demo</span>
          </button>
          <button class="button">
            <span class="button-text">Code</span>
          </button>
        </div>        
      </div>
    </div>
    <div class="slide" id="2">
      <div class="img">
        <div class="foto foto-g">
          <img src="../assets/laika-1.png" alt="Laika copia">
        </div>
        <div class="foto foto-p">
          <img src="../assets/laika-2.png" alt="Laika copia">
        </div>
        <h3>Copia de Laika</h3>  
        <div class="tecnologias">
          <v-icon name="la-html5" scale="1.8"></v-icon>
          <v-icon name="la-css3-alt" scale="1.8"></v-icon>
          <v-icon name="si-bootstrap" scale="1.8"></v-icon>
        </div> 
        <div class="btn-container">
          <button class="button">
            <span class="button-text">Demo</span>
          </button>
           <button class="button">
            <span class="button-text">Code</span>
          </button>
        </div>        
      
      </div>
    </div>
    <div class="slide" id="3">
      <div class="img">
        <div class="foto foto-g">
          <img src="../assets/tictac-1.png" alt="Tic-Tac">
        </div>
        <div class="foto foto-p">
          <img src="../assets/tictac-2.png" alt="Tic-Tac">
        </div>
        <h3>Juego tic-tac-toe</h3>  
        <div class="tecnologias">
          <v-icon name="la-html5" scale="1.8"></v-icon>
          <v-icon name="la-css3-alt" scale="1.8"></v-icon>
          <v-icon name="io-logo-javascript" scale="1.8"></v-icon>
        </div> 
        <div class="btn-container">
          <button class="button">
            <span class="button-text">Demo</span>
          </button>
           <button class="button">
            <span class="button-text">Code</span>
          </button>
        </div>        
      
      </div>
    </div>
    <div class="slide" id="4">
      <div class="img">
        <div class="foto foto-g">
          <img src="../assets/poke-1.png" alt="Pokememoria">
        </div>
        <div class="foto foto-p">
          <img src="../assets/poke-2.png" alt="Pokememoria">
        </div>
        <h3>Juego Memoria</h3>  
        <div class="tecnologias">
          <v-icon name="la-html5" scale="1.8"></v-icon>
          <v-icon name="la-css3-alt" scale="1.8"></v-icon>
          <v-icon name="io-logo-javascript" scale="1.8"></v-icon>
        </div> 
        <div class="btn-container">
          <button class="button">
            <span class="button-text">Demo</span>
          </button>
           <button class="button">
            <span class="button-text">Code</span>
          </button>
        </div>        
      </div>
    </div>
  </div>
</div>
</template>
<script setup>
import { onMounted, ref } from 'vue'

let id = ref(0)
// morado #C250F2, naranja rgb(244, 112, 27), amarillo rgb(250, 212, 18), celeste rgb(122, 224, 200), rojo rgb(255, 60, 51
//let background = ['#FFB7B7', '#FFF0B7', '#CBFFB7', '#B7FFEB', '#F4B7FF']
let colorBarraActiva = '#ec86fa'
let colorBarraPasiva= 'rgba(142, 146, 150, 0.418)'
  onMounted(() => {
   
  const barra = document.querySelectorAll('.barra')
  let isMobile = /iPhone|iPad|iPod|Android|BlackBerry|Windows Phone/i.test(navigator.userAgent);
  // Expresion regular para ver si el dispositivo es movil o pc

  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll('.slide')
  const sliderContainer = document.querySelector(".slider-container");
  const slideWidth = slides[0].clientWidth;

  
  // Estableciendo fondo, posicion y animacion inicial
  //slider.style.backgroundColor = background[0]
  barra[0].style.backgroundColor = colorBarraActiva
  
  sliderContainer.childNodes[id.value].childNodes[0].childNodes[0].classList.add('aparecer-derecha')
  sliderContainer.childNodes[id.value].childNodes[0].childNodes[1].classList.add('aparecer-derecha')
  sliderContainer.childNodes[id.value].childNodes[0].childNodes[1].style.animationDelay = '0.1s'
  // Haciendo que el slider sea automatico
  setInterval(() => {
    // Reiniciando la animacion de los hijos
          
    if (sliderContainer.childNodes[id.value]) {
      sliderContainer.childNodes[id.value].childNodes[0].childNodes[0].classList.remove('aparecer-derecha');
      sliderContainer.childNodes[id.value].childNodes[0].childNodes[1].classList.remove('aparecer-derecha');
      sliderContainer.childNodes[id.value].childNodes[0].childNodes[0].classList.remove('aparecer-izquierda');
      sliderContainer.childNodes[id.value].childNodes[0].childNodes[1].classList.remove('aparecer-izquierda');
    }    
    // Restableciendo la barra antes de que aumente el contador
    //barra[id.value].style.backgroundColor = colorBarraPasiva
    if (barra[id.value]) {
      barra[id.value].style.backgroundColor = colorBarraPasiva;
    }
    id.value++ 
        
    if (id.value === slides.length) {
      // Condicion para volver al inicio en caso de estar
      // en la ultima diapositiva
      id.value = 0
      sliderContainer.style.transition = "none";
      sliderContainer.style.transform = `translateX(200px)`;
      sliderContainer.offsetHeight;
      sliderContainer.style.transition = "transform 1s";
      // Trasformaciones para hacer el efecto slide cuando volvemos al inicio
    }
    sliderContainer.style.transform = `translateX(-${slideWidth * id.value}px)`  
    // Actualizando el color de fondo
    //slider.style.backgroundColor = background[id.value]
    // Actualizando posicion de la diapo en la barra
    if (barra[id.value]) {
      barra[id.value].style.backgroundColor = colorBarraActiva;
    }
    if (sliderContainer.childNodes[id.value]) {
      sliderContainer.childNodes[id.value].childNodes[0].childNodes[0].classList.add('aparecer-derecha')
      sliderContainer.childNodes[id.value].childNodes[0].childNodes[1].classList.add('aparecer-derecha')
    }
  }, 5000);
  // Detectando si el usuario usa pc o movil
  if (isMobile) {
    // El usuario usa dispositivo móvil, capturamos evento tactil
    //ESTABLECIENDO POSICION ACTUAL Y ATRAPANDO VALORES DEL TOUCH***
    const slideWidth = slides[0].clientWidth;
    let startPoint = ref(null);
    let touchMovePoint = ref(null);
    let distance = ref(null);

    slider.addEventListener("touchstart", (event) => {
      //evento que captura el comienzo del tactil
      //estableciendo el punto de inicio
      startPoint.value = event.touches[0].clientX;
    });

    slider.addEventListener("touchmove", (event) => {
      touchMovePoint.value = event.touches[0].clientX;
      // Distancia en el que se mueve el cursor en el eje x
      distance.value = touchMovePoint.value - startPoint.value;
      if (sliderContainer.childNodes[id.value]) {
        sliderContainer.childNodes[id.value].childNodes[0].childNodes[0].classList.remove('aparecer-izquierda')
        sliderContainer.childNodes[id.value].childNodes[0].childNodes[1].classList.remove('aparecer-izquierda')
        sliderContainer.childNodes[id.value].childNodes[0].childNodes[0].classList.remove('aparecer-derecha')
        sliderContainer.childNodes[id.value].childNodes[0].childNodes[1].classList.remove('aparecer-derecha')
      }

      //condición que vigila si estamos en la primera diapo
      //y desencadeno el evento move que me lleva al final
      if (id.value === 0 && event && distance.value > 0) {
        // Eliminando posicion de la barra anterior y evitando que acceda id si es 0
        // Sino lanza error de indefinido
        if (barra[id.value]) {
          barra[id.value].style.backgroundColor = colorBarraPasiva;
        }

        id.value = slides.length;
        //estilos
        sliderContainer.style.transition = "none";
        sliderContainer.style.transform = `translateX(-${id.value * slideWidth
          }px)`;
        sliderContainer.offsetHeight;
        sliderContainer.style.transition = "transform 1s";
        // Actualizando color de fondo y posicion de la barra
        //slider.style.backgroundColor = background[id.value]
        if (barra[id.value]) {
          barra[id.value].style.backgroundColor = colorBarraActiva;
        }
        // Añadiendo la animacion de los hijos
        if (sliderContainer.childNodes[id.value]) {
          sliderContainer.childNodes[id.value].childNodes[0].childNodes[0].classList.add('aparecer-izquierda')
          sliderContainer.childNodes[id.value].childNodes[0].childNodes[1].classList.add('aparecer-izquierda')
          sliderContainer.childNodes[id.value].childNodes[0].childNodes[1].style.animationDelay = '0.1s'
        }
      }
    });

    slider.addEventListener("touchend", () => {
      // Cuando el evento touch termina sumo o resto a las variables
      if (sliderContainer.childNodes[id.value]) {
        sliderContainer.childNodes[id.value].childNodes[0].childNodes[0].classList.remove('aparecer-izquierda')
        sliderContainer.childNodes[id.value].childNodes[0].childNodes[1].classList.remove('aparecer-izquierda')
        sliderContainer.childNodes[id.value].childNodes[0].childNodes[0].classList.remove('aparecer-derecha')
        sliderContainer.childNodes[id.value].childNodes[0].childNodes[1].classList.remove('aparecer-derecha')        
      }
      // Eliminando posicion de la barra anterior y evitando que acceda al id si es 0
      if (barra[id.value]) {
          barra[id.value].style.backgroundColor = colorBarraPasiva;
        }
      if (distance.value > 0 && id.value) {
        id.value--;
        //slider.style.backgroundColor = background[id.value]
        // Animacion transicion de las diapositivas
        // Añadiendo la animacion de los hijos
        sliderContainer.childNodes[id.value].childNodes[0].childNodes[0].classList.add('aparecer-izquierda')
        sliderContainer.childNodes[id.value].childNodes[0].childNodes[1].classList.add('aparecer-izquierda')
        sliderContainer.childNodes[id.value].childNodes[0].childNodes[1].style.animationDelay = '0.1s'
      } else if (distance.value < 0 && id.value < slides.length) {
        id.value++;
        // Haciendo que el carrusel sea infinito
        /// Si no tiene hijos, significa que estamos 
        //al final así que volvemos a poner la variable en 0 
        if (!sliderContainer.children[id.value]) {
          id.value = 0
          sliderContainer.style.transition = "none";
          sliderContainer.style.transform = `translateX(200px)`;
          sliderContainer.offsetHeight;
          sliderContainer.style.transition = "transform 1s";
        }
        //slider.style.backgroundColor = background[id.value]
        // Añadiendo la animacion de los hijos
        sliderContainer.childNodes[id.value].childNodes[0].childNodes[0].classList.add('aparecer-derecha')
        sliderContainer.childNodes[id.value].childNodes[0].childNodes[1].classList.add('aparecer-derecha')
        sliderContainer.childNodes[id.value].childNodes[0].childNodes[1].style.animationDelay = '0.1s'
      }
      sliderContainer.style.transform = `translateX(-${id.value * slideWidth}px)`;
      barra[id.value].style.backgroundColor = colorBarraActiva
      //reinicio variables
      startPoint.value = null;
      touchMovePoint.value = null;
      distance.value = null;
    });
  } 
})
// Evento clic para las barras de posicion actual
const barraHandle = (e) => {
  //const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide')
  const sliderContainer = document.querySelector('.slider-container');
  const barra = document.querySelectorAll('.barra')
  const slideWidth = slides[0].clientWidth;
  // Eliminando las clases anteriores
  if (sliderContainer.childNodes[id.value]) {
    sliderContainer.childNodes[id.value].childNodes[0].childNodes[0].classList.remove('aparecer-derecha')
    sliderContainer.childNodes[id.value].childNodes[0].childNodes[1].classList.remove('aparecer-derecha')
  
    sliderContainer.childNodes[id.value].childNodes[0].childNodes[0].classList.remove('aparecer-izquierda')
    sliderContainer.childNodes[id.value].childNodes[0].childNodes[1].classList.remove('aparecer-izquierda')
  }

  if (e > id.value) {
    // Eliminando posicion de la barra anterior
    sliderContainer.childNodes[id.value].childNodes[0].childNodes[0].classList.add('aparecer-derecha')
    sliderContainer.childNodes[id.value].childNodes[0].childNodes[1].classList.add('aparecer-derecha')
    sliderContainer.childNodes[id.value].childNodes[0].childNodes[1].style.animationDelay = '0.1s'
    if (barra[id.value]) {
      barra[id.value].style.backgroundColor = colorBarraPasiva;
    }
    id.value = e
    sliderContainer.style.transform = `translateX(-${slideWidth * id.value}px)`

  } else if (e < id.value) {
    // Eliminando posicion de la barra anterior
    //barra[id.value].style.backgroundColor = colorBarraPasiva
    if (barra[id.value]) {
      barra[id.value].style.backgroundColor = colorBarraPasiva;
    }

    id.value = e
    //console.log(id.value)
    sliderContainer.style.transform = `translateX(${slideWidth * -id.value - 1}px)`
    if (sliderContainer.childNodes[id.value]) {
      sliderContainer.childNodes[id.value].childNodes[0].childNodes[0].classList.add('aparecer-izquierda')
      sliderContainer.childNodes[id.value].childNodes[0].childNodes[1].classList.add('aparecer-izquierda')
      sliderContainer.childNodes[id.value].childNodes[0].childNodes[1].style.animationDelay = '0.1s'
    }
  }
  //slider.style.backgroundColor = background[id.value]
  // Actualizando la posicion de la barra activa
  if (barra[id.value]) {
    barra[id.value].style.backgroundColor = colorBarraActiva
  }

}
</script>
<style lang="scss" scoped>
.aparecer-derecha {
  animation: aparecer-derecha 1s ease-out;
}
.aparecer-izquierda {
  animation: aparecer-izquierda 1s ease-out;
}
.barra {
  width: 90%;
  padding: 0.2rem;
  border-radius: 2rem;
  background-color: rgba(142, 146, 150, 0.418);
  transition: background-color 1s ease-out;
}
.barra-contenedor {
  width: 100%;
  padding: 0 1rem;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  column-gap: 0.5rem;
  bottom: 1rem;
  z-index: 9;
}
.btn-container {
  width: 50%;
  display: flex;
  justify-content: space-around;
  position: relative;
  top: 79%;
    button {
      width: 6.5rem;
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
.foto {
  position: absolute;
  transition: display 2s ease; 
  box-shadow: -5px 5px 9px rgba(37, 36, 36, 0.822);
}
.foto-g {
  width: 15rem;
  height: 15rem;
  top: 8rem;
  left: 3.5rem;
}
.foto-p {
  width: 10rem;
  height: 10rem;
  top: 16rem;
  left: 10rem;
}
.img {
  height: 100%;
  position: relative;
  transition: background-color 1s ease;
  h3 {
    position: absolute;
    top: 4rem;
    left: calc(50% / 2.5);
  }
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.slider {
  /*padding-top: 4rem;*/
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: absolute;
  right: 0;
  transform: translateX(100%);
  animation: aparecer-derecha 1s forwards;
  transition: background-color 1s ease-out;
}
.slider-container {
  display: flex;
  width: calc(100% * 2);
  height: 100%;
  transition: transform 0.4s ease-out;
}
.slide {
  flex: 1 0 100%;
  align-items: center;
  justify-content: center;
  /* los valores de flex equivalen a:
  1 -> tendrán un factor de flexibilidad igual, se expandirán para ocupar todo el espacio disponible
  0 -> los elementos flexibles no pueden encogerse más allá de su tamaño inicial
  100% ->  cada elemento ocupará todo el ancho disponible dentro del contenedor*/
}
.tecnologias {
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  position: relative;
  top: 75%;
  .ov-icon {
    color: $color-texto;
  }
  .ov-icon:hover {
    fill: $color-texto;
  }
}
video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.video {
  width: 16rem;
  height: 10rem;
  left: 2.5rem;
}

@keyframes aparecer-derecha {
  from {
    display: none;
    transform: translateX(100%);
  }
  to {
    display: block;
    transform: translateX(0);
  }
}
@keyframes aparecer-izquierda {
  from {
    display: none;
    transform: translateX(-110%);
  }
  to {
    display: block;
    transform: translateX(0%);
  }
}

@keyframes aparecer-abajo {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}
@media screen and (min-width: 600px) {
  .foto-g {
    left: 10rem;
  }
  .foto-p {
    left: 24rem;
  }
  .video {
    width: 25rem;
    height: 15rem;
    left: 5rem;
  }

}

@media screen and (min-width: 800px) {
  .foto-g {
    width: 20rem;
    height: 20rem;
    //top: 15vh;
    left: 8rem;
  }
  .foto-p {
    width: 15rem;
    height: 15rem;
    top: 28vh;
    left: 27rem;
  }
  .video {
    width: 25rem;
    height: 15rem;
  }
}
@media screen and (min-height: 1300px) {
  .slider {
    padding-top: 8rem;
  }
  .video {
    top: 12vh;
  }
  .foto-g {
    left: 12rem;
  }
  .foto-p {
    left:30rem;
  }
}
@media screen and (min-width: 1000px) {
  .slider {
    padding-top: 2rem;
  }
  .foto-g {
    left: 20rem; /*15rem*/
  }
  .foto-p {
    left:40rem; /*33rem*/
  }

}
</style>