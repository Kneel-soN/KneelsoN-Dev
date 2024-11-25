<template>
  <div class="profile-page">
    <div class="parallax-background" :style="backgroundStyle"></div>
    <div class="content">
      <h1>Profile Page</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non massa sed 
        nisi volutpat volutpat at ut odio. Morbi tincidunt, nunc et consectetur lacinia, 
        erat arcu cursus nisl, ac varius justo nisi a erat. Sed efficitur, lorem at 
        consectetur posuere, ipsum sapien laoreet elit, sed tristique nisl nunc ac nisl.
      </p>
      <p>
        Fusce quis augue nec ligula lacinia bibendum. Sed ut perspiciatis unde omnis 
        iste natus error sit voluptatem accusantium doloremque laudantium, totam rem 
        aperiam. Quisque vitae leo nec urna faucibus interdum. Vivamus euismod 
        fringilla diam, eu bibendum urna ullamcorper nec.
      </p>
      <p>
        Nulla facilisi. Aenean varius orci sit amet magna varius, et sodales metus 
        blandit. Integer ac ligula at libero aliquet sodales. Curabitur tincidunt, 
        nulla id scelerisque dignissim, urna metus sagittis massa, at efficitur 
        urna ex vitae odio.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      scrollY: 0, // To track scroll position
      ticking: false, // To prevent unnecessary updates
    };
  },
  computed: {
    backgroundStyle() {
   
      const scale = 1 + this.scrollY / 1000;  // Adjust divisor to control zoom speed
   
      const translateY = this.scrollY * 0.5; // Adjust this value to control vertical movement
      return {
        transform: `translateY(${translateY}px) scale(${Math.min(scale, 1.2)})`, // Ensure scale doesn't go beyond 1.5
      };
    },
  },
  methods: {
    onScroll() {
      if (!this.ticking) {
        window.requestAnimationFrame(() => {
          this.scrollY = window.scrollY;
          this.ticking = false;
        });
        this.ticking = true;
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
.profile-page {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  padding: 20px;
  overflow: hidden;
}

.parallax-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/cyber4.gif'); /* Replace with your background image */
  opacity: 30%;
  background-size: cover;
  background-position: center;
  will-change: transform;
  z-index: -1;
  transition: transform 0.2s ease-out; /* Smooth transition for zoom effect */
}

.content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
  padding: 50px;
  max-width: 800px;
  background-color: rgba(14, 13, 13, 0.733);
  opacity: 0;
  animation: fadeIn 1s ease-out forwards;
  animation-delay: 0.5s;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
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
</style>
