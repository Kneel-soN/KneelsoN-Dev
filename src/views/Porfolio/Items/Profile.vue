<template>
  <div class="profile-page">
    <!-- Parallax background section -->
    <div class="parallax-background" :style="backgroundStyle"></div>

    <div class="content">
      <div class="text-content">
        <!-- Text with glitch effect -->
        <h3 style="font-family: 'Play', sans-serif">Hello, I am</h3>
        <h1 ref="glitchText" class="play-regular" style="color: #00b8ff">Neilson</h1>
        <h4 class="play-regular" style="margin-top: -25px; color: #00ff9f">
          Aspiring Software Engineer
        </h4>

        <!-- Paragraphs with the raleway class applied -->
        <p class="raleway">
          With 3 years of hands-on programming experience and 1 year of professional work
          experience, I have developed strong problem-solving and development skills. I have built
          and maintained multiple web applications and contributed to several projects using modern
          technologies and frameworks.
        </p>
        <p class="raleway">
          I specialize in developing dynamic and responsive web applications using frameworks like
          <a href="https://nextjs.org" target="_blank"><strong>Next.js</strong></a> for server-side rendering and static site generation, and
          <a href="https://vuejs.org" target="_blank"><strong>Vue.js</strong></a> for building interactive front-end applications. For mobile
          applications, I have experience building native apps using <a href="https://reactnative.dev" target="_blank"><strong>React Native</strong></a>,
          which allows me to write cross-platform mobile applications, and
          <a href="https://developer.android.com/studio" target="_blank"><strong>Android Studio</strong></a> for native Android development. I am also well-versed in
          backend development using technologies like <a href="https://nodejs.org" target="_blank"><strong>Node.js</strong></a> and
          <a href="https://expressjs.com" target="_blank"><strong>Express</strong></a> to build RESTful APIs. Additionally, I am comfortable working
          with databases, both SQL and NoSQL, including <a href="https://www.mysql.com/" target="_blank"><strong>MySQL</strong></a>,
          <a href="https://www.mongodb.com" target="_blank"><strong>MongoDB</strong></a>, and <a href="https://firebase.google.com" target="_blank"><strong>Firebase</strong></a>, which enables me to manage data
          efficiently and scale applications.
        </p>
        <p class="raleway">
          Currently, I am enrolled at the
          <a href="https://www.tip.edu.ph/" target="_blank"><strong>Technological Institute of the Philippines - Manila</strong></a>, where I am pursuing a degree
          in Computer Engineering. In addition to my studies, I am working as a Backend Developer at
          <strong>LRY Marketing</strong>, where I am responsible for developing and maintaining
          backend systems, optimizing database performance, and ensuring the security and
          scalability of our applications. 
        </p>
      </div>

      <!-- Flex Container for Image and Social Icons (Vertically stacked) -->
      <div class="image-and-social">
        <div class="image-content">
          <img src="../../../assets/image2.jpg" alt="Profile Image" />
        </div>

        <div class="social-icons">
          <a href="https://github.com/Kneel-soN" target="_blank">
            <img src="../../../assets/github-icon.png" alt="GitHub" />
          </a>

          <a href="https://www.linkedin.com/in/neilsondinoso/" target="_blank">
            <img src="../../../assets/linkedin-logo.png" alt="LinkedIn" />
          </a>
          <a href="https://www.facebook.com/neeeil24/" target="_blank">
            <img src="../../../assets/facebook.png" alt="Facebook" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61559666672259" target="_blank">
            <img src="../../../assets/Devxotle-w.png" style="width: 55px" alt="Devxotle" />
          </a>
        </div>
        <button class="styled-button" @click="downloadResume">
  <img src="../../../assets/downloads.png" alt="Download Icon" class="button-icon" />
  Download Resume
</button>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { create } from 'glitched-writer'

export default {
  data() {
    return {
      scrollY: 0,
      ticking: false,
    }
  },
  computed: {
    backgroundStyle() {
      const scale = 1 + this.scrollY / 1000
      const maxScale = this.scrollY > 165 ? 1.2 : scale
      const translateY = this.scrollY * 0.2

      return {
        transform: `translateY(${translateY}px) scale(${Math.min(maxScale, 1.2)})`,
      }
    },
  },
  methods: {
    // Scroll handler to adjust background style
    onScroll() {
      if (!this.ticking) {
        window.requestAnimationFrame(() => {
          this.scrollY = window.scrollY
          this.ticking = false
          this.$emit('background-style-updated', this.backgroundStyle) // Emit updated background style
        })
        this.ticking = true
      }
    },
    // Apply glitch effect to the text
    applyGlitchEffect() {
      const glitchTextElement = this.$refs.glitchText as HTMLElement
      const writer = create(glitchTextElement)
      let phrases = ['KneelsoN', 'Neilson', 'nɪ́jlsən']

      writer.queueWrite(phrases, 2000, true)
    },
    // Function to download resume
    downloadResume() {
      // Create a temporary anchor element
      const link = document.createElement('a');
      link.href = '/NeilsonDiñosoResume.pdf'; // Path to the PDF in the public folder
      link.download = 'NeilsonDiñosoResume.pdf'; // Set the download file name
      link.click(); // Trigger the download
    },
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll) // Listen for scroll events
    this.onScroll() // Initialize on mount to send the initial style
    this.applyGlitchEffect() // Apply the glitch effect to the text
  },
  destroyed() {
    window.removeEventListener('scroll', this.onScroll) // Clean up event listener
  },
}
</script>

<style scoped>
/* Importing the font from Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Play:wght@400;700&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');

.styled-button {
  background-color: #00ff9f; /* Green background */
  color: black; /* White text color */
  border: none; /* Remove default border */
  padding: 10px 20px; /* Padding around text */
  text-align: center; /* Center text */
  text-decoration: none; /* Remove underline */
  display: inline-block; /* Ensure it's inline-block */
  font-size: 16px; /* Set font size */
  margin: 10px 0; /* Margin for spacing */
  cursor: pointer; /* Pointer cursor on hover */
  border-radius: 5px; /* Rounded corners */
  transition: background-color 0.3s ease, transform 0.2s ease; /* Smooth transition for background and scale */

}

/* Button hover effect */
.styled-button:hover {
  background-color: #00b8ff; /* Darker green on hover */
  transform: scale(1.05); /* Slightly increase size on hover */
}

/* Button focus effect */
.styled-button:focus {
  outline: none; /* Remove focus outline */
  box-shadow: 0 0 10px rgba(72, 144, 228, 0.5); /* Add a glow effect */
}
.styled-button img.button-icon {
  width: 20px; /* Adjust the image size */
  height: 20px;
  margin-right: 8px; /* Space between image and text */
  transform: translateY(0.20rem); 
}

.play-regular {
  font-family: 'Play', sans-serif;
  font-weight: 400;
  font-style: normal;
}

.play-bold {
  font-family: 'Play', sans-serif;
  font-weight: 700;
  font-style: normal;
}

.raleway {
  font-family: 'Raleway', sans-serif;
  font-weight: 400; /* You can adjust the weight here */
  font-style: normal;
  font-optical-sizing: auto; /* Automatically adjusts the font's optical size for better readability */
}

.profile-page {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  overflow: hidden;
}

.parallax-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/cyber4.gif'); /* Replace with your background image */
  opacity: 75%;
  background-size: cover;
  background-position: center;
  will-change: transform;
  z-index: -1;
  transition: transform 0.2s ease-out;
}

.content {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  text-align: left;
  color: white;
  padding: 30px;
  max-width: 1200px;
  background-color: rgba(14, 13, 13, 0.8);
  opacity: 0;
  animation: fadeIn 1s ease-out forwards;
  animation-delay: 0.5s;
  border-radius: 50px;
}

.text-content {
  flex: 1;
  padding-right: 20px;
}

.image-and-social {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 175px;
}

.image-content img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  opacity: 90%;
}

.social-icons {
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
}

.social-icons a {
  display: inline-block;
}

.social-icons img {
  width: 30px;
  height: 30px;
  transition: transform 0.3s ease;
}

.social-icons img:hover {
  transform: scale(1.1);
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

a {
  text-decoration: none;  /* No underline on links */
  color: white;  /* White color for the link */
}

a:hover {
  text-decoration: underline; /* Optional: underline on hover */
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
