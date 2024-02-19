<template>
  <div
    :class="{ 'bg-white': !nightMode, 'bg-dark': nightMode }"
    class="pt-5 p-st"
  >
    <div
      class="container"
      data-aos="fade"
      data-aos-once="true"
      data-aos-duration="1000"
    >
      <div class="row align-items-center">
        <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12 pt-5 text-center">
          <h2
            :class="{ pgray: !nightMode, 'text-light': nightMode }"
            >Hello, I'm Benjamin Oldén.</h2
          >
          <div>
            <p v-html="description"></p>
          </div>
          <p>I'm currently working with,</p>
          <ul class="col-12" style="text-align: left;" :class="{ pgray: !nightMode, 'text-light': nightMode }">
            <li>Vue.js</li>
            <li>NodeJS</li>
            <li>PHP</li>
            <li>Laravel</li>
            <li>SQL</li>
          </ul>
          <div class="pb-4">
            <button
                type="button"
                class="btn btn-danger mr-2 float-left"
                @click="open('resume')"
                v-tooltip.bottom="'Resume'"
              >
              Resume
            </button>
            <button
              :class="{ 'btn btn-outline-secondary-dark mx-2': !nightMode, 'btn btn-outline-secondary-light mx-2': nightMode }"
              class="float-left"
              @click="open('linkedin')"
              v-tooltip.bottom="'LinkedIn'"
            >
              <i class="fab fa-linkedin"></i>
            </button>
            <button
               :class="{ 'btn btn-outline-secondary-dark mx-2': !nightMode, 'btn btn-outline-secondary-light mx-2': nightMode }"
               class="float-left"
              @click="open('github')"
              v-tooltip.bottom="'GitHub'"
            >
              <i class="fab fa-github"></i>
            </button>
            <button
               :class="{ 'btn btn-outline-secondary-dark mx-2': !nightMode, 'btn btn-outline-secondary-light mx-2': nightMode }"
               class="float-left"
              @click="open('blog')"
              v-tooltip.bottom="'Blog'"
            >
              <i class="fas fa-globe-americas"></i>
            </button>
            <button
               :class="{ 'btn btn-outline-secondary-dark mx-2': !nightMode, 'btn btn-outline-secondary-light mx-2': nightMode }"
               class="float-left"
              @click="open('mail')"
              v-tooltip.bottom="'Mail'"
            >
            <i class="fas fa-envelope"></i>
            </button>
          </div>
        </div>
        <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12 text-center">
            <img :src="picture" id="benjaminLogo" class="rounded-top" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import info from "../../info";

import Wave from "./helpers/Wave";

export default {
  name: "Home",
  components: {
    Wave,
  },
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      picture: info.flat_picture,
      description: info.description,
      name: info.name,
      linkedin: info.links.linkedin,
      github: info.links.github,
      resume: info.links.resume,
      blog: info.links.blog,
      mail: info.links.mail
    };
  },
  methods: {
    open(link) {
      console.log(link)
      switch (link) {
        case "linkedin":
          window.open(this.linkedin, "_blank");
          break;
        case "github":
          window.open(this.github, "_blank");
          break;
        case "resume":
          window.open(this.resume, "_blank");
          break;
        case "blog":
          window.open(this.blog, "_blank");
          break;
        case "mail":
          window.open(this.mail, "_blank");
          break;
      }
    },
  },
};
</script>

<style scoped>
img {
  max-width: 300px;
  margin-top: 60px;
  transform: rotateY(180deg);
}

@media only screen and (max-width: 580px) {
  img {
    object-fit: cover;
    border-radius: 50%;
    height: 200px;
    width: 200px;
    margin-top: 10px;
    margin-bottom: 10px;
    border: 2px solid rgb(205, 205, 205);
  }
}

.fa {
  font-size: 15px;
}

.btn-outline-secondary-light {
  color: #fff;
  border-color: none;
}

.btn-outline-secondary-light:hover {
  border-color: none;
  color: #f9383b;
}

.btn-outline-secondary-light:focus {
  border-color: none;
  color: #f9383b;
}

.btn-outline-secondary-dark {
  color: black;
  border-color: none;
}

.btn-outline-secondary-dark:hover {
  border-color: none;
  color: #f9383b;
}

.btn-outline-secondary-dark:focus {
  border-color: none;
  color: #f9383b;
}

p {
  text-align: justify;
}

#benjaminLogo {
  transform: scaleX(1);
}

i {
  font-size:30px;
}

/* LEAVES */
</style>
