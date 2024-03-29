<template>
  <div class="has-background-light">
    <div 
      class="subpage-intro-container" 
      :class="{ 'push-up': $route.path == '/find' }"
      style="position: relative;"
      :style="backgroundImageStyle"
    >
      <div class="wave" />
    </div>
  </div>
  <div class="subpage-intro-text">
    <Breadcrumbs :breadcrumbs="breadcrumbs" />
    <h1 class="titled mt-0 mb-0 has-text-centered">
      {{ title }}
    </h1>
    <p class="has-text-centered mt-4">
      {{ text }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'
import Breadcrumbs from "@/components/sections/Breadcrumbs.vue"

export default defineComponent({
  name: "SubpageLanding",

  components: {
    Breadcrumbs
  },

  props: {
    breadcrumbs: {
      type: Array as PropType<Array<typeof Breadcrumbs>>,
      required: true
    },
    backgroundImage: {
      type: String,
      default: "",
      required: false
    },
    title: {
      type: String,
      default: 'Titre',
      required: true
    },
    text: {
      type: String,
      default: 'Text',
      required: true
    }
  },

  setup(props) {
    let backgroundImageURL = computed(() => {
      let img = props.backgroundImage
      if (img == "") {
        let randNum = Math.floor(Math.random() * (26 - 1 + 1)) + 1;
        img = `img/${randNum}.jpg`
      }
      console.log(img)
      return require(`@/assets/${img}`)
    })

    let backgroundImageStyle = computed(() => {
      return `backgroundImage: url(${backgroundImageURL.value})`
    })

    return {
      backgroundImageStyle
    }
  }
});
</script>

<style lang="scss" scoped>

.subpage-intro-container {
  width: 100vw;
  height: 70vh;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: contain;
  background-position: center center;

  @include bp(mobile) {
    height: 60vh;
  }
}

.push-up {
  background-position-y: -20vh;

  @include bp(mobile-and-tablet) {
    background-position-y: -10vh;
    background-position-x: -30vh;
  }
}

.subpage-intro-text {
  background-color: $main-color;
  color: #fff;
  min-height: 30vh;
  width: 100vw;
  padding-top: 3rem;
  padding-bottom: 2em;


  @include bp(mobile) {
    height: 40vh;
    padding-top: 4rem;
  }
}

.wave {
  position: absolute;
  height: 69px;
  width: 100%;
  background: transparent;
  bottom: 2%;
}

.wave::before {
  content: "";
  display: block;
  position: absolute;
  width: 115%;
  height: 109%;
  background-color: $main-color;
  right: -1.5%;
  top: 95%;
  border-radius: 100% 50%;

  @include bp(mobile) {
    width: 200%;
  }

  @include bp(tablet) {
    top: 60%;
    border-radius: 80% 60%;
  }
}
</style>
