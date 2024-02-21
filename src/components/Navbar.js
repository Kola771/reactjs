// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../input.css';
import '../output.css';

function Navbar() {
  return (
    <nav class="bg-sky-600">
      <ul class="m-auto w-[70%] flex p-4 bg-sky-600 justify-between">
        <li>
          <Link to="/" class="text-white text-[15px]">Accueil</Link>
        </li>
        <li>
          <Link to="/posts" class="text-white text-[15px]">Publication</Link>
        </li>
        <li>
          <Link to="/savepost" class="text-white text-[15px]">Sauvegarde des publications</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
