<template>
  <nav class="container-fluid">
    <div class="container-sm d-flex flex-row justify-content-between align-items-center p-3">
      <router-link to="/about">Home
        <!-- Colocar img-->
      </router-link> 
      <div class="raya-container" @click="showMenu">
        <div class="raya raya-1"></div>
        <div class="raya raya-2"></div>
      </div>
    </div>
  </nav>
  <section class="position-fixed menu">
    <!--<ul>
      <li>gsgsg</li>
      <li>jsjjs</li>
      <li>slslsl</li>
    </ul>-->
  </section>
  <router-view/>
</template>
<script setup>
const showMenu = () => {
  
  document.querySelector('.raya-container').classList.toggle('rotar-menu')
  document.querySelector('.raya-1').classList.toggle('mover-raya-1')
  document.querySelector('.raya-2').classList.toggle('mover-raya-2')

  if (document.querySelector('.menu').classList.contains('animacion-menu')) {
    document.querySelector('.menu').classList.remove('animacion-menu')
    document.querySelector('.menu').classList.add('animacion-menu-reverse')
  } else {
    document.querySelector('.menu').classList.remove('animacion-menu-reverse')
    document.querySelector('.menu').classList.add('animacion-menu')
  }
}
</script>
<style lang="scss">
html, ::after, ::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.menu {
  width: 5rem;
  height: 5rem;
  z-index: 90;
  color: white;
  background-color: black;
  border-radius: 50%;
  right: -1rem;
  top: -1rem;
  transition: opacity 1s ease;
  opacity: 0;
}
.rotar-menu {
  transform: rotate(45deg);
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
}
.mover-raya-2 {
  transform: translateY(-2.5px) !important;
}
nav {
  color: black;
  z-index: 99;
  position: fixed;
  a {
    font-weight: bold;
    color: black;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.raya-container {
  width: 2rem;
  height: 2rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 1s ease-in-out;
}
.raya {
  width: 1rem;
  height: 0.5px;
  border: thin solid white;
  border-radius: 1rem;
}
.raya-1 {
  margin-bottom: 0.3rem;
  transition: transform 0.5s ease-in-out;
}
.raya-2 {
  transition: transform 0.5s ease-in-out;
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
    width: 60rem;
    height: 60rem;
    right: -7rem;
    top: -3rem;
  }
  100% {
    width: 100vw;
    height: 100vh;  
    right: 0rem;
    top: 0rem;
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
    right: -5rem;
    top: -3rem;
    border-radius: 50%;
  }
  100% {
    width: 5rem;
    height: 5rem;
    top: 0rem;
    right: 0rem;
    border-radius: 50%;
  }
}

</style>
