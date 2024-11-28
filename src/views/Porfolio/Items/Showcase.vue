<template>
  <div v-motion-fade-visible class="showcase-page">
    <h1>My Works and Experience</h1>
    <p style="margin-bottom: 50px">Built by Using These Frameworks and Technologies</p>

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
          description: 'This is Item number uno.',
          image: 'https://via.placeholder.com/100',
          link: 'https://muscle-control-gym-admin.vercel.app/',
        },
        {
          title: 'Pothole/Puddle Image Classifier',
          description: 'This is Item number dos',
          image: 'https://via.placeholder.com/100',
          link: 'https://puddlepotholepredict.vercel.app/',
        },
        {
          title: 'TIP Manila Document Hub',
          description:
            'This is a description inside the card component. You can use this as a showcase of your content.',
          image: 'https://via.placeholder.com/100',
          link: 'https://muscle-control-gym-admin.vercel.app/',
        },
        {
          title: 'eScanMO',
          description:
            'This is a description inside the card component. You can use this as a showcase of your content.',
          image: 'https://via.placeholder.com/100',
          link: 'https://os-prelim-exam.vercel.app',
        },
        {
          title: 'Operating System Scheduling Simulator',
          description:
            'This is a description inside the card component. You can use this as a showcase of your content.',
          image: 'https://via.placeholder.com/100',
          link: 'https://os-prelim-exam.vercel.app',
        },
        {
          title: 'VetSharp',
          description: '3 day Petshop',
          image: 'https://via.placeholder.com/100',
          link: 'https://os-prelim-exam.vercel.app',
        },
      ],
    }
  },
}
</script>

<style scoped>
.showcase-page {
  text-align: center;
  padding: 100px;
  color: #fdfdfd;
  background-color: rgba(0, 0, 0, 1); /* Black background with 75% opacity */
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

p {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 15px;
}

.card-section {
  margin-top: 30px;
  display: flex;
  justify-content: center;
}
</style>
