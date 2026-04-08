<template>
  <div class="section-page">
    <div class="parallax-layer layer-bg" :style="layerBgStyle"></div>
    <div class="parallax-layer layer-overlay"></div>

    <div class="section-content" v-motion-fade-visible>
      <div class="section-header">
        <span class="section-number">05</span>
        <h1>Professional Learning &amp; Development Achieved</h1>
        <div class="header-line"></div>
      </div>

      <div class="summary-block" v-motion-fade-visible>
        <p>
          My OJT at TIP Manila's CPE Department pushed me far beyond the classroom. Working
          independently on a real production system — TIP DocHub — I was responsible for every
          layer of the stack, from API design and database migration to cloud infrastructure and
          security hardening. It was a test of both technical depth and professional initiative.
        </p>
      </div>

      <div class="skills-grid">
        <div class="skill-card" v-for="item in learnings" :key="item.title" v-motion-pop-visible>
          <div class="skill-icon">{{ item.icon }}</div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.desc }}</p>
        </div>
      </div>

      <div class="growth-block" v-motion-fade-visible>
        <h3>Workplace &amp; Industry Insights</h3>
        <p>
          Beyond technical skills, the OJT reinforced what it means to take ownership in a
          professional environment. I learned to anticipate requirements before they were asked,
          deliver incremental updates, and document progress clearly for supervisors and peers.
          Building TIP DocHub largely on my own meant I had to make architectural decisions,
          manage scope, and handle everything from frontend UX to cloud deployment.
        </p>
        <p>
          I also developed a sharper eye for writing maintainable, modular code — particularly
          when refactoring the file management page to reduce cognitive load and improve
          long-term maintainability as the system grew in complexity.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'LearningDevelopment',
  data() {
    return {
      scrollY: 0,
      sectionTop: 0,
      ticking: false,
      learnings: [
        {
          icon: '☁️',
          title: 'Cloud Infrastructure',
          desc: 'Set up and managed AWS EC2 and S3 for production file storage; migrated MongoDB from local to MongoDB Atlas and wrote an automated migration script.',
        },
        {
          icon: '🔐',
          title: 'API Security',
          desc: 'Applied Helmet for HTTP security headers, Redis-backed rate limiters, Google OAuth, OTP flows, and dynamic PDF access controls in a live system.',
        },
        {
          icon: '📄',
          title: 'Document Systems',
          desc: 'Built a full document management pipeline: upload with middleware, watermarking per department, secure PDF viewer, and a borrowing/approval workflow.',
        },
        {
          icon: '🧩',
          title: 'Full-Stack Ownership',
          desc: 'Independently managed both Next.js frontends and dual Node.js/Express APIs — from UI redesigns to endpoint architecture — without direct supervision.',
        },
        {
          icon: '📚',
          title: 'Syllabus & Course Management',
          desc: 'Built a drag-and-drop syllabus maker with key-value rows, outcome matrices, signature blocks, legacy PDF viewing, and course file management per department.',
        },
        {
          icon: '📧',
          title: 'Email & Notification Systems',
          desc: 'Designed dynamic email routing that resolves the current department head from the database and dispatches approval/rejection emails per document department.',
        },
      ],
    }
  },
  computed: {
    layerBgStyle() {
      const rel = this.scrollY - this.sectionTop
      return {
        transform: `translateY(${rel * 0.16}px)`,
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
  background: radial-gradient(ellipse at 50% 55%, #0a1e14 0%, #002331 70%);
  z-index: 0;
  transition: transform 0.1s linear;
}

.layer-overlay {
  background: radial-gradient(ellipse at 50% 60%, rgba(0, 255, 100, 0.08) 0%, transparent 60%);
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
  margin-bottom: 40px;
  text-align: center;
}

.section-number {
  font-family: 'Play', sans-serif;
  font-size: 0.85rem;
  letter-spacing: 6px;
  color: #00ff9f;
  text-transform: uppercase;
  display: block;
  margin-bottom: 10px;
}

h1 {
  font-family: 'Play', sans-serif;
  font-size: 2.4rem;
  color: #ffffff;
  margin: 0 0 16px;
  text-shadow: 0 0 30px rgba(0, 255, 159, 0.2);
}

.header-line {
  width: 60px;
  height: 3px;
  background: linear-gradient(to right, #00ff9f, #00b8ff);
  margin: 0 auto;
  border-radius: 2px;
}

.summary-block {
  background: rgba(0, 50, 35, 0.45);
  border-left: 3px solid #00ff9f;
  border-radius: 0 20px 20px 0;
  padding: 20px 28px;
  margin-bottom: 40px;
}

.summary-block p {
  font-size: 1.05rem;
  color: #cdd6f4;
  line-height: 1.8;
  margin: 0;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.skill-card {
  background: rgba(0, 50, 35, 0.4);
  border: 1px solid rgba(0, 255, 159, 0.2);
  border-radius: 22px;
  padding: 24px 20px;
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-4px);
  border-color: rgba(0, 255, 159, 0.5);
}

.skill-icon {
  font-size: 1.8rem;
  margin-bottom: 10px;
}

.skill-card h3 {
  font-family: 'Play', sans-serif;
  font-size: 0.9rem;
  letter-spacing: 2px;
  color: #00ff9f;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.skill-card p {
  font-size: 0.95rem;
  color: #9aa5ce;
  line-height: 1.7;
  margin: 0;
}

.growth-block {
  background: rgba(0, 45, 32, 0.4);
  border: 1px solid rgba(0, 255, 159, 0.15);
  border-radius: 22px;
  padding: 28px 32px;
}

.growth-block h3 {
  font-family: 'Play', sans-serif;
  font-size: 0.85rem;
  letter-spacing: 3px;
  color: #00b8ff;
  text-transform: uppercase;
  margin-bottom: 16px;
}

.growth-block p {
  font-size: 1.02rem;
  color: #cdd6f4;
  line-height: 1.8;
  margin-bottom: 12px;
}

.growth-block p:last-child {
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .section-page {
    padding: 60px 20px;
  }

  h1 {
    font-size: 1.75rem;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }

  .summary-block {
    padding: 16px 18px;
  }

  .summary-block p,
  .growth-block p {
    font-size: 0.97rem;
  }

  .growth-block {
    padding: 20px 20px;
  }
}
</style>
