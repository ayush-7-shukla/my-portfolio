import React from "react";

function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center"
    >
      <h2 className="text-5xl font-bold mb-4">Hi, I'm Ayush 👋</h2>
      <p className="text-xl mb-6">A passionate developer building awesome projects.</p>
      <a
        href="#projects"
        className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-200 transition"
      >
        View My Work
      </a>
    </section>
  );
}

export default Hero;
