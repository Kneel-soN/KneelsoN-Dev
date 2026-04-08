<template>
  <div class="section-page">
    <div class="parallax-layer layer-bg" :style="layerBgStyle"></div>
    <div class="parallax-layer layer-overlay"></div>

    <div class="section-content" v-motion-fade-visible>
      <div class="section-header">
        <span class="section-number">03</span>
        <h1>Background of the Training &amp; Project Involvement</h1>
        <div class="header-line"></div>
      </div>

      <div class="two-col">
        <div class="main-block" v-motion-fade-visible>
          <h3>Project Description</h3>
          <p>
            During my OJT at the Technological Institute of the Philippines – Manila (CPE Department),
            I was the primary developer of <strong>TIP DocHub</strong> — a full-stack academic
            document management and borrowing system built for TIP Manila's faculty, students, and
            external researchers. This was my 2nd OJT term; during my 1st term I had shadowed, but
            this time I wanted to put my skills to the test independently.
          </p>
          <p>
            The system handles document uploads, secure PDF viewing, syllabus management, a
            borrowing workflow with email notifications, multi-role authentication (TIP Google OAuth,
            guest registration), and a full admin dashboard. I also migrated the entire infrastructure
            from local storage and databases to AWS S3 and MongoDB Atlas.
          </p>

          <h3 style="margin-top: 32px">Main Objectives</h3>
          <ul class="objectives-list">
            <li>Build and maintain dual REST APIs (Main + Admin) using Node.js and Express</li>
            <li>Implement multi-role authentication: TIP students/faculty via Google OAuth, guest email registration</li>
            <li>Develop a document borrowing system with dynamic department-based email routing</li>
            <li>Migrate file storage to AWS S3 and database to MongoDB Atlas</li>
            <li>Apply API security: Helmet, Redis rate limiting, input validation, PDF access control</li>
            <li>Build a Syllabus/Course File Manager with drag-and-drop and printable output</li>
          </ul>
        </div>

        <div class="side-block" v-motion-pop-visible>
          <h3>My Responsibilities</h3>
          <div class="responsibility-item" v-for="item in responsibilities" :key="item.title">
            <div class="resp-dot"></div>
            <div>
              <strong>{{ item.title }}</strong>
              <p>{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'TrainingBackground',
  data() {
    return {
      scrollY: 0,
      sectionTop: 0,
      ticking: false,
      responsibilities: [
        {
          title: 'Full-Stack Development',
          desc: 'Built and integrated both frontend (Next.js) and backend (Node.js/Express) layers of TIP DocHub across the Main and Admin dashboards.',
        },
        {
          title: 'Cloud Infrastructure',
          desc: 'Migrated file storage to AWS S3 and database to MongoDB Atlas; set up AWS EC2; wrote an automated local-to-live database migration script.',
        },
        {
          title: 'Authentication Systems',
          desc: 'Implemented Google OAuth for TIP-email users (student/faculty subdomain detection) and a separate OTP-based guest registration flow.',
        },
        {
          title: 'Document & Syllabus Management',
          desc: 'Built a full Course File Manager with syllabus maker (drag-and-drop, key-value rows, outcome matrix, signature blocks) and secure PDF viewer.',
        },
        {
          title: 'Security Hardening',
          desc: 'Applied Helmet module, Redis-backed rate limiters, dynamic watermarking per department, and PDF access controls (no download, no copy, no print).',
        },
        {
          title: 'Email & Notification System',
          desc: 'Built a dynamic email routing system that finds the current department head per department and sends borrowing approval/rejection notifications.',
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
  background: radial-gradient(ellipse at 60% 50%, #0a2a1a 0%, #002331 70%);
  z-index: 0;
  transition: transform 0.1s linear;
}

.layer-overlay {
  background: radial-gradient(ellipse at 70% 40%, rgba(0, 255, 159, 0.09) 0%, transparent 60%);
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
  text-shadow: 0 0 30px rgba(0, 255, 159, 0.25);
}

.header-line {
  width: 60px;
  height: 3px;
  background: linear-gradient(to right, #00ff9f, #00b8ff);
  margin: 0 auto;
  border-radius: 2px;
}

.two-col {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 36px;
  align-items: start;
}

@media (max-width: 768px) {
  .section-page {
    padding: 60px 20px;
  }

  h1 {
    font-size: 1.7rem;
  }

  .two-col {
    grid-template-columns: 1fr;
  }

  .main-block p {
    font-size: 0.97rem;
  }

  .objectives-list li {
    font-size: 0.92rem;
  }
}

.main-block h3,
.side-block h3 {
  font-family: 'Play', sans-serif;
  font-size: 0.85rem;
  letter-spacing: 3px;
  color: #00ff9f;
  text-transform: uppercase;
  margin-bottom: 14px;
}

.main-block p {
  font-size: 1.05rem;
  color: #cdd6f4;
  line-height: 1.8;
  margin-bottom: 14px;
}

.objectives-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.objectives-list li {
  font-size: 1rem;
  color: #cdd6f4;
  padding: 8px 0 8px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  position: relative;
  line-height: 1.6;
}

.objectives-list li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: #00b8ff;
}

.side-block {
  background: rgba(0, 45, 30, 0.45);
  border: 1px solid rgba(0, 255, 159, 0.2);
  border-radius: 22px;
  padding: 28px 24px;
}

.responsibility-item {
  display: flex;
  gap: 14px;
  margin-bottom: 20px;
  align-items: flex-start;
}

.responsibility-item:last-child {
  margin-bottom: 0;
}

.resp-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #00ff9f;
  margin-top: 6px;
  flex-shrink: 0;
  box-shadow: 0 0 8px rgba(0, 255, 159, 0.6);
}

.responsibility-item strong {
  display: block;
  font-family: 'Play', sans-serif;
  font-size: 0.95rem;
  color: #fff;
  margin-bottom: 4px;
}

.responsibility-item p {
  font-size: 0.92rem;
  color: #9aa5ce;
  line-height: 1.6;
  margin: 0;
}
</style>
