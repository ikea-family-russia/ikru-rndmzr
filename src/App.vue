<template>
  <div class="wrapper" id="app">
    <div class="main-container">
      <a href="http://ikea.ru" target="_blank"><img width="100" src="https://www.ikea.com/ext/ikeagateway/statics/logo.svg"></a>
      <Rndmzr/>
    </div>
  </div>
</template>

<script>
import Rndmzr from './components/Rndmzr.vue'

export default {
  name: 'app',
  components: {
    Rndmzr
  }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  min-height: 100%;
}

.wrapper {
  height: 100%;
}

.main-container {
  height: 100%;
  width: 60vw;

  color: #fff;
  margin-left: auto;
  margin-right: auto;
  background-color: rgba(32, 89, 158, .9);
  border-radius: .5em;
  padding: 1em 1em 4em 1em;
}

footer {
  margin-top: -120px;
  height: 60px;
}

body {
  border-top: 1em solid rgb(32, 89, 158);
  background: url(assets/bg.webp);
  background-size: cover;
}

#app {
  font-family: 'Verdana', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
