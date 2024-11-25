<template>
    <div class="parallax-container">
      <div class="parallax-background" :style="backgroundStyle"></div>
      <div class="content">
        <h1>Welcome to the Parallax Effect</h1>
        <p>Scroll down to see the effect!</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        scrollY: 0, // To track scroll position
        ticking: false, // To prevent unnecessary updates
      };
    },
    computed: {
      backgroundStyle() {
        // Adjust the background position based on scrollY
        return {
          transform: `translateY(${this.scrollY * 0.5}px)`, // Adjust the multiplier for more/less effect
        };
      },
    },
    methods: {
      onScroll() {
        if (!this.ticking) {
          window.requestAnimationFrame(() => {
            this.scrollY = window.scrollY; // Update scrollY when scrolling
            this.ticking = false; // Reset ticking after the scroll is handled
          });
          this.ticking = true; // Flag to prevent multiple calls during the same scroll event
        }
      },
    },
    mounted() {
      window.addEventListener('scroll', this.onScroll); // Listen to scroll event
    },
    destroyed() {
      window.removeEventListener('scroll', this.onScroll); // Clean up event listener
    },
  };
  </script>
  
  <style scoped>
  .parallax-container {
    position: relative;
    height: 100vh; /* Adjust the height */
    overflow: hidden;
  }
  
  .parallax-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('@/assets/cyber.gif'); /* Replace with your image */
    background-size: cover;
    background-position: center;
    /* No transition now */
  }
  
  .content {
    position: relative;
    z-index: 2;
    text-align: center;
    color: white;
    padding: 50px;
    background-color: rgba(0, 0, 0, 0.5); /* Optional: for text readability */
  }
  </style>
  