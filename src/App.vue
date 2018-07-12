<template>
  <div id="app">
    <!--
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>

    <vs-topbar vs-color="dark">
      <vs-button vs-color-text="rgb(255, 255, 255)" vs-color="rgba(255, 255, 255, 0.3)" vs-type="flat" vs-icon="menu"></vs-button>
      <h4>This is my cool application topbar title</h4>
      <vs-button vs-color-text="rgb(255, 255, 255)" vs-color="rgba(255, 255, 255, 0.3)" vs-type="flat" >Home</vs-button>
      <vs-button vs-color-text="rgb(255, 255, 255)" vs-color="rgba(255, 255, 255, 0.3)" vs-type="flat" >Documents</vs-button>
      <vs-button vs-color-text="rgb(255, 255, 255)" vs-color="rgba(255, 255, 255, 0.3)" vs-type="flat" vs-icon="more_vert" style="margin-left: auto;"></vs-button>
    </vs-topbar>
    -->

    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

body {
  margin: 0;
  padding: 0;
}

.mapboxgl-map {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  overflow: auto;
  z-index: -99;
}
</style>
