<template>
  <div class="card">
    <img :src="image" alt="Card Image" class="card-image"/>
    <div class="card-content">
    
      <h3 class="card-title">
        <a :href="link" target="_blank">{{ title }}</a>
      </h3>
      <p class="card-description">{{ description }}</p>
    </div>
  </div>
</template>

<script lang='ts'>
export default {
  name: 'Card',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.card {
  display: flex;

  overflow: hidden;
  width: 600px;
  margin-top: 20px;
}

.card-image {
  width: 200px;
  height: 200px;
  margin-top: 20px;
  margin-left: 50px;
  object-fit: cover;
  border-radius: 10px;

}

.card-content {
  padding: 30px;
  flex-grow: 1;
}

.card-title {
  font-size: 18px;
  margin-bottom: 8px;
}

.card-description {
  font-size: 14px;
  color: #666;
}

.card-title a {
  color: #007bff; /* Set a color for the link */
  text-decoration: none; /* Remove underline */
}

.card-title a:hover {
  text-decoration: underline; /* Optional: underline on hover */
}
</style>
