import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white p-4 mt-10">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Juliet. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
