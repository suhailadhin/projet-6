import React from 'react';

const Header = () => {
  return (
    <header className='header'>
      <h1>Bienvenue dans mon Univers de Développeur &lt;/&gt; </h1>
     <nav>
        <ul className='navList'>
          <li><a href="/">Accueil</a></li>
          <li><a href="/about">À propos</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href='#projet'>Projet</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;