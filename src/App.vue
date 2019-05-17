<template>
  <div class="wrapper" id="app">
    <div class="main-container">
      <a href="http://ikea.ru" target="_blank"><img width="150" src="../src/assets/logoikea.png"></a>
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
  background: url(assets/bg.jpg);
  background-size: cover;
  background-attachment: fixed;
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
