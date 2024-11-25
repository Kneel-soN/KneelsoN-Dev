<template>

  <header  class="fullViewportHeader">
<div class="headerStyle">
    <nav class="navigation">
      <ul>
        <li><router-link to="/portfolio#profile" >Profile</router-link></li>
        <li><router-link to="/portfolio#showcase">Showcase</router-link></li>
        <li><router-link to="/portfolio#creative">Creative</router-link></li>
        <li><router-link to="/portfolio#contact ">Contact</router-link></li>
      </ul>
    </nav>
  </div>

</header>

</template>

<script lang="ts">

</script>

<style scoped>


.fullViewportHeader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%; /* Full width */
  height: 18vh; /* Full viewport height */
  z-index: 10; /* Ensure it stays above the rest of the content */
  background-color: rgba(22, 21, 21, 0.5); /* Transparent background */
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
  background-color: rgba(22, 21, 21, 0.5); /* Slight transparent background for readability */
  color: white;
  padding: 25px 20px; /* Adjust padding for a smaller header */
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px; /* Adjust header height */
  border-radius: 30px; /* Optional, adds rounded corners */
  margin-top: 10px;

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
  font-size: 1rem; /* Increase the font size */
  font-weight: bold; /* Make the text bold for more impact */
  text-transform: uppercase; /* Optional: Makes the text uppercase */
}

.navigation a:hover {
  text-decoration: underline;
}
</style>
