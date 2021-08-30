import React, { useState } from "react";
//Import styles
import "./styles/app.scss";
//Adding Components
import Player from "./components/Player";
import Song from "./components/Song";
//Import Util
import data from "./util";
//Import Library
import Library from "./components/Library";
//import nav
import Nav from "./components/Nav";

function App() {
  // State
  // Use to return the array of objects from util.js
  const [songs, setSongs] = useState(data());

  // Grabs the first song from the arrray of object
  const [currentSong, setCurrentSong] = useState(songs[0]);

  // Determine if the song is playing, if not add pause button
  const [isPlaying, setIsPlaying] = useState(false);

  //State for library
  const [libraryStatus, setLibraryStatus] = useState(false);
  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        songs={songs}
        setSongs={setSongs}
      />
      <Library
        songs={songs}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
      />
    </div>
  );
}

export default App;
