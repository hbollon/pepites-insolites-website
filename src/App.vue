<template>
  <Header/>
  <router-view/>
  <Footer/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/sections/Header.vue';
import Footer from './components/sections/Footer.vue'

export default defineComponent({
  name: 'App',
  components: {
    Header,    
    Footer,    
  },
});
</script>

<style lang="scss">
#app {
  width: 100%;
  max-width: 100vw;
  overflow-wrap: break-word;
  overflow-x: hidden;
}

.route-enter-from {
  opacity: 0;
  transform: translateY(100px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-to {
  opacity: 0;
  transform: translateY(-100px);
}

.route-leave-active {
  transition: all 0.3s ease-in;
}
</style>