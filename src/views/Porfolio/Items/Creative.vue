<template>
  <div v-motion-fade-visible class="creative-page">
    <h1>My Personal Creations</h1>
    <p>
  These are the product of my imagination, creativity, and resourcefulness (and maybe a byproduct of boredom). Each piece reflects the thoughts, ideas, and inspirations that have wandered through my mind, sometimes sparked by curiosity, other times by the need to break free from routine. These creations are more than just mere concepts; they are the tangible outcomes of moments spent exploring the unknown and pushing the boundaries of what I can do. Whether it's a sudden burst of creativity or a slow burn of contemplation, these works have been shaped by my desire to express, learn, and grow.
</p>


    <v-row
    class="centered-row"
      justify="center"
      align="center"  
      wrap
    >
      <v-col
        v-for="(card, index) in Cards"
        :key="index"
        cols="12"   
        sm="6"         
        md="4"         
        lg="3"   
      >
        <!-- Pass data to each Card2 component -->
        <Card2
          :title="card.title"
          :description="card.description"
          :image="card.image"
          :link="card.link"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Card2 from '@/components/Card2.vue'
import journal from '@/assets/card/journal.png'
import destiny from '@/assets/card/destiny.png'
import flower from '@/assets/card/flower.png'

export default {
  name: "Creative",
  components: {
    Card2,
  },
  data() {
    return {
      Cards: [
        {
          title: 'Destiny 2 Gameplay Edit',
          description: 'This is my Destiny Gameplay.',
          image: destiny,
          link: 'https://www.youtube.com/watch?v=-gh0Gwr-Tpo',
        },
        {
          title: 'P.E. Journal Project',
          description: 'Physical Education Journal with Cyberpunk Themes and assets.',
          image: journal,
          link: 'https://drive.google.com/file/d/1ie6r6Uz64DQ27cT-PM9-XLVjOgYbQHI2/view?usp=sharing',
        },
        {
          title: 'For My Habibi',
          description: 'Made using NextJS and CSS.',
          image: flower,
          link: 'https://formy-habibi.vercel.app/',
        },
      ],
    }
  }
}
</script>

<style scoped>
.creative-page {
  text-align: center;
  color: #fdfdfd;
  margin-top: 40px;
  font-family: 'Play', sans-serif;
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
