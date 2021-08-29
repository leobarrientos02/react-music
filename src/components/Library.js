import React from "react";
//Import library song
import LibrarySong from "./LibrarySong";
// Importing font awsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//Importing the logos
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Library = ({ songs, setCurrentSong, setSongs }) =>{

    // Back to the top function
    const backToTop = () =>{
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return(
        <div className="library">
            <h2>Library</h2>
            <div className="library-songs">
               {songs.map( (song) => (
                   <LibrarySong songs={songs} setCurrentSong={setCurrentSong} song={song} id={song.id} key={song.id} setSongs={setSongs} />
               ))}
            </div>
            <button onClick={backToTop} className="topBtn">
                <FontAwesomeIcon className="arrow-up" size="2x" icon={faArrowUp} />
            </button>
        </div>
    );
};

export default Library;