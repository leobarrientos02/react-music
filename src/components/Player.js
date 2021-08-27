import React, {useRef, useState} from "react";
// Importing font awsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Importing the logos
import { faPlay, faAngleDoubleLeft, faAngleDoubleRight, faVolumeMute } from "@fortawesome/free-solid-svg-icons";

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
    
  };
  
  const timeUpdateHandler = (e) =>{
    const current = e.target.currentTime;
    const duration = e.target.duration;
    //console.log(current);
    //console.log(duration);
    setSongInfo({...songInfo, currentTime: current, duration})
  };
  const getTime = (time) =>{
    return(
      // Format the time to a neat format
      Math.floor( time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    )
  };

  const dragHandler = (e) =>{
    //console.log(e.target.value);
    audioRef.current.currentTime = e.target.value;
    setSongInfo({...songInfo, currentTime: e.target.value});
  };

  //State
  const [songInfo, setSongInfo] = useState({
    currentTime: null,
    duration: null,   
  });
  return(
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <input 
          min={0} 
          max={songInfo.duration} 
          value={songInfo.currentTime} 
          type="range"
          onChange={dragHandler} 
        />
        <p>{getTime(songInfo.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleDoubleLeft} />
        <FontAwesomeIcon onClick={playSongHandler} className="play" size="2x" icon={faPlay} />
        <FontAwesomeIcon className="skip-forward" size="2x" icon={faAngleDoubleRight} />
      </div>
      <audio 
        onTimeUpdate={timeUpdateHandler} 
        onLoadedMetadata={timeUpdateHandler} 
        ref={audioRef} 
        src={currentSong.audio}>
      </audio>      
    </div>
  )
};

export default Player;
