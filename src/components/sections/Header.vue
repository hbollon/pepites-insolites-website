<template>
  <nav
    id="navbar"
    class="navbar is-fixed-top is-primary"
    :class="[
      { 'navbar-forced': $route.path == '/about' },
      { 'navbar-forced': $route.path == '/find' },
      { 'navbar-forced': $route.path == '/explore' },
      { 'navbar-forced': $route.path == '/booking' }, 
      { 'navbar-forced': $route.path == '/contact' }, 
      { 'navbar-forced': $route.path == `/explore/${itemId}` }]"
    role="navigation"
    aria-label="main navigation"
    style="z-index: 100"
  >
    <div class="navbar-brand">
      <!-- Logo -->
      <a 
        class="navbar-item" 
        :tabindex="0"
        @click="{closeNav(); routerPush('start')}"
      >
        <img 
          src="@/assets/logo-white.png"
          alt="Logo"
          style="max-height: 45px"
        >
      </a>

      <!-- Burger -->
      <a
        role="button"
        class="navbar-burger"
        :class="{ 'is-active': showNav }"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        @click="showNav = !showNav"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>

    <div
      id="navbarBasicExample"
      class="navbar-menu"
      :class="{ 'is-active': showNav }"
    >
      <!-- Left side -->
      <div class="navbar-start">
        <!-- Routes -->
        <a
          v-for="nav in navs"
          :key="nav.route"
          class="navbar-item sub-routes"
          :tabindex="0"
          @click="{closeNav(); routerPush(nav.route)}"
          @keyup.enter="routerPush(nav.route)"
        >
          {{ nav.title }}
        </a>
      </div>

      <!-- Right side -->
      <div 
        id="navbar-end-section" 
        class="navbar-end"
      >
        <div class="navbar-item">
          <div class="buttons">
            <!-- Call to action buttons -->
            <a
              class="button call-to-action fa-pulse-hover"
              @click="{closeNav(); routerPush('booking')}"
              @keyup.enter="routerPush('booking')"
            >
              {{ $t("nav.book") }}&nbsp;<font-awesome-icon class="ml-1" icon="shopping-bag" />
            </a>
            <a 
              class="button call-to-action fa-pulse-hover"
              @click="{closeNav(); routerPush('contact')}"
              @keyup.enter="routerPush('contact')"
            >
              {{ $t("nav.contact") }}&nbsp;<font-awesome-icon class="ml-1" icon="envelope" />
            </a>

            <!-- Language picker -->
            <div class="control has-icons-left language-picker">
              <div class="select">
                <select 
                  v-model="$i18n.locale"
                  class="select-lang"
                >
                  <option
                    v-for="(lang, i) in langs"
                    :key="`Lang${i}`"
                    :value="lang.name"
                    class="lang-options"
                  >
                    {{ lang.title }}
                  </option>
                </select>
              </div>
              <span class="icon is-left">
                <i 
                  v-if="$i18n.locale == 'fr'"
                >
                  <img 
                    src="@/assets/flags/french.png"
                    alt="French flag"
                  >
                </i>
                <i v-else>
                  <img 
                    src="@/assets/flags/english.png"
                    alt="UK flag"
                  >
                </i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref, watch, computed, SetupContext } from 'vue'
import { useI18n } from 'vue-i18n'
import RouterNavigator from '@/mixins/RouterNavigator'
import { useRoute } from 'vue-router'

interface EventShowNavValue {
  showNavValue: boolean
}

interface SetupContextExtended<EventShowNavValue extends Record<string, any>> extends SetupContext {
    emit: <Key extends keyof EventShowNavValue>(event: Key, payload: EventShowNavValue[Key]) => void;
}

export default defineComponent({
  name: 'Header',
  emits: ['showNavValue'],

  setup(props, context: SetupContextExtended<EventShowNavValue>) {
    const { t } = useI18n({ useScope: 'global' })
    const route = useRoute()
    let showNav = ref<boolean>(false)
    let { routerPush, routerPushWithHash } = RouterNavigator()
    const langs = ref([
      { name: "fr", title: "Français" },
      { name: "en", title: "English" }
    ])

    // Keep routes in computed to make i18n change language dynamically
    const navs = computed(() => [
      { route: "home", title: t("nav.start") },
      { route: "about", title: t("nav.about.main") },
      { route: "find", title: t("nav.find.main") },
      { route: "explore", title: t("nav.explore") },
      { route: "faq", title: t("nav.faq") },
    ])

    const itemId = computed(() => route.params.itemId)

    const closeNav = () => {
      showNav.value = false
    }

    watch(showNav, (val: boolean) => {
        context.emit('showNavValue', val)
    })

    window.addEventListener("scroll", () => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const navbar: HTMLElement = document.getElementById("navbar")!
      if (window.pageYOffset > 50) {
        navbar.classList.add("navbar-scrolled")
      } else {
        navbar.classList.remove("navbar-scrolled")
      }
    })

    return {
      showNav,
      closeNav,
      routerPush,
      routerPushWithHash,
      langs,
      navs,
      itemId
    }
  }
})
</script>



<style lang="scss" scoped>
.navbar {
  height: 70px;
  background-color: transparent !important;
  background-image: linear-gradient(
    to top,
    rgba(255, 255, 255, 0),
    rgba(0, 77, 64, 0.3)
  );
  transition: 0.3s;
  max-width: 100vw;

  @include bp(mobile-and-tablet) {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    background-color: $main-color !important;
  }
}

// Make changes when navbar is scrolled
.navbar-scrolled,
.navbar-forced  {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  background-color: $main-color !important;
}

// Mobile menu
#navbarBasicExample {
  width: 80vw;
  margin-left: auto;
}

.navbar-burger {
  z-index: 70;
  height: 70px;
  span {
    height: 2px;

    &:nth-child(1) {
      top: calc(50% - 10px);
      left: calc(50% - 24px);
      width: 32px;
    }

    &:nth-child(2) {
      top: calc(50% - 1px);
      left: calc(50% - 18px);
      width: 26px;
    }

    &:nth-child(3) {
      top: calc(50% + 8px);
      left: calc(50% - 12px);
      width: 20px;
    }
  }
}

.navbar-burger.is-active {
  span {
    color: $main-color;
    &:nth-child(1) {
      top: calc(40%);
      left: calc(10%);
      width: 32px;
    }

    &:nth-child(3) {
      top: calc(54%);
      left: calc(10%);
      width: 32px;
    }
  }
}

.navbar-menu.is-active {
  z-index: 60;
  position: fixed;
  top: 0;
  right: 0;
  padding-top: 70px;
  height: 100vh;
}

.navbar.is-fixed-top .navbar-menu, .navbar.is-fixed-top-touch .navbar-menu {
  max-height: none;
}

.sub-routes {
  @include bp(mobile-and-tablet) {
    padding-left: 24px;
    padding-bottom: 24px;
  }
}

.navbar-end {
  @include bp(mobile-and-tablet) {
    margin-top: 2rem;
  }
}

.call-to-action {
  background-color: transparent;
  color: $white-text-color;

  &:hover {
    background-color: darken($main-color, 5);
    color: $white-text-color;
    padding-top: 35px;
    padding-bottom: 35px;
    border-radius: 0;
  }

  @include bp(mobile-and-tablet) {
    background-color: $main-color;
  }
}

.language-picker {
  margin: 0 0.5rem 0.5rem 0.5rem;

  @include bp(mobile) {
    margin: 1rem 0 0 0;
  }

  @include bp(mobile-and-tablet) {
    border: 1px solid $main-color;
    border-radius: 4px;
  }
}
span {
  img {
    margin-top: 5px;
  }
}

.select-lang {
  background-color: transparent; 
  color: $white-text-color;
  @include bp(mobile-and-tablet) {
    color: $main-color;
  }
}

.select:after {
  border-color: $white-text-color !important;
  @include bp(mobile-and-tablet) {
    border-color: $main-color !important;
  }
}

.control {
  &:hover {
    background-color: darken($main-color, 5);
    color: $white-text-color;
    border-radius: 0;

    @include bp(mobile-and-tablet) {
      background-color: $white-text-color;
      color: $main-color;
    }
  }
}

.lang-options {
  color: $main-color;
}
</style>
