import React from 'react';

const projects = [
  {
    title: 'Awesome App 1',
    description: 'A revolutionary app that changes the way you do things. Built with React Native.',
    image: 'https://via.placeholder.com/300',
  },
  {
    title: 'Cool App 2',
    description: 'An innovative solution to a common problem. Developed using Swift for iOS.',
    image: 'https://via.placeholder.com/300',
  },
  {
    title: 'Amazing App 3',
    description: 'A beautiful and functional app for daily use. Coded in Kotlin for Android.',
    image: 'https://via.placeholder.com/300',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-700">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
