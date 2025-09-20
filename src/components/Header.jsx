import React from 'react';

const Header = () => {
  return (
    <header className="bg-secondary text-white p-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Juliet</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#about" className="hover:text-accent">About</a></li>
            <li><a href="#projects" className="hover:text-accent">Projects</a></li>
            <li><a href="#skills" className="hover:text-accent">Skills</a></li>
            <li><a href="#contact" className="hover:text-accent">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
