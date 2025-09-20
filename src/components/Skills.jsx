import React from 'react';

const skills = [
  'React Native',
  'Swift (iOS)',
  'Kotlin (Android)',
  'JavaScript',
  'TypeScript',
  'Node.js',
  'Firebase',
  'Git',
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">My Skills</h2>
        <div className="flex flex-wrap justify-center">
          {skills.map((skill, index) => (
            <span key={index} className="bg-gray-200 text-gray-800 text-lg font-semibold m-2 px-4 py-2 rounded-full">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
