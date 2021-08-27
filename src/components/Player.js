import React, {useRef} from "react";
// Importing font awsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Importing the logos
import { faPlay, faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

const Player = ({currentSong,isPlaying, setIsPlaying}) => {
  // REF
  const audioRef = useRef(null);
  
  //Event Handlers
  const playSongHandler = () =>{
    //console.log(audioRef.current);
    if( isPlaying){
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    }
    else{
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
    
  } 
  
  return(
    <div className="player">
      <div className="time-control">
        <p>Start Time</p>
        <input type="range" />
        <p>End Time</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleDoubleLeft} />
        <FontAwesomeIcon onClick={playSongHandler} className="play" size="2x" icon={faPlay} />
        <FontAwesomeIcon className="skip-forward" size="2x" icon={faAngleDoubleRight} />
      </div>
      <audio ref={audioRef} src={currentSong.audio}></audio>
    </div>
  )
};

export default Player;
