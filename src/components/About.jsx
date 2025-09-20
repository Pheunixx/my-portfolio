import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-primary">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <img
          src="https://placehold.co/150x150"
          alt="Juliet"
          className="w-40 h-40 rounded-full mx-auto mb-8"
        />
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          I am a results-oriented mobile app developer with a passion for creating intuitive and user-friendly applications. With a strong foundation in both iOS and Android development, I specialize in building high-quality, scalable, and performant mobile solutions. I am a quick learner, a collaborative team player, and I am always looking for new challenges to tackle.
        </p>
      </div>
    </section>
  );
};

export default About;
