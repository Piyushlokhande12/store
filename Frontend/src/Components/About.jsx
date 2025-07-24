import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const About = () => {
  return (
    <div >
      <Navbar />
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12  text-black p-10  dark:bg-slate-900 dark:text-white dark:border ">
        <div className="bg-white shadow-lg rounded-2xl max-w-4xl w-full p-8 ">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-6">About Our Bookstore</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Welcome to <span className="font-semibold text-blue-900">The Book Haven</span> — your one-stop destination
            for stories, knowledge, and imagination. Our mission is to ignite the love of reading in every person who walks through our virtual or physical doors.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Whether you're looking for the latest bestsellers, timeless classics, academic texts, or hidden indie gems,
            our curated collection offers something for every reader. We believe books are more than just pages — they are portals to new worlds.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Our dedicated team works tirelessly to ensure a seamless shopping experience, fast delivery, and personalized
            recommendations based on your reading interests. At The Book Haven, we don't just sell books — we build communities of book lovers.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Thank you for supporting a store that supports readers. Happy reading!
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
