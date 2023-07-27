<template>
  <div class="layout">
          <section class="seccion-uno  d-flex flex-column align-items-center justify-content-center">
          <div class="circulo border d-flex align-items-center justify-content-center mb-3">Foto</div>
          <h3>Mariana Ramírez</h3>
          <small class="mb-3">Frontend developer</small>
          <div class="div">
            <h5><v-icon name="fa-user-alt" scale="1.2"></v-icon> Sobre Mí</h5>
          </div>
          <div class="div d-flex justify-content-center">
            <p>Soy Mariana, me he enfocado principalmente en practicar y sentar las bases del desarrollo frontend con Vue.js, sin embargo también siento interés por la naturaleza, el crochet y el backend, por lo cual actualmente me encuentro estudiando Node.js y Express.</p>
          </div>
          <div class="div">
            <h5><v-icon name="gi-smartphone" scale="1.2"></v-icon> Contacto</h5>
          </div>
          <div class="div d-flex flex-column justify-content-start ps-5">
              <p><v-icon name="fa-map-marker-alt"></v-icon>Colombia</p>
              <p><v-icon name="bi-facebook"></v-icon> marianahdgdg</p>
              <p><v-icon name="bi-github"></v-icon> rammarianahsh</p>
          </div>
          <div class="div">
            <h5><v-icon name="gi-skills" scale="1.2"></v-icon> Habilidades</h5>
          </div>
            <div class="div">
                <div class="tecnologias">
                <v-icon name="bi-github" scale="1.6"></v-icon>
                <v-icon name="la-html5" scale="1.6"></v-icon>
                <v-icon name="la-css3-alt" scale="1.6"></v-icon>
                <v-icon name="io-logo-javascript" scale="1.6"></v-icon>
                <v-icon name="ri-vuejs-line" scale="1.6"></v-icon>
                <v-icon name="fa-sass" scale="1.6"></v-icon>
                <v-icon name="si-bootstrap" scale="1.6"></v-icon> 
                <v-icon name="bi-git" scale="1.6"></v-icon>
              </div>
            </div>
      </section>
      <section class="seccion-dos">
          <div class="div-right">
            <h5><v-icon name="fa-hammer" scale="1.2"></v-icon> Experiencia</h5>
            
          </div>
          <div class="div-right">
            <h5><v-icon name="gi-bookmarklet" scale="1.2"></v-icon> Estudios</h5>
          </div>
      </section>
  </div>  

</template>
<script setup>
</script>
<style lang="scss" scoped>
.circulo {
  width: 10rem;
  height: 10rem;
  background-color: $color-blanco;
  border-radius: 50%;
}
.div {
  width: 100%;
  margin: 1rem 0;
}
.div-right {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 1rem 0;
}
h5 {
  text-align: left;
  width: 80%;
  padding: 0.2rem;
  padding-left: 2.5rem;
  background-color: $color-morado;
  color: $color-blanco;
  font-size: 1rem;
}
p {
  text-align: justify;
  width: 80%;
}
.layout {
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 4rem;
}
.seccion-uno, .seccion-dos {
  animation: aparecer 1s ease;
}

/*
.seccion-uno {
  margin: 3rem 0;
  width: 100vw;
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
}*/

.tecnologias {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  row-gap: 1rem;
}
.ov-icon:hover {
  fill: $color-texto;
}
@media screen and (min-width: 768px) {
  /*
  .seccion-uno {
    width: auto;
    height: auto;
  }
  
*/
.layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
}  
}


</style>