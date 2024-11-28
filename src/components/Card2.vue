<template>
  <div class="card">
    <img :src="image" alt="Card Image" class="card-image" />
    <div class="card-content">
      <h3 class="card-title">
        <a :href="link" target="_blank">{{ title }}</a>
      </h3>
      <p class="card-description">{{ description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Card2',
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.card {
  display: flex;
  overflow: hidden;
  width: 100%; /* Use full width for responsiveness */
  max-width: 600px; /* Set a maximum width */
  margin-top: 20px;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  flex-direction: row; /* Keep card content next to image */
  align-items: center; /* Vertically align image and text */
}

.card-image {
  width: 120px; /* Adjust image size */
  height: 120px;
  object-fit: cover;
  border-radius: 10px;
}

.card-content {
  padding: 20px;
  flex-grow: 1;
}

.card-title {
  font-size: 18px;
  margin-bottom: 8px;
}

.card-description {
  font-size: 14px;
  color: #e7e7e7;
}

.card-title a {
  color: #007bff;
  text-decoration: none;
}

.card-title a:hover {
  text-decoration: underline;
}

/* Media Queries for responsiveness */
@media (max-width: 768px) {
  .card {
    flex-direction: column; /* Stack content and image vertically on small screens */
    max-width: 100%; /* Full width on small screens */
  }

  .card-image {
    width: 100px; /* Smaller image for small screens */
    height: 100px;
  }

  .card-content {
    padding: 15px; /* Adjust padding */
  }

  .card-title {
    font-size: 16px; /* Smaller title on smaller screens */
  }

  .card-description {
    font-size: 12px; /* Smaller description on smaller screens */
  }
}

@media (max-width: 480px) {
  .card-image {
    width: 80px; /* Even smaller image on extra small screens */
    height: 80px;
  }

  .card-title {
    font-size: 14px; /* Further reduce title size */
  }

  .card-description {
    font-size: 10px; /* Even smaller description font */
  }
}
</style>
