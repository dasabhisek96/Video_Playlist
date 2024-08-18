import React from 'react';
import './ThumbnailTitle.css';

function ThumbnailTitle() {
  return (
    <div className="thumbnail-title">
        <h3>Thumbnail Title</h3>
      <input type="text" placeholder="Get Sporty in Style" />
      <h5>Video Status</h5>
      <div className="buttons">
        <button>Active</button>
        <button>Inactive</button>
      </div>
      <div className="product-list">
        <h5>Product List</h5>
        
      </div>
      <button className="update-button">Update Playlist</button>
    </div>
  );
}

export default ThumbnailTitle;
