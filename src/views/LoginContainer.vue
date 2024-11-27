<template>
    <div  class="login-container">
      <Login />
    </div>
  </template>
  
  <script setup lang="ts">
  import Login from './Login.vue'  // Import the Login component
  </script>
  
  <style scoped>
  /* Ensure html and body take up full height */
  html, body {
    height: 100%;
    margin: 0;
    overflow: hidden; /* Prevent scrollbars */
  }
  
  /* Flexbox to center the login component */
  .login-container {
    display: flex;
    justify-content: center; 
    align-items: center;      /* Center vertically */
    height: 100vh;            /* Full viewport height */
    width: 100vw;              /* Full width */
    padding: 0;               /* Remove large padding */
  }
  </style>
  