<template>
  <div class="home">
    <div style="height: 100vh; position: relative">
      <header class="video-container">
        <video
          src="@/assets/home/intro-video-compressed.mp4"
          autoplay
          loop
          playsinline
          muted
          class="start-desktop"
        />
        <img src="@/assets/home/house3.svg" class="start-tablet" alt="House" />
        <img src="@/assets/home/house2.svg" class="start-mobile" alt="House" />
        <div class="video-text-container">
          <img class="image" src="@/assets/favicon-white.png" alt="Logo" />
          <h1>{{ $t("startpage.intro.text") }}</h1>
          <p>{{ $t("startpage.intro.slogan") }}</p>
          <div class="buttons mt-6">
            <a
              class="button outlined-button is-white is-outlined"
              href="#scrollDown"
              style="margin-right: 10px"
            >
              {{ $t("nav.readMore") }}
            </a>
            <a class="button is-white" @click="routerPush('booking')">
              {{ $t("nav.book") }}
              &nbsp;
              <font-awesome-icon icon="shopping-bag" />
            </a>
          </div>
        </div>
      </header>
    </div>
    <div id="scrollDown"/>
    <HomeSections />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import RouterNavigator from "@/mixins/RouterNavigator";
import HomeSections from "@/components/home/Sections.vue";

export default defineComponent({
  name: "Home",

  components: {
    HomeSections,
  },

  setup() {
    let { routerPush } = RouterNavigator();
    onMounted(() => {
      let mobilevideo = document.getElementsByTagName("video")[0];
      mobilevideo.setAttribute("playsinline", "");
      mobilevideo.setAttribute("muted", "");
    });

    return {
      routerPush,
    };
  },
});
</script>

<style lang="scss" scoped>
@mixin coverer {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(
    45deg,
    rgba(0, 77, 64, 0.6) 0%,
    rgba(0, 77, 64, 0.9) 50%,
    rgba(0, 77, 64, 0.6) 100%
  );
  background-size: 300% 300%;

  @include bp(tablet) {
    background: linear-gradient(
      180deg,
      rgba(0, 77, 64, 1) 0%,
      rgba(0, 77, 64, 0.7) 50%,
      rgba(0, 77, 64, 0.2) 100%
    );
  }

  @include bp(mobile) {
    background: linear-gradient(
      180deg,
      rgba(0, 77, 64, 1) 0%,
      rgba(0, 77, 64, 0.7) 50%,
      rgba(0, 77, 64, 0.2) 100%
    );
  }
}

.video-container {
  width: 100vw;
  height: 100vh;
  position: absolute;
  text-align: center;
  &,
  video,
  .video-text-container {
    @include coverer;
  }
  video {
    background: $main-color;
    object-fit: cover;
  }
  .video-text-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    img {
      height: 40px;
    }

    h1,
    p {
      color: $white-text-color;
    }
    h1 {
      letter-spacing: 10px;
      font-weight: 100;
      text-transform: uppercase;
      background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 1) 60%,
        rgba(255, 255, 255, 0) 75%
      );
      background-clip: text;
      -webkit-text-fill-color: transparent;
      line-height: 1.25em;
      font-size: 6em;

      @include bp(mobile) {
        font-size: 3em;
      }

      @include bp(mobile-and-tablet) {
        background: linear-gradient(
          to bottom,
          rgba(255, 255, 255, 1) 75%,
          rgba(255, 255, 255, 0) 90%
        );
        background-clip: text;
        line-height: 1.1em;
        letter-spacing: 8px;
        margin-top: 10px;
      }

      @include bp(tablet) {
        font-size: 4em;
      }
    }

    p {
      font-size: 1.25em;
      font-weight: 100;
      margin-top: -1.0em;

      @include bp(mobile-and-tablet) {
        margin-top: 0;
        font-size: 1em;
      }
    }
  }
}

.outlined-button {
  border: solid 1px #fff;

  &:hover {
    color: $main-color;
  }
}

.start-desktop {
  display: block;
  @include bp(mobile-and-tablet) {
    display: none;
  }
}
.start-mobile {
  display: none;
  @include bp(mobile) {
    display: block;
    @include coverer;
    object-fit: contain;
    object-position: 65% 100%;
  }
}

.start-tablet {
  display: none;
  @include bp(tablet) {
    display: block;
    @include coverer;
    object-fit: contain;
    object-position: 65% 100%;
  }
}
</style>
