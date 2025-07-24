import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ContactUsMailto = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:youremail@example.com?subject=Contact from ${encodeURIComponent(
      formData.user_name
    )}&body=${encodeURIComponent(
      formData.message + "\n\nFrom: " + formData.user_email
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="flex flex-col min-h-screen py-10">
      <Navbar />

      <main className="flex-grow flex items-center justify-center bg-gray-100 px-4 py-12">
        <form
          onSubmit={handleSubmit}
          className="bg-white max-w-lg w-full rounded-lg shadow-md p-8 space-y-6"
        >
          <h2 className="text-2xl font-semibold text-center text-gray-800">
            Contact Us
          </h2>

          <input
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            required
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
            required
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Your Message"
            rows={5}
            className="w-full p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition-colors duration-300"
          >
            Send Email
          </button>
        </form>
      </main>

      <Footer />
    </div>
  );
};

export default ContactUsMailto;
