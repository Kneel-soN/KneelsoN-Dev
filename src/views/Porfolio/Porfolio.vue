<template>
  <div>
    <div class="content">
      <!-- 01 Student Profile -->
      <section id="profile" data-reveal class="is-revealed">
        <Profile />
      </section>

      <div class="section-divider"></div>

      <!-- 02 Company Profile -->
      <section id="company" data-reveal>
        <CompanyProfile />
      </section>

      <div class="section-divider"></div>

      <!-- 03 Background of Training & Project Involvement -->
      <section id="training" data-reveal>
        <TrainingBackground />
      </section>

      <div class="section-divider"></div>

      <!-- 04 Project Involvement Deliverables (Showcase) -->
      <section id="showcase" data-reveal>
        <Showcase />
      </section>

      <div class="section-divider"></div>

      <!-- 05 Professional Learning & Development -->
      <section id="learning" data-reveal>
        <LearningDevelopment />
      </section>

      <div class="section-divider"></div>

      <!-- 06 Modern Techniques, Skills & Tools -->
      <section id="techniques" data-reveal>
        <ModernTechniques />
      </section>

      <div class="section-divider"></div>

      <!-- 07 Discipline-Related Solutions -->
      <section id="solutions" data-reveal>
        <DisciplineSolutions />
      </section>

      <div class="section-divider"></div>

      <!-- 08 OJT Reflection -->
      <section id="reflection" data-reveal>
        <OJTReflection />
      </section>

      <div class="section-divider"></div>

      <!-- Creative / Personal Projects -->
      <section id="creative" data-reveal>
        <Creative />
      </section>

      <div class="section-divider"></div>

      <!-- Contact -->
      <section id="contact" data-reveal>
        <Contact />
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import Lenis from 'lenis'
import HeaderContainer from '../HeaderContainer.vue'
import Profile from './Items/Profile.vue'
import CompanyProfile from './Items/CompanyProfile.vue'
import TrainingBackground from './Items/TrainingBackground.vue'
import Showcase from './Items/Showcase.vue'
import LearningDevelopment from './Items/LearningDevelopment.vue'
import ModernTechniques from './Items/ModernTechniques.vue'
import DisciplineSolutions from './Items/DisciplineSolutions.vue'
import OJTReflection from './Items/OJTReflection.vue'
import Creative from './Items/Creative.vue'
import Contact from './Items/Contact.vue'

export default defineComponent({
  name: 'Portfolio',
  components: {
    HeaderContainer,
    Profile,
    CompanyProfile,
    TrainingBackground,
    Showcase,
    LearningDevelopment,
    ModernTechniques,
    DisciplineSolutions,
    OJTReflection,
    Creative,
    Contact,
  },
  setup() {
    const route = useRoute()
    let lenis: Lenis | null = null
    let rafId: number | null = null
    let revealObserver: IntersectionObserver | null = null

    const initLenis = () => {
      if (window.innerWidth <= 991) return

      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      })

      const raf = (time: number) => {
        lenis!.raf(time)
        rafId = requestAnimationFrame(raf)
      }
      rafId = requestAnimationFrame(raf)
    }

    const initRevealObserver = () => {
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-revealed')
              revealObserver!.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.06, rootMargin: '0px 0px -40px 0px' },
      )

      document.querySelectorAll('section[data-reveal]').forEach((el) => {
        revealObserver!.observe(el)
      })
    }

    const scrollToHash = () => {
      const hash = route.hash
      if (!hash) return
      const element = document.querySelector(hash)
      if (!element) return

      const headerHeight = document.querySelector('.header')?.clientHeight || 0
      let offset = 40
      if (hash === '#showcase') offset = 90
      if (hash === '#contact') offset = 90

      const targetOffset = -(headerHeight + offset)

      if (lenis) {
        lenis.scrollTo(element as HTMLElement, { offset: targetOffset })
      } else {
        const top = element.getBoundingClientRect().top + window.pageYOffset + targetOffset
        window.scrollTo({ top, behavior: 'smooth' })
      }
    }

    onMounted(() => {
      initLenis()
      initRevealObserver()
      scrollToHash()
    })

    onUnmounted(() => {
      if (rafId !== null) cancelAnimationFrame(rafId)
      lenis?.destroy()
      revealObserver?.disconnect()
    })

    watch(() => route.hash, () => scrollToHash())

    return {}
  },
})
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

section {
  width: 100%;
  box-sizing: border-box;
}

.section-divider {
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, transparent, rgba(0, 184, 255, 0.3), transparent);
  flex-shrink: 0;
}

@media (max-width: 768px) {
  section {
    margin: 30px 0;
    padding: 15px;
  }
}
</style>

<!-- Global: clip-path section reveals + ambient overlay animation -->
<style>
section[data-reveal] {
  clip-path: inset(6% 0% 6% 0%);
  opacity: 0;
  transition:
    clip-path 1.1s cubic-bezier(0.25, 1, 0.5, 1),
    opacity 0.85s ease;
}

section[data-reveal].is-revealed {
  clip-path: inset(0% 0% 0% 0%);
  opacity: 1;
}

/* Ambient breathing animation on all section overlay layers */
.layer-overlay {
  animation: ambientPulse 7s ease-in-out infinite alternate;
}

@keyframes ambientPulse {
  0% {
    opacity: 0.6;
    transform: scale(1);
  }
  100% {
    opacity: 1;
    transform: scale(1.06);
  }
}
</style>
