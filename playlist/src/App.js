import React from 'react';
import './App.css';
import LeftMenu from './components/LeftMenu/LeftMenu';
import SearchBar from './components/SearchBar/SearchBar';
import CenterPlaylist from './components/CenterPlaylist/CenterPlaylist';
import ThumbnailTitle from './components/ThumbnailTitle/ThumbnailTitle';
import FlowButton from './components/FlowButton/FlowButton';

function App() {
  return (
    <div className="app">
      <SearchBar />
      <div className="main-content">
        <LeftMenu />
        <CenterPlaylist />
        <ThumbnailTitle />
      </div>
      <FlowButton />
    </div>
  );
}

export default App;
