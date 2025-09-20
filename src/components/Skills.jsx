import React from 'react';

const skills = [
  'React',
  'React Native',
  'JavaScript',
  'TypeScript',
  'Node.js',
  'GraphQL',
  'Firebase',
  'Git',
  'Swift',
  'Kotlin',
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-primary">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">My Skills</h2>
        <div className="flex flex-wrap justify-center">
          {skills.map((skill, index) => (
            <div key={index} className="bg-secondary text-white text-lg font-semibold m-2 px-4 py-2 rounded-full">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
