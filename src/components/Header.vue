<template>
  <header class="header">

    <nav class="navigation">
      <ul>
        <li><router-link to="/portfolio#profile" >Profile</router-link></li>
        <li><router-link to="/portfolio#showcase">Showcase</router-link></li>
        <li><router-link to="/portfolio#creative">Creative</router-link></li>
        <li><router-link to="/portfolio#contact ">Contact</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
export default {
  name: 'Header',


};
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 50%; /* Center horizontally */
  transform: translateX(-50%); /* Adjust for exact centering */
  width: auto; /* Let the content size determine the width */
  z-index: 10; /* Make sure it's above the other content */
  background-color: #161515ab;
  color: white;
  padding: 25px 20px; /* Adjust padding for a smaller header */
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10px; /* Smaller header height */
  border-radius: 30px; /* Optional, adds rounded corners */
  margin-top: 10px ;
}

.logo img {
  height: 30px; /* Smaller logo */
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
