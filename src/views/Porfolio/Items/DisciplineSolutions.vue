<template>
  <div class="section-page">
    <div class="parallax-layer layer-bg" :style="layerBgStyle"></div>
    <div class="parallax-layer layer-overlay"></div>

    <div class="section-content" v-motion-fade-visible>
      <div class="section-header">
        <span class="section-number">07</span>
        <h1>Discipline-Related Solutions Integrated into the Company</h1>
        <div class="header-line"></div>
      </div>

      <div class="intro-block" v-motion-fade-visible>
        <p>
          As a Computer Engineering student, my academic training gave me a solid foundation in
          software systems, data structures, algorithms, and network principles. During my OJT
          at TIP Manila's CPE Department, I applied this knowledge to build and harden
          TIP DocHub — a real academic document management system used by faculty, students, and researchers.
        </p>
      </div>

      <div class="solutions-list">
        <div
          class="solution-item"
          v-for="(solution, index) in solutions"
          :key="solution.title"
          v-motion-fade-visible
        >
          <div class="solution-number">{{ String(index + 1).padStart(2, '0') }}</div>
          <div class="solution-body">
            <h3>{{ solution.title }}</h3>
            <p class="challenge"><span class="label">Challenge:</span> {{ solution.challenge }}</p>
            <p class="applied"><span class="label">Solution Applied:</span> {{ solution.solution }}</p>
            <p class="impact"><span class="label">Impact:</span> {{ solution.impact }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'DisciplineSolutions',
  data() {
    return {
      scrollY: 0,
      sectionTop: 0,
      ticking: false,
      solutions: [
        {
          title: 'Cloud Infrastructure Migration',
          challenge:
            'The system stored uploaded files locally inside the API server and connected to a local MongoDB instance — neither of which could scale or survive a server restart in production.',
          solution:
            'Applied cloud computing knowledge from coursework to migrate file storage to AWS S3 with a new upload middleware, move the database to MongoDB Atlas, set up AWS EC2, and write an automated script to migrate existing local data to the live environment.',
          impact:
            'TIP DocHub became production-ready with persistent, scalable file storage and a reliable cloud database accessible from anywhere.',
        },
        {
          title: 'Multi-Role Authentication System',
          challenge:
            'TIP DocHub needed to distinguish between TIP students, TIP faculty, and external guest users — each with different access rights — while ensuring only legitimate TIP emails could access restricted content.',
          solution:
            'Leveraged software security and network principles to implement Google OAuth with TIP email subdomain detection (e.g., cpe.tip.edu.ph), a separate OTP-based guest registration flow with abuse-protection tokens, and department-head-level admin roles with middleware-enforced scoping by Department ID.',
          impact:
            'The system correctly segments all user types, prevents unauthorized access, and scales to support multi-department administration without exposing cross-department data.',
        },
        {
          title: 'Document Security & Access Control',
          challenge:
            'Research documents and instructional materials needed to be viewable online but fully protected from downloading, copying, or printing — a requirement from the institution.',
          solution:
            'Applied principles from information security coursework to implement a custom PDF viewer that disables right-click, copy-paste, download, and print. Additionally, file watermarks were made dynamic — generated per document based on the originating department using server-side logic.',
          impact:
            'Institutional documents are protected against unauthorized redistribution while remaining accessible to authorized users through the system.',
        },
        {
          title: 'Borrowing System with Dynamic Email Routing',
          challenge:
            'Documents from different departments needed their borrow requests emailed to the correct department head — but department heads change over time, making hard-coded emails fragile.',
          solution:
            'Designed a borrowing workflow that resolves the current department head dynamically by querying the Department collection at request time, filtering by Department ID and Faculty ID to retrieve the active head\'s email. Nodemailer handles the actual dispatch for both borrow requests and status updates (approved/rejected).',
          impact:
            'The borrowing system remains accurate regardless of staff changes, with no manual reconfiguration needed when department heads are updated.',
        },
        {
          title: 'API Security Hardening',
          challenge:
            'Both the Main and Admin APIs were exposed without rate limiting, security headers, or vulnerability patching — making them susceptible to abuse and common web attacks.',
          solution:
            'Applied knowledge from network security and web development subjects: integrated Helmet.js for HTTP security headers, set up Redis-backed rate limiters on both APIs, updated vulnerable dependencies (e.g., Next.js CWE-400, CWE-502), and implemented centralized error handlers across all endpoints.',
          impact:
            'Both APIs are significantly hardened against common attack vectors, with automated protections in place for abuse prevention and consistent error handling across the system.',
        },
      ],
    }
  },
  computed: {
    layerBgStyle() {
      const rel = this.scrollY - this.sectionTop
      return {
        transform: `translateY(${rel * 0.15}px)`,
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
  background: radial-gradient(ellipse at 40% 50%, #1a0518 0%, #002331 70%);
  z-index: 0;
  transition: transform 0.1s linear;
}

.layer-overlay {
  background: radial-gradient(ellipse at 40% 50%, rgba(255, 80, 120, 0.08) 0%, transparent 60%);
  z-index: 1;
}

.section-content {
  position: relative;
  z-index: 2;
  max-width: 1000px;
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
  color: #ff6b9d;
  text-transform: uppercase;
  display: block;
  margin-bottom: 10px;
}

h1 {
  font-family: 'Play', sans-serif;
  font-size: 2.2rem;
  color: #ffffff;
  margin: 0 0 16px;
  text-shadow: 0 0 30px rgba(255, 107, 157, 0.2);
}

.header-line {
  width: 60px;
  height: 3px;
  background: linear-gradient(to right, #ff6b9d, #00b8ff);
  margin: 0 auto;
  border-radius: 2px;
}

.intro-block {
  background: rgba(60, 10, 35, 0.45);
  border-left: 3px solid #ff6b9d;
  border-radius: 0 20px 20px 0;
  padding: 20px 28px;
  margin-bottom: 40px;
}

.intro-block p {
  font-size: 1.05rem;
  color: #cdd6f4;
  line-height: 1.8;
  margin: 0;
}

.solutions-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.solution-item {
  display: flex;
  gap: 24px;
  background: rgba(55, 10, 30, 0.45);
  border: 1px solid rgba(255, 107, 157, 0.2);
  border-radius: 22px;
  padding: 28px 24px;
  align-items: flex-start;
  transition: border-color 0.3s ease, transform 0.3s ease;
}

.solution-item:hover {
  border-color: rgba(255, 107, 157, 0.5);
  transform: translateX(4px);
}

.solution-number {
  font-family: 'Play', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: rgba(255, 107, 157, 0.25);
  min-width: 50px;
  line-height: 1;
  margin-top: 4px;
}

.solution-body h3 {
  font-family: 'Play', sans-serif;
  font-size: 1.1rem;
  color: #fff;
  margin-bottom: 14px;
}

.solution-body p {
  font-size: 0.97rem;
  color: #9aa5ce;
  line-height: 1.7;
  margin-bottom: 10px;
}

.solution-body p:last-child {
  margin-bottom: 0;
}

.label {
  color: #ff6b9d;
  font-family: 'Play', sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-right: 6px;
}

.applied .label {
  color: #00b8ff;
}

.impact .label {
  color: #00ff9f;
}

@media (max-width: 768px) {
  .section-page {
    padding: 60px 20px;
  }

  h1 {
    font-size: 1.7rem;
  }

  .solution-item {
    flex-direction: column;
    gap: 12px;
    padding: 20px 18px;
  }

  .solution-number {
    font-size: 1.4rem;
    min-width: unset;
  }

  .solution-body h3 {
    font-size: 1rem;
  }

  .solution-body p {
    font-size: 0.92rem;
  }

  .intro-block {
    padding: 16px 18px;
  }
}
</style>
