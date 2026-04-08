<template>

  <header class="fullViewportHeader">
    <div v-motion-slide-top >
    <div class="headerStyle">
      <nav class="navigation">
        <ul>
          <li><router-link to="/portfolio#profile">Profile</router-link></li>
          <li><router-link to="/portfolio#showcase">Showcase</router-link></li>
          <li><router-link to="/portfolio#creative">Creatives</router-link></li>
          <li><router-link to="/portfolio#contact ">Contact</router-link></li>
        </ul>
      </nav>
    </div>
  </div>
  </header>

</template>

<script lang="ts">
export default {
  name: 'Header',
}
</script>

<style scoped>
.fullViewportHeader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%; /* Full width */
  z-index: 10; /* Ensure it stays above the rest of the content */
  color: white;
  display: flex;
  justify-content: center; /* Horizontally center content */
  align-items: center; /* Vertically center content */
}

.headerStyle {
  position: fixed;
  top: 0;
  left: 50%; /* Center horizontally */
  transform: translateX(-50%); /* Adjust for exact centering */
  width: auto; /* Let the content size determine the width */
  z-index: 10; /* Make sure it's above the other content */
  background-color: rgba(22, 21, 21, 0.8); /* Slight transparent background for readability */
  color: white;
  padding: 25px 20px; /* Adjust padding for a smaller header */
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px; /* Adjust header height */
  border-radius: 30px; /* Optional, adds rounded corners */
  margin-top: 5px;
}

.navigation ul {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.navigation li {
  margin-right: 15px; /* Adjust spacing between items */
}

.navigation a {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
}

.navigation a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .headerStyle {
    padding: 12px 16px;
    height: auto;
    width: calc(100% - 24px);
    border-radius: 16px;
    margin-top: 8px;
  }

  .navigation li {
    margin-right: 10px;
  }

  .navigation a {
    font-size: 0.72rem;
    letter-spacing: 0.5px;
  }
}

@media (max-width: 400px) {
  .navigation li {
    margin-right: 7px;
  }

  .navigation a {
    font-size: 0.65rem;
  }
}
</style>
