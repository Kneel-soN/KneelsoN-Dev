<template>
  <div class="section-page">
    <div class="parallax-layer layer-bg" :style="layerBgStyle"></div>
    <div class="parallax-layer layer-overlay"></div>

    <div class="section-content" v-motion-fade-visible>
      <div class="section-header">
        <span class="section-number">06</span>
        <h1>Modern Techniques, Skills &amp; Tools Used</h1>
        <div class="header-line"></div>
        <p class="subtitle">Frameworks, languages, and platforms applied during the OJT</p>
      </div>

      <div class="techniques-grid">
        <div class="technique-card" v-for="item in techniques" :key="item.category" v-motion-pop-visible>
          <h3>{{ item.category }}</h3>
          <div class="tag-list">
            <span class="tag" v-for="tag in item.items" :key="tag">{{ tag }}</span>
          </div>
        </div>
      </div>

      <div class="soft-skills-block" v-motion-fade-visible>
        <h3>Soft Skills Developed</h3>
        <div class="soft-skills-row">
          <div class="soft-skill" v-for="skill in softSkills" :key="skill.label">
            <span class="soft-icon">{{ skill.icon }}</span>
            <span>{{ skill.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ModernTechniques',
  components: {},
  data() {
    return {
      scrollY: 0,
      sectionTop: 0,
      ticking: false,
      techniques: [
        {
          category: 'Languages',
          items: ['TypeScript', 'JavaScript', 'Bash'],
        },
        {
          category: 'Frameworks & Libraries',
          items: ['Node.js', 'Express.js', 'Next.js', 'TanStack Query', 'Bun'],
        },
        {
          category: 'Databases & Storage',
          items: ['MongoDB Atlas', 'AWS S3', 'Redis'],
        },
        {
          category: 'Cloud & DevOps',
          items: ['AWS EC2', 'AWS S3', 'MongoDB Atlas', 'Git', 'GitHub', 'Postman'],
        },
        {
          category: 'Auth & Security',
          items: ['Google OAuth', 'OTP Flows', 'Helmet.js', 'Rate Limiting', 'JWT'],
        },
        {
          category: 'Features Built',
          items: ['Secure PDF Viewer', 'Dynamic Watermarking', 'Email Routing', 'Borrowing System', 'Syllabus Maker', 'Pagination', 'Advanced Search'],
        },
      ],
      softSkills: [
        { icon: '💬', label: 'Communication' },
        { icon: '🧩', label: 'Problem Solving' },
        { icon: '🤝', label: 'Teamwork' },
        { icon: '⏱️', label: 'Time Management' },
        { icon: '🔄', label: 'Adaptability' },
        { icon: '📐', label: 'Attention to Detail' },
      ],
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
  background: radial-gradient(ellipse at 50% 50%, #041a38 0%, #002331 70%);
  z-index: 0;
  transition: transform 0.1s linear;
}

.layer-overlay {
  background: radial-gradient(ellipse at 50% 50%, rgba(0, 184, 255, 0.1) 0%, transparent 60%);
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
  margin-bottom: 20px;
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
  font-size: 2.4rem;
  color: #ffffff;
  margin: 0 0 12px;
  text-shadow: 0 0 30px rgba(0, 184, 255, 0.3);
}

.subtitle {
  font-size: 1rem;
  color: #9aa5ce;
  margin: 0 0 8px;
}

.header-line {
  width: 60px;
  height: 3px;
  background: linear-gradient(to right, #00b8ff, #00ff9f);
  margin: 0 auto 12px;
  border-radius: 2px;
}

/* Techniques grid */
.techniques-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 36px;
}

.technique-card {
  background: rgba(0, 45, 70, 0.45);
  border: 1px solid rgba(0, 184, 255, 0.22);
  border-radius: 22px;
  padding: 22px 20px;
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.technique-card:hover {
  transform: translateY(-4px);
  border-color: rgba(0, 184, 255, 0.5);
}

.technique-card h3 {
  font-family: 'Play', sans-serif;
  font-size: 0.8rem;
  letter-spacing: 3px;
  color: #00b8ff;
  text-transform: uppercase;
  margin-bottom: 14px;
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  background: rgba(0, 184, 255, 0.1);
  border: 1px solid rgba(0, 184, 255, 0.25);
  color: #e8f4ff;
  font-size: 0.85rem;
  padding: 4px 12px;
  border-radius: 20px;
}

/* Soft skills */
.soft-skills-block {
  background: rgba(0, 45, 32, 0.4);
  border: 1px solid rgba(0, 255, 159, 0.2);
  border-radius: 24px;
  padding: 28px 32px;
}

.soft-skills-block h3 {
  font-family: 'Play', sans-serif;
  font-size: 0.85rem;
  letter-spacing: 3px;
  color: #00ff9f;
  text-transform: uppercase;
  margin-bottom: 20px;
  text-align: center;
}

.soft-skills-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
}

.soft-skill {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(0, 255, 159, 0.07);
  border: 1px solid rgba(0, 255, 159, 0.2);
  border-radius: 30px;
  padding: 8px 18px;
  font-size: 0.95rem;
  color: #e8fff5;
  transition: transform 0.2s ease;
}

.soft-skill:hover {
  transform: scale(1.05);
}

.soft-icon {
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  .section-page {
    padding: 60px 20px;
  }

  h1 {
    font-size: 1.75rem;
  }

  .techniques-grid {
    grid-template-columns: 1fr;
  }

  .soft-skills-block {
    padding: 20px 18px;
  }

  .soft-skills-row {
    gap: 10px;
  }

  .soft-skill {
    font-size: 0.88rem;
    padding: 7px 14px;
  }
}
</style>
