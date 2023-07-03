<template>
  <section class="container-fluid d-flex flex-column align-items-center">
    <section class="contenedor-layout d-flex flex-column align-items-center justify-content-center">
      <slot name="h1"></slot>
    </section>
    <section class="layout-body d-flex flex-column align-items-center">
      <slot name="body"></slot>
    </section>
  </section>
</template>

<style>
html, *, ::after, ::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.contenedor-layout {
  width: 80%;
  height: 15rem;
  background-color: red;
}
.layout-body {
  width: 80%;
  margin-top: 3rem;
  text-align: justify;
}
@media screen and (min-width: 800px) {
  .contenedor-layout {
    width: 70%;
  }
  .layout-body {
    width: 70%;
    margin-top: 2rem;
    text-align: justify;
}
}
</style>