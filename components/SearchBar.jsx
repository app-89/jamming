import { useState } from "react";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", searchTerm);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a song, artist, or album"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <button onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;