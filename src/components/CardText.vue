<template>
  <div class="card">
    <div class="card-content">
      <h3 class="card-title">{{ title }}</h3>
      <p class="card-description">{{ description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'CardText',
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
  },
}
</script>

<style scoped>
.card {
  display: flex;
  overflow: hidden;
  width: 350px;
}

.card-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
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
</style>
