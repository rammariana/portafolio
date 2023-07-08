<template>
<div class="slider border">
  <div class="slider-container">
    <div class="slide">
      <div class="img rojo">
        <div class="foto foto-g video">
          <video src="../assets/barraza-1.webm" autoplay="true" muted="true" loop="true"></video>
        </div>
        <div class="foto foto-p">
          <img src="../assets/barraza-2.png" alt="Barraza Investors">
        </div>
        <div class="button">
          <button>Demo</button>
          <button>Code</button>
        </div>
      </div>
    </div>
    <div class="slide">
      <div class="img verde">
        <div class="foto foto-g">
          <img src="../assets/tienda-1.png" alt="IDtly">
        </div>
        <div class="foto foto-p">
          <img src="../assets/tienda-2.png" alt="IDtly">
        </div>
        <div class="button">
          <button>Demo</button>
          <button>Code</button>
        </div>       
      </div>
    </div>
    <div class="slide">
      <div class="img morado">
        <div class="foto foto-g">
          <img src="../assets/laika-1.png" alt="Laika copia">
        </div>
        <div class="foto foto-p">
          <img src="../assets/laika-2.png" alt="Laika copia">
        </div>
        <div class="button">
          <button>Demo</button>
          <button>Code</button>
        </div>      
      </div>
    </div>
    <div class="slide">
      <div class="img amarillo">
        <div class="foto foto-g">
          <img src="../assets/tictac-1.png" alt="Tic-Tac">
        </div>
        <div class="foto foto-p">
          <img src="../assets/tictac-2.png" alt="Tic-Tac">
        </div>
        <div class="button">
          <button>Demo</button>
          <button>Code</button>
        </div>       
      </div>
    </div>
    <div class="slide">
      <div class="img rosa">
        <div class="foto foto-g">
          <img src="../assets/poke-1.png" alt="Pokememoria">
        </div>
        <div class="foto foto-p">
          <img src="../assets/poke-2.png" alt="Pokememoria">
        </div>
        <div class="button">
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
onMounted(() => {
  const slider = document.querySelector(".slider");
  const sliderContainer = document.querySelector(".slider-container");
  const slides = document.querySelectorAll(".slide");
  // Poniendo animacion inicial (si hay video elominarla)

  sliderContainer.children[0].childNodes[0].children[0].classList.add('aparecer-derecha')
  sliderContainer.children[0].childNodes[0].children[1].classList.add('aparecer-derecha')
  sliderContainer.children[0].childNodes[0].children[1].style.animationDelay = '0.2s';
    // Reiniciando la animacion
  setTimeout(() => {
    sliderContainer.children[0].childNodes[0].children[0].classList.remove('aparecer-derecha')
    sliderContainer.children[0].childNodes[0].children[1].classList.remove('aparecer-derecha')
  }, 2000);

/*** ESTABLECIENDO POSICION ACTUAL Y ATRAPANDO VALORES DEL TOUCH***/
  const slideWidth = slides[0].clientWidth;
  let currentIndex = 0;
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
    //condición que vigila si estamos en la primera diapo
    //y desencadeno el evento move ...me lleva al final
    if (currentIndex === 0 && event && distance.value > 0) {
      currentIndex = slides.length;
    //estilos
      sliderContainer.style.transition = "none";
      sliderContainer.style.transform = `translateX(-${
      currentIndex * slideWidth
    }px)`;
      sliderContainer.offsetHeight;
      sliderContainer.style.transition = "transform 1s";
    }
  });

  slider.addEventListener("touchend", () => {
  //cuando el evento touch termina sumo o resto a las variables
    if (distance.value > 0 && currentIndex) {
      currentIndex--;
      // Animacion transicion de las diapositivas
      sliderContainer.children[currentIndex].childNodes[0].children[0].classList.add('aparecer-izquierda')
      sliderContainer.children[currentIndex].childNodes[0].children[1].classList.add('aparecer-izquierda')
      //sliderContainer.children[currentIndex].childNodes[0].children[1].style.animationDelay = '0.2s';
      // Reiniciando la animacion
      setTimeout(() => {
        sliderContainer.children[currentIndex].childNodes[0].children[0].classList.remove('aparecer-izquierda')
        sliderContainer.children[currentIndex].childNodes[0].children[1].classList.remove('aparecer-izquierda')
      }, 2000);

    } else if (distance.value < 0 && currentIndex < slides.length) {
    currentIndex++;
      // Haciendo que el carrusel sea infinito
      /* Si no tiene hijos, significa que estamos 
      al final así que volvemos a poner la variable en 0 */
    if (!sliderContainer.children[currentIndex]) {
      currentIndex = 0
      sliderContainer.style.transition = "none";
      sliderContainer.style.transform = `translateX(100px)`;
      sliderContainer.offsetHeight;
      sliderContainer.style.transition = "transform 1s";
     // Añadiendo animacion cuando se devuelve a la primera diapositiva
      setTimeout(() => {
        sliderContainer.children[currentIndex].childNodes[0].children[0].classList.add('aparecer-derecha')
      }, 1000);
    }
    
    sliderContainer.children[currentIndex].childNodes[0].children[0].classList.add('aparecer-derecha')
    sliderContainer.children[currentIndex].childNodes[0].children[1].classList.add('aparecer-derecha')
    sliderContainer.children[currentIndex].childNodes[0].children[1].style.animationDelay = '0.2s';
    // Reiniciando la animacion
    setTimeout(() => {
      sliderContainer.children[currentIndex].childNodes[0].children[0].classList.remove('aparecer-derecha')
      sliderContainer.children[currentIndex].childNodes[0].children[1].classList.remove('aparecer-derecha')
    }, 2000);
  }
  sliderContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

  //reinicio variables
  startPoint.value = null;
  touchMovePoint.value = null;
  distance.value = null;
});

})
</script>
<style lang="scss">
.aparecer-derecha {
  animation: aparecer-derecha 1.5s forwards;
  /*transition: all 0.5s ease-out;*/
}
.aparecer-izquierda {
  animation: aparecer-izquierda 1.5s forwards;
  /*transition: transform 1s;*/
}
.button {
  width: 50%;
  display: flex;
  justify-content: space-around;
  position: relative;
  top: 85%;
  button {
    width: 6.5rem;
    height: 3rem;
    border: thin solid white;
    border-radius: 2rem;
  }
}
.foto {
  position: absolute;
  transition: display 2s ease; 
  box-shadow: 1px 2px 9px rgba(37, 36, 36, 0.822);
}
.foto-g {
  width: 15rem;
  height: 15rem;
  top: 8rem;
  left: 3.5rem;
  //animation: aparecer-derecha 2s forwards;
}
.foto-p {
  width: 10rem;
  height: 10rem;
  top: 16rem;
  left: 10rem;
  //animation: aparecer-derecha 2s forwards;
}
.img {
  height: 100%;
  position: relative;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.rojo { background-color: red;}
.rosa {background-color: pink;}
.amarillo{background-color: yellow;}
.verde {background-color: green;}
.morado{background-color: purple;}
.slider {
  padding-top: 4rem;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: absolute;
  right: 0;
  transform: translateX(100%);
  animation: aparecer-derecha 1s forwards;
}
.slider-container {
  display: flex;
  width: calc(100% * 2);
  height: 100%;
  transition: transform 0.4s ease-out;
}
.slide {
  flex: 1 0 100%;
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
</style>