<template>
  <!-- Outer container that will center the content on the page -->
  <div class="outer-container">
    <div class="login-container">
      <h2 class="text_label">Kneel-soN</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="username" class="text_label">Username</label>
          <input
            type="text"
            id="username"
            v-model="username"
            :class="{ error: usernameError }"
            placeholder="Enter your username"
          />
          <span v-if="usernameError" class="error-message">{{ usernameError }}</span>
        </div>

        <div class="form-group">
          <label for="password" class="text_label">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            :class="{ error: passwordError }"
            placeholder="Enter your password"
          />
          <span v-if="passwordError" class="error-message">{{ passwordError }}</span>
        </div>

        <button type="submit" :disabled="isSubmitting">Login</button>

        <p v-if="loginError" class="error-message">{{ loginError }}</p>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

// State variables
const username = ref('')
const password = ref('')
const usernameError = ref('')
const passwordError = ref('')
const loginError = ref('')
const isSubmitting = ref(false)

// Import images explicitly to preload
import cyber4 from '@/assets/cyber4.gif'
import image2 from '@/assets/image2.jpg'
import devxotle from '@/assets/Devxotle-w.png'
import facebook from '@/assets/facebook.png'
import github from '@/assets/github-icon.png'
import linkedin from '@/assets/linkedin-logo.png'
import downloads from '@/assets/downloads.png'
import vets from '@/assets/showcase/vets.png'
import dochub from '@/assets/showcase/dochub.png'
import esm from '@/assets/showcase/esm.png'
import mcg from '@/assets/showcase/mcg.png'
import os from '@/assets/showcase/os.png'
import ppp from '@/assets/showcase/ppp.png'

// List of imported images
const imagesToPreload = [
  cyber4,
  image2,
  devxotle,
  facebook,
  github,
  linkedin,
  downloads,
  vets,
  dochub,
  esm,
  mcg,
  os,
  ppp,
]

// Preload images asynchronously
const preloadImages = async (images: string[]) => {
  const loadImage = (src: string) => {
    return new Promise<void>((resolve, reject) => {
      const img = new Image()
      img.src = src
      img.onload = () => resolve()
      img.onerror = (err) => reject(`Failed to load image: ${src}`)
    })
  }

  const promises = images.map((src) => loadImage(src))

  try {
    await Promise.all(promises) // Wait for all images to preload
    console.log('Images preloaded successfully')
  } catch (error) {
    console.error(error)
  }
}

// Access the router instance
const router = useRouter()

// Preload images when the component is mounted
onMounted(() => {
  preloadImages(imagesToPreload)
})

// Mock submit handler (You can replace this with actual authentication logic)
const handleSubmit = () => {
  // Reset errors
  usernameError.value = ''
  passwordError.value = ''
  loginError.value = ''

  if (!username.value) {
    usernameError.value = 'Username is required'
  }

  if (!password.value) {
    passwordError.value = 'Password is required'
  }

  if (usernameError.value || passwordError.value) {
    return
  }

  isSubmitting.value = true

  setTimeout(() => {
    if (username.value === 'neilson' && password.value === 'develop') {
      // Successful login, navigate to dashboard
      router.push('/portfolio')
      username.value = ''
      password.value = ''
    } else {
      loginError.value = 'Invalid username or password'
    }
    isSubmitting.value = false
  }, 1000)
}
</script>

<style scoped>
.outer-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Ensures the container takes the full height */
}

.login-container {
  width: 100%; /* Full width */
  max-width: 400px; /* Limit width to 400px */
  padding: 2rem;
  background-color: #00947bb9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: 'Play';
}

h2 {
  text-align: center;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

input {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  color: white; /* White text color */
  background-color: #33333386; /* Optional dark background */
}

input.error {
  border-color: #e74c3c;
}

button {
  width: 100%;
  padding: 1rem;
  background-color: #003152b2;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  cursor: pointer;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.error-message {
  color: #e74c3c;
  font-size: 0.875rem;
  margin-top: 0.5rem;
}

p {
  text-align: center;
  font-size: 0.875rem;
  color: #e74c3c;
}

.text_label {
  color: rgb(255, 255, 255);
}
</style>
