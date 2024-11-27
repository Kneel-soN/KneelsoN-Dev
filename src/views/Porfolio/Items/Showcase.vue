<template>
  <div v-motion-fade-visible class="showcase-page">
    <h1>My Works and Experience</h1>
    <p style="margin-bottom: 50px">Built by Using These Frameworks and Technologies</p>

    <v-row class="image-row" justify="center">
      <v-col v-for="(image, index) in imageList" :key="index" cols="1" class="pa-2">
        <a :href="image.link" target="_blank" class="image-link">
          <img
            :src="image.src"
            :alt="image.alt"
            class="img-fluid hover-effect"
            :class="getCustomClass(image.alt)"
          />
        </a>
      </v-col>
    </v-row>

    <div v-motion-pop-visible class="card-section">
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
import Card from '../../../components/Card.vue'

import ts from '../../../assets/xp/ts.png'
import next from '../../../assets/xp/next.png'
import node from '../../../assets/xp/node.png'
import vue from '../../../assets/xp/vue.png'
import fire from '../../../assets/xp/firebase.png'
import sql from '../../../assets/xp/mysql.png'

export default {
  name: 'ShowcasePage',
  components: {
    Card,
  },
  data() {
    return {
      imageList: [
        { src: next, alt: 'Next', link: 'https://nextjs.org/' },
        { src: vue, alt: 'Vue', link: 'https://vuejs.org/' },
        { src: node, alt: 'Node', link: 'https://nodejs.org/' },
        { src: fire, alt: 'Firebase', link: 'https://firebase.google.com/' },
        { src: sql, alt: 'sql', link: 'https://www.mysql.com/' },
        { src: ts, alt: 'TypeScript', link: 'https://www.typescriptlang.org/' },
      ],
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
  methods: {
    // This method returns a custom class based on the image alt text
    getCustomClass(altText: string) {
      switch (altText) {
        case 'Next':
          return 'next-img' // Custom class for Vue image
        case 'Vue':
          return 'vue-img' // Custom class for Vue image
        case 'Node':
          return 'node-img' // Custom class for Node image
        case 'sql':
          return 'sql-img' // Custom class for Node image

        case 'Firebase':
          return 'firebase-img' // Custom class for Firebase image
        case 'TypeScript':
          return 'ts-img' // Custom class for TypeScript image
        default:
          return ''
      }
    },
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

.image-row {
  margin-bottom: 30px;
}

.img-fluid {
  width: 100%;
  height: auto;
  border-radius: 25px;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease; /* Smooth transition */
}

.hover-effect {
  /* Adding initial state for the images */
  transform: scale(1); /* Ensure images start at normal size */
}

.hover-effect:hover {
  /* On hover: scaling and adding shadow */
  transform: scale(1.1); /* Smooth zoom-in effect */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); /* Add subtle shadow */
}

/* Custom styles for specific images */
.next-img {
  border: 3px solid #ffffff; /* Node green border */
}
.vue-img {
  border: 3px solid #42b983; /* Vue green border */
}

.node-img {
  border: 3px solid #54a144; /* Node green border */
}

.sql-img {
  border: 3px solid #00758f; /* sql blue border */
}

.firebase-img {
  border: 3px solid #ffca28; /* Firebase yellow border */
}

.ts-img {
  border: 3px solid #3178c6; /* TypeScript blue border */
}
</style>
