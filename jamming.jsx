import React from 'react';
import React, { useState } from 'react';
import SearchBar from "./components/SearchBar";
import searchAPI from "./components/searchAPI";
import SearchResults from "./components/SearchResults";
import Playlist from "./components/Playlist";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("My Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  
const search = async (term) => {
  const results = await searchAPI.search(term);
  setSearchResults(results);
};

const addTrack = (track) => {
  if (playlistTracks.find(t => t.id === track.id)) return;
  setPlaylistTracks([...playlistTracks, track]);
};

const removeTrack = (track) => {
  setPlaylistTracks(
    playlistTracks.filter(t => t.id !== track.id)
  );
};


  const updatePlaylistName = (name) => {
  setPlaylistName(name);
};

  return (
    <div>
      <h1>Spotify Playlist Builder</h1>
      <SearchBar onSearch={search}/>
      <SearchResults tracks={searchResults} onAdd={addTrack} />
      <Playlist
        name={playlistName}
        tracks={playlistTracks}
        onRemove={removeTrack}
        onNameChange={updatePlaylistName}
      />
    </div>
  );

}


function mapTracks(tracks) {
  return tracks.map(track => ({
    id: track.id,
    name: track.name,
    artist: track.artists[0].name,
    uri: track.uri
  }));
}

  var state = generateRandomString(16);
  var scope = 'user-read-private user-read-email';

  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state
    }));

const Spotify = {
  async search(term) {

  },

  async savePlaylist(name, trackUris) {

  }
};

export { Spotify };
export default App;

