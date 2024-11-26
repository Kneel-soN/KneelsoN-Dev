<template>
  <div class="header-container">
    <Header :backgroundImage="backgroundImage" />
  </div>
</template>

<script lang="ts">
import Header from '@/components/Header.vue'

export default {
  name: 'HeaderContainer',
  components: {
    Header,
  },
  props: {
    backgroundImage: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.header-container {
}
</style>
