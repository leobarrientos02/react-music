import React from "react";
//Import library song
import LibrarySong from "./LibrarySong";

import { library } from "@fortawesome/fontawesome-svg-core";

const Library = ({ songs, setCurrentSong, setSongs, libraryStatus }) => {
  // Back to the top function
  const backToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            songs={songs}
            setCurrentSong={setCurrentSong}
            song={song}
            id={song.id}
            key={song.id}
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
