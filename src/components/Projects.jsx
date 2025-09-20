import React from 'react';

const projects = [
  {
    title: 'Project One',
    description: 'A comprehensive project management tool designed to streamline workflows and boost productivity. Built with React and Node.js, it features real-time collaboration and a user-friendly interface.',
    image: 'https://placehold.co/600x400/1a202c/ffffff?text=Project+One',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    liveDemo: '#',
    sourceCode: '#',
  },
  {
    title: 'Project Two',
    description: 'An e-commerce platform with a modern design, focusing on a seamless user experience. It includes features like product filtering, a secure checkout process, and user reviews.',
    image: 'https://placehold.co/600x400/1a202c/ffffff?text=Project+Two',
    tags: ['React', 'Redux', 'Firebase', 'Stripe'],
    liveDemo: '#',
    sourceCode: '#',
  },
  {
    title: 'Project Three',
    description: 'A social networking app for book lovers. Users can create profiles, share their favorite books, and connect with other readers. Built with React Native for cross-platform compatibility.',
    image: 'https://placehold.co/600x400/1a202c/ffffff?text=Project+Three',
    tags: ['React Native', 'GraphQL', 'Apollo', 'PostgreSQL'],
    liveDemo: '#',
    sourceCode: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-primary py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-secondary rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap justify-center mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="bg-accent text-white text-sm font-semibold m-1 px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
                <div className="flex justify-center space-x-4">
                  <a href={project.liveDemo} className="text-white hover:text-accent font-bold">Live Demo</a>
                  <a href={project.sourceCode} className="text-white hover:text-accent font-bold">Source Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
