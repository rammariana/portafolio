<template>
  <div class="layout">
    <section class="contenedor-layout">
      <slot name="seccion1"></slot>
      <slot name="seccion2"></slot>
    
    </section>
    <footer class="footer">
      <small>Este espacio fue creado con Vue, Sass y Boostrap por Mariana Ramírez. Gracias por visitarme.</small>
    </footer>
  </div>
</template>
<style lang="scss" scoped>  
html, *, ::after, ::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.contenedor-layout {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.footer {
  width: 100%;
  bottom: 0;
  color: $color-texto;
  padding: 0 1rem 0.5rem 1rem;
}
.layout {
  max-width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
}
small {
  font-size: 0.8rem;
}
@media screen and (min-width: 768px) {
  .contenedor-layout{
    display: grid;
    grid-template-columns: 2fr 3fr;
  }
    .layout {
  height: 100vh;
}


}
</style>