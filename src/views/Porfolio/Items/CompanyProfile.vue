<template>
  <div class="section-page">
    <div class="parallax-layer layer-bg" :style="layerBgStyle"></div>
    <div class="parallax-layer layer-overlay"></div>

    <div class="section-content" v-motion-fade-visible>
      <div class="section-header">
        <span class="section-number">02</span>
        <h1>Company Profile</h1>
        <div class="header-line"></div>
      </div>

      <div class="cards-grid">
        <div class="info-card" v-motion-pop-visible>
          <div class="card-icon">🏫</div>
          <h3>Institution</h3>
          <p>Technological Institute of the Philippines – Manila</p>
        </div>

        <div class="info-card" v-motion-pop-visible>
          <div class="card-icon">🎓</div>
          <h3>Industry</h3>
          <p>Higher Education / Academic Document Management</p>
        </div>

        <div class="info-card" v-motion-pop-visible>
          <div class="card-icon">📍</div>
          <h3>Location</h3>
          <p>Manila, Philippines</p>
        </div>

        <div class="info-card" v-motion-pop-visible>
          <div class="card-icon">👤</div>
          <h3>My Department / Role</h3>
          <p>CPE Department — Full-Stack Developer (OJT Trainee)</p>
        </div>
      </div>

      <div class="overview-block" v-motion-fade-visible>
        <h3>Institution Overview</h3>
        <p>
          The Technological Institute of the Philippines – Manila (TIP Manila) is one of the
          leading engineering and technology universities in the Philippines. The Computer
          Engineering (CPE) Department offers programs focused on software systems, hardware
          design, and emerging technologies, producing graduates ready for the demands of the
          modern tech industry.
        </p>
        <p>
          During my OJT, I was embedded in the CPE Department's development initiative to build
          <strong>TIP DocHub</strong> — an internal academic document management and borrowing
          system for faculty, students, and guests. I was involved in all layers of the system:
          API development, frontend integration, cloud infrastructure, and security hardening.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'CompanyProfile',
  data() {
    return {
      scrollY: 0,
      sectionTop: 0,
      ticking: false,
    }
  },
  computed: {
    layerBgStyle() {
      const rel = this.scrollY - this.sectionTop
      return {
        transform: `translateY(${rel * 0.18}px)`,
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
      const el = this.$el as HTMLElement
      this.sectionTop = el.getBoundingClientRect().top + globalThis.scrollY
    })
  },
  unmounted() {
    globalThis.removeEventListener('scroll', this.onScroll)
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Play:wght@400;700&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');

.section-page {
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 40px;
  font-family: 'Raleway', sans-serif;
}

.parallax-layer {
  position: absolute;
  top: -25%;
  left: 0;
  width: 100%;
  height: 150%;
  pointer-events: none;
  will-change: transform;
}

.layer-bg {
  background: radial-gradient(ellipse at 40% 50%, #0a2a44 0%, #002331 70%);
  z-index: 0;
  transition: transform 0.1s linear;
}

.layer-overlay {
  background: radial-gradient(ellipse at 30% 50%, rgba(0, 184, 255, 0.1) 0%, transparent 60%);
  z-index: 1;
}

.section-content {
  position: relative;
  z-index: 2;
  max-width: 1100px;
  width: 100%;
  color: #fff;
}

.section-header {
  margin-bottom: 50px;
  text-align: center;
}

.section-number {
  font-family: 'Play', sans-serif;
  font-size: 0.85rem;
  letter-spacing: 6px;
  color: #00b8ff;
  text-transform: uppercase;
  display: block;
  margin-bottom: 10px;
}

h1 {
  font-family: 'Play', sans-serif;
  font-size: 2.8rem;
  color: #ffffff;
  margin: 0 0 16px;
  text-shadow: 0 0 30px rgba(0, 184, 255, 0.3);
}

.header-line {
  width: 60px;
  height: 3px;
  background: linear-gradient(to right, #00b8ff, #00ff9f);
  margin: 0 auto;
  border-radius: 2px;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 24px;
  margin-bottom: 40px;
}

.info-card {
  background: rgba(0, 50, 72, 0.45);
  border: 1px solid rgba(0, 184, 255, 0.25);
  border-radius: 22px;
  padding: 28px 24px;
  text-align: center;
  backdrop-filter: blur(8px);
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.info-card:hover {
  transform: translateY(-4px);
  border-color: rgba(0, 184, 255, 0.55);
}

.card-icon {
  font-size: 2rem;
  margin-bottom: 12px;
}

.info-card h3 {
  font-family: 'Play', sans-serif;
  font-size: 0.8rem;
  letter-spacing: 3px;
  color: #00b8ff;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.info-card p {
  font-size: 1rem;
  color: #cdd6f4;
  margin: 0;
  line-height: 1.5;
}

.overview-block {
  background: rgba(0, 50, 72, 0.35);
  border-left: 3px solid #00b8ff;
  border-radius: 0 20px 20px 0;
  padding: 28px 32px;
}

.overview-block h3 {
  font-family: 'Play', sans-serif;
  font-size: 1rem;
  letter-spacing: 3px;
  color: #00ff9f;
  text-transform: uppercase;
  margin-bottom: 16px;
}

.overview-block p {
  font-size: 1.05rem;
  color: #cdd6f4;
  line-height: 1.8;
  margin-bottom: 12px;
}

.overview-block p:last-child {
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .section-page {
    padding: 60px 20px;
  }

  h1 {
    font-size: 1.8rem;
  }

  .cards-grid {
    grid-template-columns: 1fr 1fr;
    gap: 14px;
  }

  .info-card {
    padding: 18px 14px;
  }

  .overview-block {
    padding: 18px 20px;
  }
}

@media (max-width: 480px) {
  .cards-grid {
    grid-template-columns: 1fr;
  }
}
</style>
