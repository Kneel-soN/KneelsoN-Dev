<template>
    <div class="login-container">
      <h2 class="text_label">Kneel-soN</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="username" class="text_label">Username</label>
          <input
            type="text"
            id="username"
            v-model="username"
            :class="{'error': usernameError}"
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
            :class="{'error': passwordError}"
            placeholder="Enter your password"
          />
          <span v-if="passwordError" class="error-message">{{ passwordError }}</span>
        </div>
  
        <button type="submit" :disabled="isSubmitting">Login</button>
  
        <p v-if="loginError" class="error-message">{{ loginError }}</p>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  // State variables
  const username = ref('');
  const password = ref('');
  const usernameError = ref('');
  const passwordError = ref('');
  const loginError = ref('');
  const isSubmitting = ref(false);
  
  // Access the router instance
  const router = useRouter();
  
  // Mock submit handler (You can replace this with actual authentication logic)
  const handleSubmit = () => {
    // Reset errors
    usernameError.value = '';
    passwordError.value = '';
    loginError.value = '';
  
    if (!username.value) {
      usernameError.value = 'Username is required';
    }
  
    if (!password.value) {
      passwordError.value = 'Password is required';
    }
  
    if (usernameError.value || passwordError.value) {
      return;
    }
  
    isSubmitting.value = true;
  

    setTimeout(() => {
      if (username.value === 'neilson' && password.value === 'develop') {
        // Successful login, navigate to dashboard
        router.push('/portfolio');
        username.value = '';
        password.value = '';
      } else {
        loginError.value = 'Invalid username or password';
      }
      isSubmitting.value = false;
    }, 1000);
  };
  </script>
  
  <style scoped>
  .login-container {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    padding: 2rem;
    background-color: #fed849;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    text-align: center;
    margin-bottom: 1.5rem;
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
  }
  
  input.error {
    border-color: #e74c3c;
  }
  
  button {
    width: 100%;
    padding: 1rem;
    background-color: #3498db;
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
    color: black; /* Change to the desired color */
  }
  </style>
  