import React from 'react';
import './SearchBar.css';

function SearchBar() {
  return (
    <div className="search-bar">
      <div className="left">
        <span>Design Studio</span>
        <span>Support Request</span>
        <span>Product Tour</span>
      </div>
      <div className="right">
        <input type="text" placeholder="Search Project" />
        <i className="fas fa-search"></i>
        <i className="fas fa-bell"></i>
        <div className="user-profile">Username</div>
      </div>
    </div>
  );
}

export default SearchBar;
