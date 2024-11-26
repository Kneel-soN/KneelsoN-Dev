<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

watch(
  route,
  () => {
    const title = (route.meta.title as string) || 'KneelsoN - Dev'
    document.title = title
  },
  { immediate: true },
)
</script>
