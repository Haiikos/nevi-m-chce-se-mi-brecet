import React from 'react';
import jindra from "../assets/images/Jindra.png"
import anomal from "../assets/images/Anomaly.png"

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My <span className="green-gradient_text font-semibold drop-shadow">
        Projects
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Hi there! Welcome to my projects page, where I share the work I've been passionate about creating. Each project here represents
          a unique journey in design, development, and creativity, showcasing skills I've honed over time and challenges I've taken on.
        </p>
      </div>
      
      <div className="project-panel mt-10 flex flex-col gap-6">
        <div className="project-card bg-white p-5 rounded-lg shadow-lg flex flex-col items-center text-center">
          <img 
            src={jindra}
            alt="Jindra" 
            className="w-full h-50 object-cover rounded-md mb-4"
          />
          <h2 className="text-lg font-semibold text-slate-800">Knight Jindra</h2>
          <p className="text-sm text-slate-600 mt-2">
            This is first game that we ever created with my friends
          </p>
          <a 
            href="https://example.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mt-4 px-4 py-2 bg-green-400 text-white rounded-lg hover:bg-green-600 transition"
          >
            View Project
          </a>
        </div>
      </div>
      <div className="project-panel mt-10 flex flex-col gap-6">
        <div className="project-card bg-white p-5 rounded-lg shadow-lg flex flex-col items-center text-center">
          <img 
            src={anomal}
            alt="anomal" 

            className="w-full h-50 object-cover rounded-md mb-4"
          />
          <h2 className="text-lg font-semibold text-slate-800">An0maly</h2>
          <p className="text-sm text-slate-600 mt-2">
            This was our second game, Its a low poly 3d Horror game
          </p>
          <a 
            href="https://example.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mt-4 px-4 py-2 bg-green-400 text-white rounded-lg hover:bg-green-600 transition"
          >
            View Project
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
