<template>
  <div id="app" v-cloak>
    <div class="app-bg"></div>
    <HeaderComponent/>
    <MainComponent/>
    <transition name="fade">
      <div id="pagetop" v-show="scY > 300" @click="toTop">
        <i class="fa-solid fa-chevron-up"></i>
      </div>
    </transition>
    
  </div>
</template>

<script>

import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';

export default {

  name: 'App',

  data() {

      return {
        scTimer: 0,
        scY: 0,
      };

    },

  components: {

    HeaderComponent,
    MainComponent,

  },

  mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll: function () {
        if (this.scTimer) return;
        this.scTimer = setTimeout(() => {
          this.scY = window.scrollY;
          clearTimeout(this.scTimer);
          this.scTimer = 0;
        }, 100);
      },
      toTop: function () {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      },
    },

}

</script>

<style lang="scss">

@import './assets/style/global.scss';

#app {
  position: relative;
  height: 100%;
}

.app-bg {
  position: absolute;
  background-color: black;
  background-image: url(./assets/img/logo-pattern.png);
  filter: blur(1.2px);
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

#pagetop {
  position: fixed;
  right: 20px;
  bottom: 20px;
  color: #dc1a28;
  background-color: rgba(255, 255, 255, 0.3);
  box-shadow: inset 0 0 20px rgba(255, 166, 170, 0.1);
  outline: 1px solid;
  outline-color: rgba(255, 166, 170, .5);
  transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
  text-shadow: 1px 1px 3px black;
  border-radius: 8px;
  cursor: pointer;
  padding: 6px 10px;
}

#pagetop:hover {
    color: white;
    outline-color: rgba(255, 166, 170, 0);
    outline-offset: 8px;
    text-shadow: 1px 1px 2px #427388; 
    background-color: #dc1a27dd;
}

</style>