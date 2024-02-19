<template>
  <div>
    <nav
      class="navbar navbar-expand-lg navbar-light fixed-top p-st"
      :class="{
        'bg-light': !nightMode,
        'navbar-blur': navbarConfig.blur,
        'bg-dark2': nightMode,
      }"
    >
      <div class="container">
        <a
          class="navbar-brand"
          href="/"
          @click.prevent="$emit('scroll', 'home')"
        >
          <Logo :nightMode="nightMode" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span style="color: gray; font-size: 23px;"
            ><i class="fas fa-bars"></i
          ></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item mx-2 ">
              <a
                class="nav-link"
                href="/portfolio"
                @click.prevent="$emit('scroll', 'portfolio')"
                :class="{ 'nav-link-black-hover': !nightMode, 'text-light nav-link-white-hover': nightMode }"
                >Work</a
              >
            </li>
            <li class="nav-item mx-2">
              <a
                class="nav-link"
                href="/about"
                @click.prevent="$emit('scroll', 'about')"
                :class="{ 'nav-link-black-hover': !nightMode, 'text-light nav-link-white-hover': nightMode }"
                >About</a
              >
            </li>
            <li class="nav-item mx-2">
              <a
                class="nav-link nav-link-red"
                style="color: red;"
                href="https://github.com/sorakabro/portfolio-template/blob/main/src/assets/pdfs/Resume.pdf"
                target="_blank"
                >Resume</a
              >
            </li>
            <li class="nav-item ml-2">
              <a
              :class="{ 'night-mode-icon-hover-dark': !nightMode, 'text-light night-mode-icon-hover-light': nightMode }"
                class="nav-link"
                href="#"
                @click.prevent="switchMode"
                ><i
                  :class="{
                    'fas fa-sun': nightMode,
                    'far fa-moon': !nightMode,
                  }"
                  v-tooltip.bottom="nightMode ? 'Light Mode' : 'Night Mode'"
                ></i
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import Logo from "./helpers/Logo";
import info from "../../info";

export default {
  name: "Navbar",
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      navbarConfig: info.config.navbar,
      localNightMode: this.nightMode,
    };
  },
  components: {
    Logo,
  },
  methods: {
    switchMode() {
      this.localNightMode = !this.localNightMode;
      this.$emit("nightMode", this.localNightMode);
    },
  },
};
</script>

<style scoped>
.nav-link {
  font-weight: 500;
}

.nav-link-white-hover:hover {
  text-decoration: underline #fff;
}

.nav-link-black-hover:hover {
  text-decoration: underline black;
}

.nav-link-red:hover {
  text-decoration: underline red !important;
}

button {
  border: none;
  outline: none;
}

button:hover {
  border: none;
  outline: none;
}

nav {
  border-bottom: 1px solid rgba(160, 159, 159, 0.336);
  position: fixed !important;
}

.navbar-blur {
  background-color: #ffffff7e;
  backdrop-filter: blur(12px);
}

.night-mode-icon-hover-dark:focus{
  border-color: #669db3ff;
  border-style: solid;
  border-radius: 5px;
}

.night-mode-icon-hover-dark i:hover {
  color: #f9383b;
}

.night-mode-icon-hover-light:focus{
  border-color: #669db3ff;
  border-style: solid;
  border-radius: 5px;
}

.night-mode-icon-hover-light i:hover {
  color: #f9383b;
}

i {
  font-size: 20px;
}
</style>
