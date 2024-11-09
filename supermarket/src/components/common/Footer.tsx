import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="flex justify-center items-center bg-gray-200 h-24">
      <Link className="text-gray-600 hover:text-gray-800" href="/">Home</Link>
      <Link className="ml-4 text-gray-600 hover:text-gray-800" href="/about">About</Link>
    </footer>
  );
}

export default Footer;
