<template>
  <div v-motion-fade-visible class="showcase-page">
    <h1>Projects and Experience</h1>
    <p style="margin-bottom: 50px">Built by Using These Frameworks, Languages, and Technologies</p>

    <XPIcons />

    <div v-motion-pop-visible class="card-section" style="margin-top: 75px">
      <v-container>
        <v-carousel
          hide-delimiters
          style="height: 250px; width: 60%; margin: 0 auto"
          :interval="3000"
          cycle
          progress="primary"
        >
          <template v-slot:prev="{ props }">
            <v-btn color="transparent" @click="props.onClick" style="color: blue"> &lt; </v-btn>
          </template>

          <template v-slot:next="{ props }">
            <v-btn color="transparent" @click="props.onClick" style="color: green"> &gt; </v-btn>
          </template>

          <v-carousel-item v-for="(slide, i) in slides" :key="i">
            <div class="d-flex justify-center align-center" style="height: 100%">
              <Card
                :title="slide.title"
                :description="slide.description"
                :image="slide.image"
                :link="slide.link"
              />
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-container>
    </div>
  </div>
</template>

<script lang="ts">
import XPIcons from '../../../components/XPIcons.vue'
import Card from '../../../components/Card.vue'
import esm from '../../../assets/showcase/esm.png'
import dc from '../../../assets/showcase/dochub.png'
import os from '../../../assets/showcase/os.png'
import mcg from '../../../assets/showcase/mcg.png'
import ppp from '../../../assets/showcase/ppp.png'
import vets from '../../../assets/showcase/vets.png'
export default {
  name: 'ShowcasePage',
  components: {
    Card,
    XPIcons,
  },
  data() {
    return {
      slides: [
        {
          title: 'Muscle Control Gym',
          description: 'Gym Subscription App with QR Generation for IN and OUT.',
          image: mcg,
          link: 'https://muscle-control-gym-admin.vercel.app/',
        },
        {
          title: 'Pothole/Puddle Image Classifier',
          description: 'Image Classifier for Identifying Puddles or Potholes',
          image: ppp,
          link: 'https://puddlepotholepredict.vercel.app/',
        },
        {
          title: 'TIP Manila Document Hub',
          description: 'Technological Institute of the Philippines - Manila Document Hub',
          image: dc,
        },
        {
          title: 'eScanMO',
          description: 'Document to Text to Excel Entry Mobile App and Website',
          image: esm,
        },
        {
          title: 'Operating System Scheduling Simulator',
          description: 'Website for Simulating Operating Systems Algorithms',
          image: os,
          link: 'https://os-prelim-exam.vercel.app',
        },
        {
          title: 'VetSharp',
          description: 'Petshop website with e-Commerce Features and Pet Appointment',
          image: vets,
          link: 'https://vetsharp.vercel.app/',
        },
      ],
    }
  },
}
</script>

<style scoped>
.showcase-page {
  text-align: center;
  font-family: 'Raleway', sans-serif;
  padding: 50px;
  color: #fdfdfd;
  background-image: linear-gradient(
    to top,
    #173643,
    /* Start with dark teal at the bottom */ #000000 100%,
    /* Transition to black at the center */ #173643 100% /* End with dark teal at the top */
  );
}

h1 {
  text-align: center;
  padding: 20px;

  color: #000000; /* Inside text color */
  font-size: 48px; /* Example font size */
  text-shadow:
    1px 1px 0 #ffffff,
    /* Bottom-right white shadow */ -1px -1px 0 #ffffff,
    /* Top-left white shadow */ 1px -1px 0 #ffffff,
    /* Bottom-left white shadow */ -1px 1px 0 rgb(255, 255, 255); /* Top-right white shadow */
}

p {
  font-size: 1.2rem;
  line-height: 1.6;

  opacity: 90%;
}

.card-section {
  margin-top: 30px;
  display: flex;
  justify-content: center;
}
</style>
