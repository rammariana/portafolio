<template>
  <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
    <!-- Diapositiva 1-->
    <div class="carousel-item active">
      <div class="cuadrado">
        <h3>Barraza Invertors</h3>
        <video src="../assets/barraza-1.webm" autoplay="true" muted="true" loop="true" class="d-block video"></video>
        <img src="../assets/barraza-2.png" alt="Barraza Investors" class="d-block foto-p">
        <div class="tecnologias">
          <v-icon name="la-html5" scale="1.8"></v-icon>
          <v-icon name="la-css3-alt" scale="1.8"></v-icon>
          <v-icon name="ri-vuejs-line" scale="1.8"></v-icon>
          <v-icon name="si-bootstrap" scale="1.8"></v-icon>
        </div>
        <div class="btn-container">
          <button class="button">
            <span class="button-text"><a href="https://barrazainvestors.netlify.app/home">Demo</a></span>
          </button>
           <button class="button">
            <span class="button-text"><a href="https://github.com/rammariana/barraza-investors">Code</a></span>
          </button>
        </div>
      </div>
    </div>
    <!-- Diapositiva 2-->
    <div class="carousel-item">
      <div class="cuadrado">
        <h3>Tienda de modas</h3>
        <img src="../assets/tienda-1.png" alt="IDtly" class="d-block foto-g">
        <img src="../assets/tienda-2.png" alt="IDtly" class="d-block foto-p">
        <div class="tecnologias">
          <v-icon name="la-html5" scale="1.8"></v-icon>
          <v-icon name="la-css3-alt" scale="1.8"></v-icon>
          <v-icon name="fa-sass" scale="1.8"></v-icon>
        </div> 
        <div class="btn-container">
          <button class="button">
            <span class="button-text"><a href="https://idtlyshop.netlify.app">Demo</a></span>
          </button>
          <button class="button">
            <span class="button-text"><a href="https://github.com/rammariana/tienda-sass">Code</a></span>
          </button>
        </div>
      </div>
    </div>
    <!-- Diapositiva 3-->
    <div class="carousel-item">
      <div class="cuadrado">
        <h3>Balto (copia de Laika)</h3>
        <img src="../assets/laika-1.png" alt="Balto" class="d-block foto-g">
        <img src="../assets/laika-2.png" alt="Balto" class="d-block foto-p">
        <div class="tecnologias">
          <v-icon name="la-html5" scale="1.8"></v-icon>
          <v-icon name="la-css3-alt" scale="1.8"></v-icon>
          <v-icon name="si-bootstrap" scale="1.8"></v-icon>
        </div> 
        <div class="btn-container">
          <button class="button">
            <span class="button-text"><a href="https://balto.netlify.app">Demo</a></span>
          </button>
           <button class="button">
            <span class="button-text"><a href="https://github.com/rammariana/laika">Code</a></span>
          </button>
        </div>
      </div>
    </div>
      <!-- Diapositiva 4-->
    <div class="carousel-item">
      <div class="cuadrado">
        <h3>Tic-tac-toe</h3>
        <img src="../assets/tictac-1.png" alt="Tic-Tac" class="d-block foto-g">
        <img src="../assets/tictac-2.png" alt="Tic-Tac" class="d-block foto-p">
        <div class="tecnologias">
          <v-icon name="la-html5" scale="1.8"></v-icon>
          <v-icon name="la-css3-alt" scale="1.8"></v-icon>
          <v-icon name="io-logo-javascript" scale="1.8"></v-icon>
        </div> 
        <div class="btn-container">
          <button class="button">
            <span class="button-text"><a href="https://tictactoesquare.netlify.app">Demo</a></span>
          </button>
           <button class="button">
            <span class="button-text"><a href="https://github.com/rammariana/tic-tac-toe">Code</a></span>
          </button>
        </div>
      </div>
    </div>
      <!-- Diapositiva 5-->
    <div class="carousel-item">
      <div class="cuadrado">
        <h3>Pokememoria</h3>
        <img src="../assets/poke-1.png" alt="Pokememoria" class="d-block foto-g">
        <img src="../assets/poke-2.png" alt="Pokememoria" class="d-block foto-p">
        <div class="tecnologias">
          <v-icon name="la-html5" scale="1.8"></v-icon>
          <v-icon name="la-css3-alt" scale="1.8"></v-icon>
          <v-icon name="io-logo-javascript" scale="1.8"></v-icon>
        </div>
        <div class="btn-container">
          <button class="button">
            <span class="button-text"><a href="https://pokememoria.netlify.app">Demo</a></span>
          </button>
           <button class="button">
            <span class="button-text"><a href="https://github.com/rammariana/memoria">Code</a></span>
          </button>
        </div>
      </div>
    </div>

  </div>
</div>
</template>
<!--<script setup>
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
  }, 8000);
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
-->
<style lang="scss" scoped>
.btn-container {
  width: 100%;
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
  a {
    text-decoration: none;
    color: $color-blanco;
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
// Modificando estilos del carrusel de bootstrap
.carousel-item-left.active .cuadrado .foto-p, .carousel-item-next .cuadrado .foto-p {
  animation: aparecer-derecha 2s ease;
  -moz-animation: aparecer-derecha 2s ease;
  transition: 2s;
  animation-delay: .3s;
}
.carousel-item-right.active .cuadrado .foto-p,
.carousel-item-prev .cuadrado .foto-p {
  animation: aparecer-izquierda 2s ease;
  -moz-animation: aparecer-izquierda 2s ease;
  transition: 2s;
  animation-delay: .1s;
}
.carousel-item-left.active .cuadrado .foto-g, .carousel-item-next .cuadrado .foto-g, .carousel-item-left.active .cuadrado .video, .carousel-item-next .cuadrado .video {
  animation: aparecer-derecha 1s ease;
  -moz-animation: aparecer-derecha 1s ease;
  transition: 2s;
}
.carousel-item-right.active .cuadrado .foto-g,
.carousel-item-prev .cuadrado .foto-g, .carousel-item-right.active .cuadrado .video, .carousel-item-prev .cuadrado .video  {
  animation: aparecer-izquierda 1s ease;
  -moz-animation: aparecer-izquierda 1s ease;
  transition: 2s;
}
.carousel-item-left,
.carousel-item-right {
  transform: translateX(0);
  transition: 2s;
}
.cuadrado {
  position: relative;
  width: 100vw;
  height: 100vh;
  h3 {
    top: 10%;
    position: inherit;
  }
}
.foto-g, .foto-p {
  position: absolute;
  box-shadow: 1px 0px 9px 0.5px $color-negro;
  transition: 5s;
}
.foto-g {
  width: 12rem;
  height: 12rem;
  top: 8rem;
  left: 10%;
}
.foto-p {
  width: 10rem;
  height: 10rem;
  top: 15rem;
  left: 45%;  
}
.tecnologias {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  position:absolute;
  top: 75%;
  .ov-icon {
    color: $color-texto;
  }
  .ov-icon:hover {
    fill: $color-texto;
  }
}
video {
  position: absolute;
  width: 16rem;
  height: 10rem;
  object-fit: cover;
  top: 8rem;
  left: 10%;  
  box-shadow: 1px 0px 9px 0.5px $color-negro;
}

@media screen and (min-width: 600px) {
  .foto-g {
    left: 10rem;
    width: 15rem;
    height: 15rem;
  }
  .foto-p {
    left: 24rem;
    width: 11rem;
    height: 11rem;
  }
  .video {
    width: 22rem;
    height: 12rem;
    left: 12%;
  }
}
@media screen and (min-width: 800px) {
  .foto-g {
    left: 35%;
  }
  .foto-p {
    left: 50%;
  }
  .video {
    left: 35%;
  }
}
</style>
