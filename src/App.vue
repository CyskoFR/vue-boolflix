<template>
  <div id="app">
    <HeaderComponent/>
    <MainComponent/>
  </div>
</template>

<script>

import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';

export default {

  name: 'App',

  components: {

    HeaderComponent,
    MainComponent,

  }

}

</script>

<style lang="scss">

@import './assets/style/global.scss';

#app {
  background-color: rgb(178, 178, 178);
}

</style>