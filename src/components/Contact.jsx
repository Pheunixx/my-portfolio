import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-800 text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="text-lg mb-8">
          I'm currently available for freelance work. If you have a project in mind, feel free to get in touch.
        </p>
        <a href="mailto:juliet.dev@example.com" className="bg-white text-gray-800 font-bold py-3 px-6 rounded-full hover:bg-gray-200">
          Email Me
        </a>
      </div>
    </section>
  );
};

export default Contact;
