<template>
  <div class="contact-page">
    <h1>Contact Us</h1>
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
    <p>example@example.com</p>

    <h3>Phone:</h3>
    <p>(123) 456-7890</p>

    <h3>Address:</h3>
    <p>1234 Lorem St.<br />Ipsum City, CA 98765</p>

    <h2>Follow Us</h2>
    <p>Follow us on social media for the latest updates:</p>
    <ul>
      <li><a href="#">Facebook</a></li>
      <li><a href="#">Twitter</a></li>
      <li><a href="#">Instagram</a></li>
      <li><a href="#">LinkedIn</a></li>
    </ul>
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
