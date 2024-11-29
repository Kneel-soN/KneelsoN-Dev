<template>
  <div class="contact-page">
    <h1>Contact Me</h1>

    <p>
      If you have any questions or would like to reach out, feel free to contact me by sending a message below.
    </p>

    <!-- Contact Form with a Container for Fields -->
    <form class="contact-form" @submit.prevent="handleSubmit">
      <div class="form-container">
        <!-- Name and Email Section -->
        <div class="name-email">
          <div class="form-group">
            <label for="name">Your Name:</label>
            <input
              type="text"
              v-model="name"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div class="form-group">
            <label for="email">Your Email:</label>
            <input
              type="email"
              v-model="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>
        </div>

        <!-- Message Section -->
        <div class="form-group">
          <label for="message">Your Message:</label>
          <textarea
            v-model="message"
            id="message"
            name="message"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>
      </div>

      <button type="submit">Send Message</button>
    </form>

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
          <img src="../../../assets/Devxotle-w.png" style="width: 75px;" alt="Devxotle" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init('aVcG9-8uQ3kGKd6u-'); // Replace with your actual public key

// Reactive form data
const name = ref('');
const email = ref('');
const message = ref('');

// Function to handle form submission
const handleSubmit = () => {
  const templateParams = {
    user_name: name.value,
    user_email: email.value,
    message: `From: ${name.value} (${email.value})\n\nMessage:\n${message.value}`,
  };

  // Send the email using EmailJS
  emailjs.send("service_lkqse7d","template_ms3xbfj", templateParams)
    .then((response) => {
      alert('Message sent successfully!');
      // Clear the form fields
      name.value = '';
      email.value = '';
      message.value = '';
    }, (error) => {
      alert('Failed to send message, please try again.');
      console.error('EmailJS Error:', error);
    });
};
</script>

<style scoped>
/* Your existing CSS styles remain the same */
.contact-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  font-family: Arial, sans-serif;
  color: #ffffff;
  height: 100vh;
  text-align: center;
  font-family: 'Play', sans-serif;
  background-image: linear-gradient(
    to top,
    #000000 ,
    /* Start with dark teal at the bottom */ #173643 100%,
    /* Transition to black at the center */ #000000 100% /* End with dark teal at the top */
  );
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
  font-size: 1.2rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 80%;
  max-width: 600px;
  margin-top: 30px;
}

.form-container {
  background-color: 	#001eff1a; /* Dark background for the form container */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(121, 103, 103, 0.2); /* Soft shadow effect */
  width: 100%;
}

.name-email {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
}

.form-group {
  flex-basis: 45%; /* Each input takes up 45% of the container width */
}

.contact-form label {
  font-size: 1.2rem;
  margin-bottom: 5px;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 2px solid #166da7;
  border-radius: 8px;
  background-color: #f9f9f9;
  margin-bottom: 15px;
  transition: all 0.3s ease;
}

.contact-form input:focus,
.contact-form textarea:focus {
  border-color: #007bff;
  background-color: #e8f4ff;
}

.contact-form button {
  padding: 10px 20px;
  font-size: 1.2rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.contact-form button:hover {
  background-color: #0056b3;
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

.social-icons img {
  width: 50px;
  height: 50px;
  transition: transform 0.3s ease-in-out, filter 0.3s ease-in-out;
}

.social-icons img:hover {
  transform: scale(1.1);
  filter: brightness(1.2);
}

a {
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
