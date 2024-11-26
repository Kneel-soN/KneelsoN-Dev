<template>
  <div>
    <Header />

    <div class="content">
      <section id="profile">
        <Profile />
      </section>
      <section id="showcase">
        <Showcase />
      </section>
      <section id="creative">
        <Creative />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import Header from '@/components/Header.vue'
import HeaderContainer from '../HeaderContainer.vue'
import Showcase from './Items/Showcase.vue'
import Profile from './Items/Profile.vue'
import Creative from './Items/Creative.vue'
import Contact from './Items/Contact.vue'

export default {
  name: 'Portfolio',
  components: {
    HeaderContainer,
    Header,
    Profile,
    Showcase,
    Creative,
    Contact,
  },
  mounted() {
    this.scrollToHash()
  },
  watch: {
    '$route.hash': function () {
      this.scrollToHash()
    },
  },
  methods: {
    scrollToHash() {
      const hash = this.$route.hash
      if (hash) {
        const element = document.querySelector(hash)
        if (element) {
          const headerHeight = document.querySelector('.header')?.clientHeight || 0
          const offset = 50 // Adjust this offset if needed
          const speed = 500 // Scroll speed in milliseconds

          // Calculate target position
          const targetPosition =
            element.getBoundingClientRect().top + window.pageYOffset - headerHeight - offset
          this.smoothScrollTo(targetPosition, speed)
        }
      }
    },
    smoothScrollTo(target: number, duration: number) {
      const start = window.pageYOffset
      const distance = target - start
      const startTime = performance.now()

      const scroll = (currentTime: number) => {
        const timeElapsed = currentTime - startTime
        const progress = Math.min(timeElapsed / duration, 1)
        window.scrollTo(0, start + distance * progress)

        if (timeElapsed < duration) {
          requestAnimationFrame(scroll) // Continue animating until the duration is completed
        }
      }

      requestAnimationFrame(scroll) // Start the smooth scroll animation
    },
  },
}
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column; /* Stack sections vertically */
  align-items: center; /* Center sections horizontally */
}

section {
  width: 100%; /* Ensure sections take full width */

  box-sizing: border-box; /* Include padding in width/height calculations */
}

html {
  scroll-behavior: smooth; /* Enable smooth scrolling for anchor links */
}

/* Responsive adjustments */
@media (max-width: 768px) {
  section {
    margin: 30px 0; /* Adjust margin for smaller screens */
    padding: 15px; /* Adjust padding for smaller screens */
  }
}
</style>
