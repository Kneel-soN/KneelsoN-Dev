<template>
  <div v-motion-fade-visible class="showcase-page">
    <!-- Parallax tech section -->
    <div class="tech-parallax-wrapper" ref="techSection">
      <div class="tech-parallax-bg" :style="techBgStyle"></div>
      <div class="tech-content">
        <h1>Tool Suite</h1>
        <p style="margin-bottom: 50px">Built by Using These Frameworks, Languages, and Technologies</p>
        <XPIcons />
      </div>
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
      scrollY: 0,
      sectionTop: 0,
      ticking: false,
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
  computed: {
    techBgStyle() {
      const relativeScroll = this.scrollY - this.sectionTop
      return {
        transform: `translateY(${relativeScroll * 0.2}px)`,
      }
    },
  },
  methods: {
    onScroll() {
      if (!this.ticking) {
        globalThis.requestAnimationFrame(() => {
          this.scrollY = globalThis.scrollY
          this.ticking = false
        })
        this.ticking = true
      }
    },
  },
  mounted() {
    globalThis.addEventListener('scroll', this.onScroll)
    this.onScroll()
    this.$nextTick(() => {
      const el = this.$refs.techSection as HTMLElement
      if (el) {
        this.sectionTop = el.getBoundingClientRect().top + globalThis.scrollY
      }
    })
  },
  unmounted() {
    globalThis.removeEventListener('scroll', this.onScroll)
  },
}
</script>

<style scoped>
.showcase-page {
  text-align: center;
  font-family: 'Raleway', sans-serif;
  padding-bottom: 50px;
  color: #fdfdfd;
  background: #002331;
}

/* Parallax tech wrapper */
.tech-parallax-wrapper {
  position: relative;
  overflow: hidden;
  padding: 80px 50px 60px;
}

.tech-parallax-bg {
  position: absolute;
  top: -25%;
  left: 0;
  width: 100%;
  height: 150%;
  background: radial-gradient(ellipse at 50% 50%, #0a2a3a 0%, #002331 70%);
  will-change: transform;
  z-index: 0;
  transition: transform 0.1s linear;
}

.tech-content {
  position: relative;
  z-index: 1;
}

h1 {
  text-align: center;
  padding: 20px;
  color: #000000;
  font-size: 48px;
  text-shadow:
    1px 1px 0 #ffffff,
    -1px -1px 0 #ffffff,
    1px -1px 0 #ffffff,
    -1px 1px 0 rgb(255, 255, 255);
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
  padding: 0 50px;
}

@media (max-width: 768px) {
  .tech-parallax-wrapper {
    padding: 60px 20px 40px;
  }

  h1 {
    font-size: 2rem;
    padding: 10px;
  }

  p {
    font-size: 1rem;
    margin-bottom: 30px;
  }

  .card-section {
    padding: 0 12px;
  }

  /* Fix Vuetify carousel width on mobile */
  :deep(.v-carousel) {
    width: 100% !important;
    height: 280px !important;
  }
}
</style>
