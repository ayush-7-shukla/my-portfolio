import React from "react";

const Footer = () => {
  return (
    <footer id="contact" className="p-6 bg-gray-800 text-white text-center">
      <p>Connect with me: 
        <a href="https://github.com/ayush-7-shukla" target="_blank" className="text-yellow-400 ml-2">GitHub</a> | 
        <a href="https://linkedin.com/in/yourusername" target="_blank" className="text-yellow-400 ml-2">LinkedIn</a> | 
        <a href="mailto:ayushshukla6393@gmail.com" className="text-yellow-400 ml-2">Email</a>
      </p>
      <p className="mt-2">&copy; {new Date().getFullYear()} Ayush Shukla. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
