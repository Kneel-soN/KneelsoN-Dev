<template>
  <div v-motion-fade-visible class="showcase-page">
    <h1>My Works and Experience</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. 
      Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
    <p>
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
      nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
      officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus 
      error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
    </p>
    <p>
      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
      consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro 
      quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
    </p>
    <div v-motion-pop-visible class="card-section">
  <v-container>
  <v-carousel hide-delimiters style="height: 250px; width: 60%; margin: 0 auto;"
  :interval="3000"
  cycle    
  progress="primary" 
  >
    <!-- Previous Button -->
    <template v-slot:prev="{ props }">
      <v-btn color="transparent" @click="props.onClick" style="color: blue;">
        &lt; <!-- This is the 'less than' symbol ( < ) -->
      </v-btn>
    </template>

    <!-- Next Button -->
    <template v-slot:next="{ props }">
      <v-btn color="transparent" @click="props.onClick" style="color: green;">
        &gt; <!-- This is the 'greater than' symbol ( > ) -->
      </v-btn>
    </template>

    <!-- Carousel Items -->
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <div class="d-flex justify-center align-center" style="height: 100%;">
      <Card
        :title="slide.title"
        :description="slide.description"
        :image="slide.image"
        :link="slide.link"
      />
      </div>
    </v-carousel-item>
  </v-carousel>
</v-container>

</div>

 
  </div>




</template>

<script lang="ts">
import Card from '../../../components/Card.vue';

export default {
  name: 'ShowcasePage',
  components: {
    Card,
  },
  data() {
    return {
      slides: [
  {
    title: "Muscle Control Gym",
    description: "This is Item number uno.",
    image: "https://via.placeholder.com/100",
    link: "https://muscle-control-gym-admin.vercel.app/"  // Add a link for the first slide
  },
  {
    title: "Pothole/Puddle Image Classifier",
    description: "This is Item number dos",
    image: "https://via.placeholder.com/100",
    link: "https://puddlepotholepredict.vercel.app/"  // Add a link for the second slide
  },
  {
    title: "TIP Manila Document Hub",
    description: "This is a description inside the card component. You can use this as a showcase of your content.",
    image: "https://via.placeholder.com/100",
    link: "https://muscle-control-gym-admin.vercel.app/"  // Add a link for the third slide
  },
  {
    title: "Operating System Scheduling Simulator",
    description: "This is a description inside the card component. You can use this as a showcase of your content.",
    image: "https://via.placeholder.com/100",
    link: "https://os-prelim-exam.vercel.app"  // Add a link for the fourth slide
  },
],

    };
  },
};
</script>

<style scoped>
.showcase-page {
  text-align: center;
  padding: 20px;
  color: #fdfdfd;
  background-color: rgba(0, 0, 0, 1);  /* Black background with 75% opacity */
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

.card-section {
  margin-top: 30px; /* Adds space above the card */
  display: flex;
  justify-content: center; /* Centers the card */
}
</style>
