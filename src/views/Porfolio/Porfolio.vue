

<template>
    <div>
      <Header></Header>
  
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
  import Header from '@/components/Header.vue';
  import Showcase from './Items/Showcase.vue';
  import Profile from './Items/Profile.vue';
  import Creative from './Items/Creative.vue';
  import Contact from './Items/Contact.vue';
  
  export default {
    name: 'Portfolio',
    components: {
      Header,
      Profile,
      Showcase,
      Creative,
      Contact,
    },
    mounted() {
      this.scrollToHash();
    },
    watch: {
      '$route.hash': function () {
        this.scrollToHash();
      },
    },
    methods: {
      scrollToHash() {
        const hash = this.$route.hash;
        if (hash) {
          const element = document.querySelector(hash);
          if (element) {
            const headerHeight = document.querySelector('.header')?.clientHeight || 0;
  
        
            const offset = 50;
  
            if (hash === "#profile") {
        
              this.smoothScrollTo(0 - offset, 750);
            } else {
              // For other sections, calculate scroll position with header height and additional offset
              const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - headerHeight - offset;
              this.smoothScrollTo(targetPosition, 750);
            }
          }
        }
      },
      smoothScrollTo(target: number, duration: number) {
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
      },
    },
  };
  </script>
  
  <style scoped>
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
  }
  
  .content {
    display: flex;
    flex-direction: column;
  }
  
  #profile {
    margin-top: 250px; /* Adjust this to ensure spacing from top */
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  section {
    height: 1vh; /* Full viewport height */
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    margin-bottom: 500px;
  }
  </style>
  