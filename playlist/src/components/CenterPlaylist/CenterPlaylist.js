
/*import React, { useEffect, useState } from 'react';
import './CenterPlaylist.css';
import { fetchPlaylists, fetchFeeds } from '../../services/api';

function CenterPlaylist() {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    async function getPlaylists() {
      const allPlaylists = await fetchPlaylists();
      const allFeeds = await fetchFeeds();
      
      // Process and set playlists based on API responses
      setPlaylists(allPlaylists);
    }
    getPlaylists();
  }, []);

  return (
    <div className="center-playlist">
      <h1>Product Playlists</h1>
      <div className="playlist-videos">
        {playlists.map(playlist => (
          <div key={playlist.id} className="playlist-item">
            <img src={playlist.thumbnail} alt="Playlist Thumbnail" />
            <p>{playlist.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}



export default CenterPlaylist;*/
import React, { useEffect, useState } from 'react';
import './CenterPlaylist.css';
import { fetchPlaylists, fetchFeeds } from '../../services/api';

function CenterPlaylist() {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    async function getPlaylists() {
      try {
        const allPlaylists = await fetchPlaylists();
        // Ensure playlists is an array or fallback to an empty array
        setPlaylists(Array.isArray(allPlaylists) ? allPlaylists : []);
      } catch (error) {
        console.error('Error fetching playlists:', error);
        setPlaylists([]);
      }
    }
    getPlaylists();
  }, []);

  return (
    <div className="center-playlist">
      <h1>Product Playlists</h1>
      <div className="playlist-videos">
        {playlists.length > 0 ? (
          playlists.map(playlist => (
            <div key={playlist.id} className="playlist-item">
              <img src={playlist.thumbnail} alt="Playlist Thumbnail" />
              <img src={playlist.thumbnail} alt="Playlist Thumbnail" />
              <p>{playlist.name}</p>
            </div>
          ))
        ) : (
          <p>No playlists available</p>
        )}
      </div>
    </div>
  );
}

export default CenterPlaylist;

