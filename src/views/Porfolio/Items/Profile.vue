<template>
  <div class="profile-page">
    <!-- Parallax background layers -->
    <div class="parallax-layer layer-bg" :style="layerBgStyle"></div>
    <div class="parallax-layer layer-mid" :style="layerMidStyle"></div>
    <div class="parallax-layer layer-fg" :style="layerFgStyle"></div>

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
          With 3 years of hands-on programming experience and 3 years of professional work
          experience, I have developed strong problem-solving and development skills. I have built
          and maintained multiple web applications and contributed to several projects using modern
          technologies and frameworks.
        </p>
        <p class="raleway">
          I specialize in developing dynamic and responsive web applications using frameworks like
          <a href="https://nextjs.org" target="_blank"><strong>Next.js</strong></a> for server-side
          rendering and static site generation, and
          <a href="https://vuejs.org" target="_blank"><strong>Vue.js</strong></a> for building
          interactive front-end applications. For mobile applications, I have experience building
          native apps using
          <a href="https://reactnative.dev" target="_blank"><strong>React Native</strong></a
          >, which allows me to write cross-platform mobile applications, and
          <a href="https://developer.android.com/studio" target="_blank"
            ><strong>Android Studio</strong></a
          >
          for native Android development. I am also well-versed in backend development using
          technologies like
          <a href="https://nodejs.org" target="_blank"><strong>Node.js</strong></a> and
          <a href="https://expressjs.com" target="_blank"><strong>Express</strong></a> to build
          RESTful APIs. Additionally, I am comfortable working with databases, both SQL and NoSQL,
          including <a href="https://www.mysql.com/" target="_blank"><strong>MySQL</strong></a
          >, <a href="https://www.mongodb.com" target="_blank"><strong>MongoDB</strong></a
          >, and <a href="https://firebase.google.com" target="_blank"><strong>Firebase</strong></a
          >, which enables me to manage data efficiently and scale applications.
        </p>
        <p class="raleway">
        I graduated from
          <a href="https://www.tip.edu.ph/" target="_blank"
            ><strong>Technological Institute of the Philippines - Manila</strong></a
          >, where I pursued a degree in Computer Engineering. In addition to my studies, I have
          completed my OJT at the <strong>Technological Institute of the Philippines - Manila</strong>
          CPE Department, where I developed and deployed a full-stack academic document management
          system — TIP DocHub — handling cloud migration, multi-role authentication, and API security.
        </p>
      </div>

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
          <img src="../../../assets/downloads.png" alt="Download" class="button-icon" />
          Download Resume
        </button>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { create } from 'glitched-writer'

export default {
  components: {},
  data() {
    return {
      scrollY: 0,
      ticking: false,
    }
  },
  computed: {
    layerBgStyle() {
      const scale = 1 + this.scrollY / 1000
      const translateY = this.scrollY * 0.15
      return {
        transform: `translateY(${translateY}px) scale(${Math.min(scale, 1.2)})`,
      }
    },
    layerMidStyle() {
      return {
        transform: `translateY(${this.scrollY * 0.05}px)`,
      }
    },
    layerFgStyle() {
      return {
        transform: `translateY(${this.scrollY * -0.08}px)`,
      }
    },
    // Keep for backward compatibility with emit
    backgroundStyle() {
      return this.layerBgStyle
    },
  },
  methods: {
    onScroll() {
      if (!this.ticking) {
        window.requestAnimationFrame(() => {
          this.scrollY = window.scrollY
          this.ticking = false
          this.$emit('background-style-updated', this.backgroundStyle)
        })
        this.ticking = true
      }
    },
    applyGlitchEffect() {
      const glitchTextElement = this.$refs.glitchText as HTMLElement
      const writer = create(glitchTextElement)
      const phrases = ['Neilson', 'KneelsoN', 'nɪ́jlsən', 'ニールソン']
      writer.queueWrite(phrases, 2000, true)
    },
    downloadResume() {
      const link = document.createElement('a')
      link.href = '/Neilson_Dinoso_Resume_Head_Developer.pdf'
      link.download = 'Neilson_Dinoso_Resume_Head_Developer.pdf'
      link.click()
    },
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
    this.onScroll()
    this.applyGlitchEffect()
  },
  destroyed() {
    window.removeEventListener('scroll', this.onScroll)
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Play:wght@400;700&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');

.styled-button {
  background-color: #00ff9f;
  color: black;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 10px 0;
  cursor: pointer;
  border-radius: 5px;
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;
}

.styled-button:hover {
  background-color: #00b8ff;
  transform: scale(1.05);
}

.styled-button:focus {
  outline: none;
  box-shadow: 0 0 10px rgba(72, 144, 228, 0.5);
}

.styled-button img.button-icon {
  width: 20px;
  height: 20px;
  margin-right: 8px;
  transform: translateY(0.2rem);
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
  font-weight: 400;
  font-style: normal;
  font-optical-sizing: auto;
}

.profile-page {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  text-align: center;
  overflow: hidden;
}

/* Parallax layers */
.parallax-layer {
  position: absolute;
  top: -20%;
  left: 0;
  width: 100%;
  height: 140%;
  will-change: transform;
  pointer-events: none;
}

.layer-bg {
  background-image: url('@/assets/cyber4.gif');
  background-size: cover;
  background-position: center;
  opacity: 0.75;
  z-index: 0;
  transition: transform 0.1s linear;
}

.layer-mid {
  background: radial-gradient(ellipse at center, transparent 40%, #000d1a 100%);
  opacity: 0.65;
  z-index: 1;
  transition: transform 0.15s linear;
}

.layer-fg {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.45) 0%, transparent 35%);
  z-index: 2;
  transition: transform 0.2s linear;
}

.content {
  position: relative;
  z-index: 3;
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
  margin-top: 40px;
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

/* Tech section at the bottom of the profile/resume area */
.profile-tech-section {
  position: relative;
  z-index: 3;
  width: 100%;
  margin-top: 50px;
  padding-bottom: 70px;
}

.tech-label {
  color: #00b8ff;
  font-family: 'Play', sans-serif;
  text-align: center;
  font-size: 0.9rem;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-bottom: 8px;
  opacity: 0.85;
}

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

a {
  text-decoration: none;
  color: white;
}

a:hover {
  text-decoration: underline;
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

@media (max-width: 768px) {
  .content {
    flex-direction: column;
    align-items: center;
    padding: 24px 18px;
    margin-top: 80px;
    border-radius: 24px;
  }

  .text-content {
    padding-right: 0;
    width: 100%;
  }

  .text-content h1 {
    font-size: 2rem;
  }

  .text-content p {
    font-size: 1rem;
  }

  .image-and-social {
    margin-top: 24px;
    width: 100%;
    align-items: center;
  }

  .image-content img {
    width: 140px;
    height: 140px;
  }

  .profile-tech-section {
    margin-top: 24px;
    padding-bottom: 40px;
  }
}
</style>
