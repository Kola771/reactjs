// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../input.css';

function Navbar() {
  return (
    <nav>
      <ul class="flex">
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/posts">Publication</Link>
        </li>
        <li>
          <Link to="/savepost">Sauvegarde des publications</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
