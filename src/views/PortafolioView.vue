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
      <div class="img rojo">
        <div class="foto foto-g video">
          <video src="../assets/barraza-1.webm" autoplay="true" muted="true" loop="true"></video>
        </div>
        <div class="foto foto-p">
          <img src="../assets/barraza-2.png" alt="Barraza Investors">
        </div>        
        <div class="botton">
          <button>Demo</button>
          <button>Code</button>
        </div>
      </div>
    </div>
    <div class="slide" id="1">
      <div class="img verde">
        <div class="foto foto-g">
          <img src="../assets/tienda-1.png" alt="IDtly">
        </div>
        <div class="foto foto-p">
          <img src="../assets/tienda-2.png" alt="IDtly">
        </div>
        <div class="botton">
          <button>Demo</button>
          <button>Code</button>
        </div>       
      </div>
    </div>
    <div class="slide" id="2">
      <div class="img morado">
        <div class="foto foto-g">
          <img src="../assets/laika-1.png" alt="Laika copia">
        </div>
        <div class="foto foto-p">
          <img src="../assets/laika-2.png" alt="Laika copia">
        </div>
        <div class="botton">
          <button>Demo</button>
          <button>Code</button>
        </div>      
      </div>
    </div>
    <div class="slide" id="3">
      <div class="img amarillo">
        <div class="foto foto-g">
          <img src="../assets/tictac-1.png" alt="Tic-Tac">
        </div>
        <div class="foto foto-p">
          <img src="../assets/tictac-2.png" alt="Tic-Tac">
        </div>
        <div class="botton">
          <button>Demo</button>
          <button>Code</button>
        </div>       
      </div>
    </div>
    <div class="slide" id="4">
      <div class="img rosa">
        <div class="foto foto-g">
          <img src="../assets/poke-1.png" alt="Pokememoria">
        </div>
        <div class="foto foto-p">
          <img src="../assets/poke-2.png" alt="Pokememoria">
        </div>
        <div class="botton">
          <button>Demo</button>
          <button>Code</button>
        </div>        
      </div>
    </div>
  </div>
</div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
//
let id = ref(0)
// rojo, naranja, amarillo, celeste, verde
let background = ['rgb(181, 27, 226)', 'rgb(244, 112, 27)', 'rgb(250, 212, 18)', 'rgb(122, 224, 200)', 'rgb(226, 27, 27)']
let colorBarraActiva = 'rgba(225, 225, 225)'
let colorBarraPasiva= 'rgba(225, 225, 225, 0.418)'
  onMounted(() => {
  const barra = document.querySelectorAll('.barra')
  let isMobile = /iPhone|iPad|iPod|Android|BlackBerry|Windows Phone/i.test(navigator.userAgent);
  // Expresion regular para ver si el dispositivo es movil o pc

  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll('.slide')
  const sliderContainer = document.querySelector(".slider-container");
  const slideWidth = slides[0].clientWidth;

  
  // Estableciendo fondo, posicion y animacion inicial
  slider.style.backgroundColor = background[0]
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
    slider.style.backgroundColor = background[id.value]
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
        slider.style.backgroundColor = background[id.value]
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
        slider.style.backgroundColor = background[id.value]
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
        slider.style.backgroundColor = background[id.value]
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
  const slider = document.querySelector('.slider');
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
  slider.style.backgroundColor = background[id.value]
  // Actualizando la posicion de la barra activa
  if (barra[id.value]) {
    barra[id.value].style.backgroundColor = colorBarraActiva
  }

}
</script>
<style lang="scss">
* {
  color: white;
}
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
  background-color: rgba(225, 225, 225, 0.418);
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
.botton {
  width: 50%;
  display: flex;
  justify-content: space-around;
  position: relative;
  top: 85%;
  button {
    background-color: transparent;
    width: 6.5rem;
    height: 3rem;
    border: thin solid white;
    border-radius: 2rem;
  }
}
.buttons {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 9;
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
    width: 22rem;
    height: 22rem;
    top: 15vh;
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
@media screen and (min-width: 1200px) {
  .slider {
    padding-top: 8rem;
  }
  .foto-g {
    left: 15rem;
  }
  .foto-p {
    left:33rem;
  }

}
</style>