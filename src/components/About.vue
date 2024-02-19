<template>
  <div
    class="py-4 p-st"
    :class="{
      'bg-light': !nightMode,
      'bg-dark2': nightMode,
      'text-light': nightMode,
    }"
  >
    <div class="container">
      <div
        class="text-center"
        data-aos="fade"
        data-aos-once="true"
        data-aos-duration="1000"
      >
        <span
          class="title text-center"
          :class="{ pgray: !nightMode, 'text-light': nightMode }"
          >About me</span
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
        </div>
        <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12 text-center">
            <img :src="picture" id="benjaminLogo" class="rounded-top" />
        </div>
      </div>
      </div>
      <hr
        width="50%"
        :class="{ pgray: !nightMode, 'bg-secondary': nightMode }"
      />
      <div class="row">
        <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12">
          <Timeline :data="education" :nightMode="nightMode" />
        </div>
        <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12">
          <Timeline :data="experience" :nightMode="nightMode" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Timeline from "./helpers/Timeline";
import info from "../../info";

export default {
  name: "About",
  components: {
    Timeline,
  },
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      description: info.description,
      education: {
        title: "Education",
        data: info.education,
      },
      experience: {
        title: "Experiences",
        data: info.experience,
      },
      picture: info.flat_picture,
    };
  },
};
</script>

<style scoped>
.title {
  font-size: 30px;
  font-weight: 500;
  text-decoration: underline;
}

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

#benjaminLogo {
  transform: scaleX(1);
}
</style>
