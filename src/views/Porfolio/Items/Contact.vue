<template>
  <div class="contact-page">
    <h1>Contact Me</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>

    <h2>Get in Touch</h2>
    <p>
      If you have any questions or would like to reach out, feel free to contact us via the
      information below:
    </p>

    <h3>Email:</h3>
    <p>mnpdinoso01@tip.edu.ph</p>


    <div class="image-and-social">
      <div class="social-icons">
        <a href="https://github.com/Kneel-soN" target="_blank">
          <img src="../../../assets/github-icon.png" alt="GitHub" />
        </a>

        <a href="https://www.linkedin.com/in/neilsondinoso/" target="_blank">
          <img src="../../../assets/linkedin-logo.png" alt="LinkedIn" />
        </a>
        <a href="https://www.facebook.com/neeeil24/" target="_blank">
          <img src="../../../assets/facebook.png" alt="Facebook" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=61559666672259" target="_blank">
          <img src="../../../assets/Devxotle-w.png" style="width: 75px;"lt="Devxotle" />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-page {
  display: flex; /* Use Flexbox layout */
  flex-direction: column; /* Stack content vertically */
  justify-content: center; /* Center content vertically */
  align-items: center; /* Center content horizontally */
  padding: 20px;
  font-family: Arial, sans-serif;
  color: #ffffff;
  height: 100vh; /* Full viewport height to center vertically */
  text-align: center; /* Center text horizontally */
}

.image-and-social {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 50px;
}

.social-icons {
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
}
.social-icons img:hover {
  transform: scale(1.1); /* Make the icon grow on hover */
  filter: brightness(1.2); /* Slightly brighten the icon on hover */

}


.social-icons img {
  width: 50px;  /* Set width to 50px */
  height: 50px; /* Set height to 50px */
  transition: transform 0.3s ease-in-out, filter 0.3s ease-in-out; 
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

h2 {
  font-size: 2rem;
  margin-top: 30px;
  margin-bottom: 10px;
}

h3 {
  font-size: 1.5rem;
  margin-top: 20px;
}

p {
  line-height: 1.6;
  margin-bottom: 15px;
}

ul {
  list-style-type: none;
  padding: 0;
}

ul li {
  margin-bottom: 5px;
}

a {
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
