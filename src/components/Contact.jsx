import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-primary py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="text-lg mb-8 max-w-xl mx-auto">
          I'm currently available for new opportunities. If you have a project in mind or just want to say hi, feel free to get in touch.
        </p>
        <form className="max-w-xl mx-auto">
          <div className="mb-4">
            <input type="text" placeholder="Your Name" className="w-full p-3 rounded bg-secondary text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent" />
          </div>
          <div className="mb-4">
            <input type="email" placeholder="Your Email" className="w-full p-3 rounded bg-secondary text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent" />
          </div>
          <div className="mb-4">
            <textarea placeholder="Your Message" rows="4" className="w-full p-3 rounded bg-secondary text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"></textarea>
          </div>
          <button type="submit" className="bg-accent text-white font-bold py-3 px-6 rounded-full hover:bg-secondary transition-colors duration-300">
            Send Message
          </button>
        </form>
        <div className="flex justify-center space-x-6 mt-8">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-accent">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-accent">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-accent">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
