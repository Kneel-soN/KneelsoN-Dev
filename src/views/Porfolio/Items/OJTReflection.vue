<template>
  <div class="section-page">
    <div class="parallax-layer layer-bg" :style="layerBgStyle"></div>
    <div class="parallax-layer layer-overlay"></div>

    <div class="section-content" v-motion-fade-visible>
      <div class="section-header">
        <span class="section-number">08</span>
        <h1>Summary of OJT Reflection</h1>
        <div class="header-line"></div>
      </div>

      <div class="reflection-grid">
        <div class="reflection-card challenge-card" v-motion-fade-visible>
          <div class="card-accent"></div>
          <h3>Biggest Challenges</h3>
          <ul>
            <li>
              Taking full ownership of a production system with real users — every bug, security
              gap, or broken feature directly impacted TIP faculty, students, and researchers.
            </li>
            <li>
              Setting up cloud infrastructure (AWS EC2, S3, MongoDB Atlas) for the first time
              without a senior engineer to guide the process — requiring heavy research and
              trial-and-error in a live environment.
            </li>
            <li>
              Managing scope across a large feature set — from OAuth flows to syllabus makers to
              borrowing systems — while maintaining code quality and consistency throughout.
            </li>
          </ul>
        </div>

        <div class="reflection-card success-card" v-motion-fade-visible>
          <div class="card-accent"></div>
          <h3>Biggest Successes</h3>
          <ul>
            <li>
              Delivered a fully functional document borrowing system with dynamic department-based
              email routing, PDF security controls, and multi-role access — all in a single OJT term.
            </li>
            <li>
              Successfully migrated the entire TIP DocHub infrastructure from local storage and
              a local MongoDB instance to AWS S3 and MongoDB Atlas, making the system production-ready.
            </li>
            <li>
              Built a complete Syllabus Maker with drag-and-drop row management, printable output,
              and a legacy PDF viewer — a feature set requested by the department that I scoped
              and delivered independently.
            </li>
          </ul>
        </div>
      </div>

      <div class="growth-block" v-motion-fade-visible>
        <h3>Personal Growth</h3>
        <p>
          This OJT was my proving ground. During my 1st term I had shadowed, but going into my
          2nd term I chose to go all-in — not because it was required, but because I had free
          time and I wanted to see what I was capable of. The result was TIP DocHub: a system
          I built largely on my own, end-to-end, across full-stack, cloud, and security domains.
          I grew from someone who could build features into someone who can own a system.
        </p>
      </div>

      <div class="takeaways-row">
        <div class="takeaway" v-for="item in takeaways" :key="item.title" v-motion-pop-visible>
          <div class="takeaway-icon">{{ item.icon }}</div>
          <h4>{{ item.title }}</h4>
          <p>{{ item.desc }}</p>
        </div>
      </div>

      <div class="closing-block" v-motion-fade-visible>
        <h3>Moving Forward</h3>
        <p>
          This OJT reaffirmed my passion for full-stack and backend engineering. Shipping TIP
          DocHub — from Google OAuth to AWS S3, from secure PDF viewing to a dynamic borrowing
          system — gave me a concrete picture of what production software looks like and what it
          demands. Going forward, I plan to deepen my expertise in system design, distributed
          systems, and cloud-native architecture, building on the foundation laid here.
        </p>
        <p>
          The OJT was not just a requirement — it was the moment I stopped being a student
          and started becoming a software engineer.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'OJTReflection',
  data() {
    return {
      scrollY: 0,
      sectionTop: 0,
      ticking: false,
      takeaways: [
        {
          icon: '🔑',
          title: 'Own the System',
          desc: 'Real growth comes from end-to-end responsibility — not just writing features, but owning deployments, failures, and decisions.',
        },
        {
          icon: '☁️',
          title: 'Cloud is Non-Negotiable',
          desc: 'Migrating to AWS and Atlas showed me that production-readiness means cloud-native from the start.',
        },
        {
          icon: '🛡️',
          title: 'Security First',
          desc: 'Security is not a feature to add later. Rate limiting, Helmet, OAuth, and access control must be built in from day one.',
        },
        {
          icon: '🎯',
          title: 'Initiative Defines You',
          desc: 'I chose to go beyond the minimum. That decision defined my OJT — and confirmed the kind of engineer I want to be.',
        },
      ],
    }
  },
  computed: {
    layerBgStyle() {
      const rel = this.scrollY - this.sectionTop
      return {
        transform: `translateY(${rel * 0.12}px)`,
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
  background: radial-gradient(ellipse at 60% 45%, #100828 0%, #002331 70%);
  z-index: 0;
  transition: transform 0.1s linear;
}

.layer-overlay {
  background: radial-gradient(ellipse at 60% 40%, rgba(120, 80, 255, 0.1) 0%, transparent 60%);
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
  margin-bottom: 44px;
  text-align: center;
}

.section-number {
  font-family: 'Play', sans-serif;
  font-size: 0.85rem;
  letter-spacing: 6px;
  color: #a78bfa;
  text-transform: uppercase;
  display: block;
  margin-bottom: 10px;
}

h1 {
  font-family: 'Play', sans-serif;
  font-size: 2.6rem;
  color: #ffffff;
  margin: 0 0 16px;
  text-shadow: 0 0 30px rgba(167, 139, 250, 0.25);
}

.header-line {
  width: 60px;
  height: 3px;
  background: linear-gradient(to right, #a78bfa, #00b8ff);
  margin: 0 auto;
  border-radius: 2px;
}

.reflection-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 30px;
}

@media (max-width: 768px) {
  .section-page {
    padding: 60px 20px;
  }

  h1 {
    font-size: 1.75rem;
  }

  .reflection-grid {
    grid-template-columns: 1fr;
  }

  .growth-block {
    padding: 18px 18px;
  }

  .growth-block p {
    font-size: 0.97rem;
  }

  .takeaways-row {
    grid-template-columns: 1fr 1fr;
  }

  .closing-block {
    padding: 20px 20px;
  }

  .closing-block p {
    font-size: 0.97rem;
  }
}

@media (max-width: 480px) {
  .takeaways-row {
    grid-template-columns: 1fr;
  }
}

.reflection-card {
  position: relative;
  background: rgba(20, 10, 40, 0.5);
  border-radius: 22px;
  padding: 28px 24px 24px;
  border: 1px solid rgba(167, 139, 250, 0.2);
  overflow: hidden;
  transition: transform 0.3s ease;
}

.reflection-card:hover {
  transform: translateY(-4px);
}

.card-accent {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  border-radius: 16px 16px 0 0;
}

.challenge-card .card-accent {
  background: linear-gradient(to right, #ff6b9d, #ff9f6b);
}

.success-card .card-accent {
  background: linear-gradient(to right, #00ff9f, #00b8ff);
}

.reflection-card h3 {
  font-family: 'Play', sans-serif;
  font-size: 0.9rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 16px;
}

.challenge-card h3 { color: #ff6b9d; }
.success-card h3 { color: #00ff9f; }

.reflection-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.reflection-card ul li {
  font-size: 0.97rem;
  color: #9aa5ce;
  line-height: 1.7;
  padding: 8px 0 8px 18px;
  border-bottom: 1px solid rgba(255,255,255,0.05);
  position: relative;
}

.reflection-card ul li:last-child {
  border-bottom: none;
}

.reflection-card ul li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: #a78bfa;
}

.growth-block {
  background: rgba(40, 20, 80, 0.45);
  border-left: 3px solid #a78bfa;
  border-radius: 0 20px 20px 0;
  padding: 22px 28px;
  margin-bottom: 30px;
}

.growth-block h3 {
  font-family: 'Play', sans-serif;
  font-size: 0.85rem;
  letter-spacing: 3px;
  color: #a78bfa;
  text-transform: uppercase;
  margin-bottom: 12px;
}

.growth-block p {
  font-size: 1.02rem;
  color: #cdd6f4;
  line-height: 1.8;
  margin: 0;
}

.takeaways-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 16px;
  margin-bottom: 30px;
}

.takeaway {
  background: rgba(35, 18, 70, 0.5);
  border: 1px solid rgba(167, 139, 250, 0.25);
  border-radius: 22px;
  padding: 20px 18px;
  text-align: center;
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.takeaway:hover {
  transform: translateY(-4px);
  border-color: rgba(167, 139, 250, 0.55);
}

.takeaway-icon {
  font-size: 1.8rem;
  margin-bottom: 10px;
}

.takeaway h4 {
  font-family: 'Play', sans-serif;
  font-size: 0.85rem;
  letter-spacing: 2px;
  color: #a78bfa;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.takeaway p {
  font-size: 0.88rem;
  color: #9aa5ce;
  line-height: 1.6;
  margin: 0;
}

.closing-block {
  background: rgba(30, 15, 60, 0.5);
  border: 1px solid rgba(167, 139, 250, 0.2);
  border-radius: 24px;
  padding: 28px 32px;
}

.closing-block h3 {
  font-family: 'Play', sans-serif;
  font-size: 0.85rem;
  letter-spacing: 3px;
  color: #00b8ff;
  text-transform: uppercase;
  margin-bottom: 16px;
}

.closing-block p {
  font-size: 1.02rem;
  color: #cdd6f4;
  line-height: 1.8;
  margin-bottom: 12px;
}

.closing-block p:last-child {
  margin-bottom: 0;
  color: #a78bfa;
  font-style: italic;
}
</style>
