<template>
  <div>
    <div v-if="participants.length == 0">
      <p class="disclaimer">
          Приложение разработано для случайного выбора победителей среди участников конкурсов и розыгрышей призов, проводимых компанией ИКЕА.
          <br>
          Исходный код приложения находится 
          <a style="color: #fff" href="https://github.com/ikea-family-russia/ikea-rndmzr">здесь</a>
      </p>
      <label for="file" class="circle-container">
        <div class="outer-ring"></div>
        <div class="circle">
          <div class="front">
            <p><b>Выбрать файл</b></p>
          </div>
          <div class="back">
            <img class="back-logo" src="../../src/assets/csv.png"/>
          </div>
        </div>
      </label>

      <input id="file"  accept=".csv" type="file" @change="onFileChange" style="display:none">
      <br>
      <p style="width: 50%; margin-left: auto; margin-right: auto; opacity: 0.6">
        <small>
          Выбранный файл должен иметь формат .csv и содержать список мобильных телефонов в формате 79ХХХХХХХХХ. Каждый номер телефона должен начинаться с новой строки. 
        </small>  
      </p>
    </div>


    <div v-if="participants.length > 0 && winners.length == 0">
      <br><br>
      <div class="title">
        ВСЕГО УЧАСТНИКОВ
      </div>
      <div class="subtitle">
        {{participants.length}}
      </div>
      <br><br>
      <div class="title">
        ПОБЕДИТЕЛЕЙ
      </div>
      <div class="subtitle">
         <input min="1" id="number" type="number" v-model="number"/>
      </div>

      <div @click="generateWinners()" class="circle-container">
        <div class="outer-ring blue"></div>
        <div class="circle">
          <div class="front blue">
            <p style="margin-top: 3.2em"><b>Определить победителей</b></p>
          </div>
          <div class="back blue">
            <img class="back-logo" src="../../src/assets/trophy.png"/>
          </div>
        </div>
      </div>
    </div>
    <div v-if="winners.length != 0">
      <br>
      <div class="title">ПОБЕДИТЕЛИ</div>
      <br><br>
      <ul class="winners">
        <li v-bind:key="item" v-for="item in formattedWinners">
          {{item}}
        </li>
      </ul>
      <Firework v-if="winners.length>0"/>
      <a v-if="showFullWinners==false" @click="showWinners" style="color: #fff; cursor: pointer; margin: 2em 0;">Показать полный список</a>
      <div v-if="showFullWinners==true">
        <div v-bind:key="item" v-for="item in winners">{{item}}</div>
      </div>
    </div>
  </div>
</template>

<script>

import Firework from './Firework.vue';

export default {
  name: 'Rndmzr',
  components: {
    Firework
  },
  data(){
    return {
      participants: [],
      winners: [],
      formattedWinners: [],
      number: 1,
      showFullWinners: false
    }
  },
  methods: {
      onFileChange(event){
        var vue = this;
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.onload = function(e) {
            vue.setParticipants(e.target.result);
        };
        reader.readAsText(file);
      },
      setParticipants(text){
        this.participants = text.split('\n');
      },
      shuffle(text){
        var number = text.split('\n');
        return number;
      },
      generateWinners(){
        for (let i=0; i<this.number; i++){
          var n = this.randomInt(0, this.participants.length-1);
          var winner = this.participants[n];
          this.winners.push(winner);
          var formattedWinner = `+${winner.substr(0,1)} (${winner.substr(1,3)}) ***-${winner.substr(7,2)}-${winner.substr(9,2)}`;
          this.formattedWinners.push(formattedWinner);
          this.participants.splice(n, 1);
        }
      },
      randomInt(min, max){
        return Math.floor(Math.random() * (max - min) ) + min;
      },
      showWinners(){this.showFullWinners = true}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.winners {
  list-style: none;
  padding: 1em;
  /*background-color: rgb(139, 209, 139);*/
  font-weight: bolder;
  border-radius: .5em;
}

.winners li {
  display: inline-block;
  width: 30%;
  padding: .5em;
}
.title {
  font-size: 1.5em;
  font-weight: bolder;
}
.subtitle {
  font-size: 4em;
  font-weight: bolder;
}

input#number {
  font-size: 1em;
  width: 2em;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: bolder;
  margin: 0.5em 0.5em 1em .5em;
  text-align: center;
  border-radius: .2em;
  border: 4px solid #ddd;
}

input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}

.disclaimer {
  margin: 3em 3em 4em 3em;
}

.circle-container {
  display: block;
	position: relative;
	perspective: 1000;	
	margin: 0 auto;	
}
		
.circle-container:hover .circle {
	transform: rotate3d(45, 45, 0, 180deg);
}
		
.circle-container:hover .outer-ring {
	transform: rotate3d(45, 0, 0, 180deg);
}

.circle-container:hover .outer-outer-ring {
	transform: rotate3d(0, 45, 0, 180deg);
}
		
.circle-container, .front, .back {
	width: 175px;
	height: 175px;
	background-color: rgba(0,0,0,0);
}
		
.circle, .outer-ring, .outer-outer-ring {
	transition: 0.5s;
	transform-style: preserve-3d;
	transition-timing-function: cubic-bezier(0.785, 0.135, 0.150, 0.860);
}
		
.circle {
	position: relative;
	width: 175px;
	height: 175px;
  cursor: pointer;
}
		
.front, .back {
	border-radius: 50%;
	box-shadow: 0px 0px 20px rgba(0,0,0,0.4);
	backface-visibility: hidden;
	position: absolute;
	top: 0;
	left: 0;
}
		
.front {
	background-color: rgb(244, 214, 76);
	z-index: 2;
}
		
.front p {
	margin-top: 3.8em;
	font-family: cabin, sans-serif;
	font-weight: 1000;
	font-size: 1.2em;
	text-align: center;
  color: #555;
}
		
.back {
	transform: rotate3d(45,45,0,180deg);
	background-color: rgb(244, 214, 76);
}
		
.back-logo {
	width: 30%;
	display: block;
	margin: 3.8em auto;
}
		
.outer-ring {
	position: absolute;
	top: -10px;
	left: -10px;
	border-radius: 50%;
	border: 2px solid rgb(244, 214, 76);
	width: 191px;
	height: 191px;
	background-color: rgba(255,255,255,0);
	box-shadow: 0px 0px 20px rgba(0,0,0,0.4);
}

.outer-ring.blue {
  border: 2px solid rgb(32, 89, 158);
}

.front.blue, .back.blue {
  background-color:rgb(32, 89, 158);
}

.front.blue p {
  color: #fff;
}

.outer-outer-ring {
	position: absolute;
	top: -20px;
	left: -20px;
	border-radius: 50%;
	border: 2px solid rgb(244, 214, 76);
	width: 211px;
	height: 211px;
	background-color: rgba(255,255,255,0);
	box-shadow: 0px 0px 20px rgba(0,0,0,0.4);
}
</style>
