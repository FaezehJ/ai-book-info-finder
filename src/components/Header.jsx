import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <header className="navbar bg-dark border-bottom border-bo" data-bs-theme="dark">
      <div className="search-container">
          <input type="text" placeholder="Search" />
          <button type="submit">
            <img src={searchIcon} alt="Search Icon" />
          </button>
        </div>
        <div className="col-6 text-center">
          <p className="navbar-text text-white mb-0">
            Welcome to Read, Connect, Create, a virtual hub for inspiring curious minds
            to discover the power of knowledge, wonders of reading, magic of bonding, 
            and the joy of creating! Have you read a good book lately? Get more information about it here!
          </p>
          <button className="btn btn-primary btn-lg">Click here now to get connected!</button>
        </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/learnmore">Learn More</Link>
      </nav>
    </header>
  );
}

export default Header;
