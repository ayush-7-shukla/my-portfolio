import React, { useRef } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "Ayush-Shukla7",   
        "Ayush-7", 
        form.current,
        "NaNnZ2qpu4ZOBdVsA"    
      )
      .then(
        (result) => {
          alert("✅ Message sent successfully!");
        },
        (error) => {
          alert("❌ Failed to send message. Try again.");
        }
      );
  };

  return (
    <section id="contact" className="py-20 container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Contact Me</h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-xl mx-auto bg-white dark:bg-gray-800 shadow-md rounded-xl p-8 space-y-4"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white"
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full p-3 border rounded-lg h-32 dark:bg-gray-700 dark:text-white"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
