import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white p-4 mt-10">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent">LinkedIn</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"className="hover:text-accent">Twitter</a>
        </div>
        <p>&copy; {new Date().getFullYear()} Juliet. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
