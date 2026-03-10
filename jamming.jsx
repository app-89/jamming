import React from 'react';
import SearchBar from "./components/SearchBar";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("My Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  return (
    <div>
      <h1>Spotify Playlist Builder</h1>
      <SearchBar />
      <SearchResults tracks={searchResults} />
      <Playlist
        name={playlistName}
        tracks={playlistTracks}
      />
    </div>
  );

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

}


function mapTracks(tracks) {
  return tracks.map(track => ({
    id: track.id,
    name: track.name,
    artist: track.artists[0].name,
    uri: track.uri
  }));
}
const response = await fetch(url);
const data = await response.json();

const formattedTracks = mapTracks(data.items);

setSearchResults(formattedTracks);
export default App;