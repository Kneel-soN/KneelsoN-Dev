<template>
  <!-- Outer container that will center the content on the page -->
  <div style="align-self: center align-items:center;" class="outer-container">
    <div class="load1"></div>
    <div class="load2"></div>
    <div class="load3"></div>
    <div class="load4"></div>
    <div class="load5"></div>
    <div class="load6"></div>
    <div class="load7"></div>
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
import { ref } from 'vue'
import { useRouter } from 'vue-router'

// State variables
const username = ref('')
const password = ref('')
const usernameError = ref('')
const passwordError = ref('')
const loginError = ref('')
const isSubmitting = ref(false)

// Access the router instance
const router = useRouter()

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
}
.load1 {
  background-image: url('@/assets/cyber4.gif'); /* Replace with your background image */
}

.load2 {
  background-image: url('@/assets/image2.jpg'); /* Replace with your background image */
}
.load3 {
  background-image: url('@/assets/Devxotle-w.png'); /* Replace with your background image */
}

.load4 {
  background-image: url('@/assets/facebook.png'); /* Replace with your background image */
}

.load5 {
  background-image: url('@/assets/github-icon.png'); /* Replace with your background image */
}

.load6 {
  background-image: url('@/assets/linkedin-logo.png'); /* Replace with your background image */
}
.load7 {
  background-image: url('@/assets/downloads.png'); /* Replace with your background image */
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
