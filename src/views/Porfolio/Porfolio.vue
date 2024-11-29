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
import { defineComponent, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router'; // Vue Router hook to access the route
import Header from '@/components/Header.vue';
import HeaderContainer from '../HeaderContainer.vue';
import Showcase from './Items/Showcase.vue';
import Profile from './Items/Profile.vue';
import Creative from './Items/Creative.vue';
import Contact from './Items/Contact.vue';

export default defineComponent({
  name: 'Portfolio',
  components: {
    HeaderContainer,
    Header,
    Profile,
    Showcase,
    Creative,
    Contact,
  },
  setup() {
    // Access current route
    const route = useRoute();

    // Function to handle the smooth scroll to the hash element
    const scrollToHash = () => {
      const hash = route.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          const headerHeight = document.querySelector('.header')?.clientHeight || 0;
          let offset = 40;
          if (hash === '#showcase') {
            offset = 90; // Special offset for showcase section
          }
          if (hash === '#contact') {
            offset = 90; // Special offset for contact section
          }
          const speed = 500; // Scroll speed in milliseconds

          // Calculate target position
          const targetPosition =
            element.getBoundingClientRect().top + window.pageYOffset - headerHeight - offset;
          smoothScrollTo(targetPosition, speed);
        }
      }
    };

    // Function to perform smooth scrolling animation
    const smoothScrollTo = (target: number, duration: number) => {
      const start = window.pageYOffset;
      const distance = target - start;
      const startTime = performance.now();

      const scroll = (currentTime: number) => {
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        window.scrollTo(0, start + distance * progress);

        if (timeElapsed < duration) {
          requestAnimationFrame(scroll); // Continue animating until the duration is completed
        }
      };

      requestAnimationFrame(scroll); // Start the smooth scroll animation
    };

    // Call scrollToHash when the component is mounted
    onMounted(() => {
      scrollToHash();
    });

    // Watch for route hash changes to trigger scrolling
    watch(
      () => route.hash,
      () => {
        scrollToHash();
      }
    );

    return {
      scrollToHash,
    };
  },
});
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column; /* Stack sections vertically */
  align-items: center; /* Center sections horizontally */
  width: 100%;
}

section {
  width: 100%; /* Ensure sections take full width */

  box-sizing: border-box;
}
#creative {
  margin-top: 100px;
}

#contact {
  margin-top: 50px;
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
  .creative {
    margin-top: 15px; /* Adjust margin for smaller screens */
  }
}
</style>
