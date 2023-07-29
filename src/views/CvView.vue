<template>
  <div class="layout">
          <div class="circulo border d-flex align-items-center justify-content-center mb-3"><v-icon name="fa-user-astronaut" scale="3.5"></v-icon></div>
          <h3>Mariana Ramírez</h3>
          <small class="mb-5">Frontend developer</small>
          <div class="contacto mb-5 d-flex flex-row justify-content-evenly align-items-center w-100">
              <p><v-icon name="fa-map-marker-alt"></v-icon>Colombia</p>
              <p><v-icon name="co-gmail"></v-icon> marianasmatos1</p>
              <p><v-icon name="bi-github"></v-icon> rammariana</p>
          </div>
          <p class="mb-5 parrafo">Hola, soy Mariana, me he enfocado principalmente en practicar y sentar las bases del desarrollo frontend con Vue.js, sin embargo también siento gran interés por la naturaleza, el crochet y el backend, por lo cual actualmente me encuentro estudiando Node.js y Express. Soy una persona perseverante, autodidacta, responsable con sus obligaciones, me gusta la tranquilidad, el respeto y el buen trato con mis compañeros.</p>
          <div class="div mb-5">
            <div class="habilidades">
              <h5><v-icon name="gi-bullseye" scale="1.2"></v-icon> Habilidades</h5>
              <p>Perseverante</p>
              <p>Autodidacta</p>
              <p>Responsable</p>
            </div>
            <div class="tecnologias">
                  <h5><v-icon name="gi-skills" scale="1.2"></v-icon> Tecnologías</h5>
                  <v-icon name="la-html5" scale="1.6"></v-icon>
                  <v-icon name="la-css3-alt" scale="1.6"></v-icon>
                  <v-icon name="io-logo-javascript" scale="1.6"></v-icon>
                  <v-icon name="ri-vuejs-line" scale="1.6"></v-icon>
                  <v-icon name="fa-sass" scale="1.6"></v-icon>
                  <v-icon name="si-bootstrap" scale="1.6"></v-icon> 
                  <v-icon name="bi-github" scale="1.6"></v-icon>
                <v-icon name="bi-git" scale="1.6"></v-icon>
            </div>
            </div>
          
            <h5 class="fw-bold mb-5"><v-icon name="fa-hammer" scale="1.2"></v-icon> Experiencia</h5>
          <div class="parrafo d-flex flex-column align-items-center mb-5">
            <p><b>Barraza Investors:</b> Me dediqué a crear la pagina web con todas sus vistas y a mantener comunicación con la base de datos mediante peticiones GET y PUT, utilizando HTML, CSS y JavaScript vanilla. Porteriormente hice una refactorización del código y añadí algunas funcionalidades nuevas con Vue.js.</p>
            <p><b>Poesía Vzla:</b> Estuve a cargo de la corrección de estilo y ortografía, así como de añadir nuevas entradas a la pagina.</p>
          </div>
          <h5 class="fw-bold mb-5"><v-icon name="gi-bookmarklet" scale="1.2"></v-icon> Estudios</h5>
          <ul class="parrafo">
            <li><v-icon name="gi-check-mark" scale="1.0"></v-icon> Diseño web responsivo <b>(freeCodeCamp)</b></li>
            <li><v-icon name="gi-check-mark" scale="1.0"></v-icon> Estructura de datos y algoritmos de JavaScript <b>(freeCodeCamp)</b></li>
            <li><v-icon name="gi-check-mark" scale="1.0"></v-icon> Curso de JavaScript <b>(JonMircha - Youtube)</b></li>
            <li><v-icon name="gi-check-mark" scale="1.0"></v-icon> Curso de Vue profesional <b>(Ademass)</b></li>
            <li><v-icon name="gi-check-mark" scale="1.0"></v-icon> Node.js y Express - Curso desde cero <b>(freeCodeCamp - Youtube)</b></li>
          </ul>
  </div>  

</template>
<script setup>
</script>
<style lang="scss" scoped>
.circulo {
  width: 10rem;
  height: 10rem;
  background-color: $color-morado;
  border-radius: 50%;
  color: $color-blanco;
}
.contacto {
  padding: 0 1rem;
}
.div {
  width: 100%;
  display: flex;
  padding: 0 1rem 0 0;
  flex-direction: row;
  justify-content: space-evenly;
}
.habilidades {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  p {
    text-align: center;
  }
}
.parrafo {
  text-align: justify;
  width: 80%;
}
.habilidades h5, .tecnologias h5 {
  font-weight: bold;
  margin: 2.5rem 0;
}
h5 {
  font-size: 1rem;
}
.layout {
  width: 85vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 4rem;
  margin: auto;
}
ul {
  text-align: justify;
  margin-bottom: 3rem;
  padding-left: 0;
  li {
    list-style: none;
  }
}
.tecnologias {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-evenly;
  row-gap: 1rem;
  justify-items: center;
  h5 {
    grid-column-start: 1;
    grid-column-end: 4;
  }
}
.ov-icon:hover {
  fill: $color-texto;
}
@media screen and (min-width: 768px) {
.layout {
  width: 70vw;
}  
}


</style>