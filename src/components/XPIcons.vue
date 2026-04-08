<template>
  <div class="xp-wrapper">
    <v-row class="image-row" style="padding-top: 50px">
      <v-col cols="12" class="carousel">
        <div class="carousel" :style="{ '--carousel-state': isHovering ? 'paused' : 'running' }">
          <v-col
            v-for="(image, index) in imageList"
            :key="index"
            class="carousel-item"
            :style="getCarouselItemStyles(index)"
            @mouseenter="handleHoverStart"
            @mouseleave="handleHoverEnd"
          >
            <a :href="image.link" target="_blank" class="image-link">
              <img
                :src="image.src"
                :alt="image.alt"
                class="img-fluid hover-effect"
                :class="getCustomClass(image.alt)"
              />
            </a>
          </v-col>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import ts from '@/assets/xp/ts-flip.png'
import next from '@/assets/xp/next-flip.png'
import node from '@/assets/xp/node.png'
import mongo from '@/assets/xp/mongo.png'
import ex from '@/assets/xp/ex-flip.png'
import gcp from '@/assets/xp/gcp.png'
import aws from '@/assets/xp/aws-flip.png'

export default {
  name: 'XPIcons',

  data() {
    return {
      imageList: [
        { src: next, alt: 'Next', link: 'https://nextjs.org/' },
        { src: node, alt: 'Node', link: 'https://nodejs.org/' },
        { src: mongo, alt: 'Mongo', link: 'https://www.mongodb.com/' },
        { src: ts, alt: 'TypeScript', link: 'https://www.typescriptlang.org/' },
        { src: ex, alt: 'Express', link: 'https://expressjs.com/' },
        { src: gcp, alt: 'GCP', link: 'https://cloud.google.com/' },
        {src: aws, alt: 'AWS', link: 'https://aws.amazon.com/'},
      ],
      radius: 250,
      isHovering: false, // Tracks if any image is hovered
    }
  },

  methods: {
    // This method returns a custom class based on the image alt text
    getCustomClass(altText: string) {
      switch (altText) {
        case 'Next':
          return 'next-img'
        case 'Vue':
          return 'vue-img'
        case 'Node':
          return 'node-img'
        case 'sql':
          return 'sql-img'
        case 'Firebase':
          return 'firebase-img'
        case 'Mongo':
          return 'mongo-img'
        case 'TypeScript':
          return 'ts-img'
        case 'Express':
          return 'ex-img'
        case 'GCP':
          return 'gcp-img'
        case 'AWS':
          return 'aws-img'
        default:
          return ''
      }
    },

    getCarouselItemStyles(index: number) {
      const totalItems = this.imageList.length
      const angle = (index / totalItems) * 360 // Distribute items evenly around 360 degrees
      const x = this.radius * Math.cos((angle * Math.PI) / 180) // X coordinate on the circle
      const z = this.radius * Math.sin((angle * Math.PI) / 180) // Z coordinate (depth)

      return {
        transform: `translateX(${x}px) translateZ(${z}px)`,
        transformOrigin: 'center',
      }
    },

    getResponsiveRadius() {
      const w = globalThis.innerWidth
      if (w <= 480) return 110
      if (w <= 768) return 170
      return 250
    },
    handleHoverStart() {
      this.isHovering = true
    },
    handleHoverEnd() {
      this.isHovering = false
    },
  },
  mounted() {
    this.radius = this.getResponsiveRadius()
    globalThis.addEventListener('resize', () => {
      this.radius = this.getResponsiveRadius()
    })
  },
}
</script>

<style scoped>
.xp-wrapper {
  overflow: hidden;
  width: 100%;
  height: 225px;
}

.image-row {
  margin-bottom: 30px;
  perspective: 500px;
}

.carousel-wrapper {
  position: relative;
  width: 100%;
  height: 200px; /* Adjust the height as per the design */
  overflow: hidden;
}

.carousel {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d; /* Allow the child elements to move in 3D space */
  animation: rotateCarousel 30s infinite linear;
  animation-play-state: var(--carousel-state, running); /* Dynamically control animation state */
}

.carousel-item {
  position: absolute;
  width: 100px; /* Default size of the image */
  height: 100px; /* Default size of the image */
  transition:
    transform 0.3s ease,
    scale 0.3s ease; /* Smooth transition for scale */
}

.carousel-item img {
  width: 100%;
  height: 100%;
  border-radius: 25px;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease; /* Smooth transition */
}

.hover-effect {
  transform: scale(1); /* Normal state */
}

.hover-effect:hover {
  transform: scale(1.2); /* Scale up on hover */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); /* Subtle shadow on hover */
}

/* Custom class borders for each image */
.next-img {
  border: 3px solid #ffffffa2;
}
.vue-img {
  border: 3px solid #42b983;
}
.node-img {
  border: 3px solid #54a144;
}
.sql-img {
  border: 3px solid #00758f;
}
.mongo-img {
  border: 3px solid #13aa52;
}
.firebase-img {
  border: 3px solid #ffca28;
}
.ts-img {
  border: 3px solid #3178c6;

}
.ex-img {
  border: 3px solid #95aec8;
}

a:has(.gcp-img) {
  display: block;
  position: relative;
  border-radius: 25px;
}

a:has(.gcp-img)::after {
  content: '';
  position: absolute;
  inset: -3px;
  border-radius: 28px;
  padding: 3px;
  background: linear-gradient(90deg, #4285f4, #ea4335, #fbbc05, #34a853);
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: destination-out;
  mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask-composite: exclude;
  pointer-events: none;
}

.gcp-img {
  display: block;
}
.aws-img {
  border: 3px solid #ff991f;
}

/* Animation for continuous rotation */
@keyframes rotateCarousel {
  0% { transform: rotateY(0deg); }
  100% { transform: rotateY(360deg); }
}

@media (max-width: 768px) {
  .xp-wrapper {
    height: 180px;
  }

  .carousel-item {
    width: 70px;
    height: 70px;
  }
}

@media (max-width: 480px) {
  .xp-wrapper {
    height: 150px;
  }

  .carousel-item {
    width: 55px;
    height: 55px;
  }
}
</style>
