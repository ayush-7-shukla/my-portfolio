import React from "react";

function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8 container mx-auto px-6">
        {/* Project Card */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
          <img src="https://via.placeholder.com/400x200" alt="Project 1" className="w-full" />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Project One</h3>
            <p className="text-gray-600 mb-4">A cool project built with React and Tailwind CSS.</p>
            <a href="#" className="text-blue-600 font-medium hover:underline">View Project →</a>
          </div>
        </div>

        {/* Add more project cards here */}
      </div>
    </section>
  );
}

export default Projects;
