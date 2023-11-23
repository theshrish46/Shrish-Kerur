// Header.js

import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="py-4 px-8">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold">Your Name</div>
        <nav>
          <ul className="flex space-x-4">
            <li className="hover:text-gray-400 transition duration-300">
              <Link href="#about">About</Link>
            </li>
            <li className="hover:text-gray-400 transition duration-300">
              <Link href="#skills">Skills</Link>
            </li>
            <li className="hover:text-gray-400 transition duration-300">
              <Link href="#projects">Projects</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
