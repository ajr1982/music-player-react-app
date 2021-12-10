

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";


const Player = ({libraryStatus, currentSong, setCurrentSong, songs, setSongs, isPlaying, setIsPlaying, audioRef, songInfo, setSongInfo})=>{
   
    //Event Handlers
    const playSongHandler = ()=>{
        if(isPlaying){
        audioRef.current.pause();
        setIsPlaying(!isPlaying);
        }else{
        audioRef.current.play();
        setIsPlaying(!isPlaying);
        }
    }

    
    
    const getTime = (time)=>{
        return(
            Math.floor(time/60) + ':' + ('0' + Math.floor(time%60)).slice(-2)
        );
    }
    const dragHandler = (e)=>{
        audioRef.current.currentTime = e.target.value;
        setSongInfo({...songInfo, currentTime: e.target.value})
    }
    const skipTrackHandler = async (direction)=>{
        
        let currentIndex = songs.findIndex((song)=> song.id === currentSong.id);
        if(direction === 'skip-forward'){
            await setCurrentSong(songs[(currentIndex+1) % songs.length]);
        }
        if(direction === 'skip-back'){
            if((currentIndex-1) % songs.length === -1){
               await setCurrentSong(songs[songs.length -1]);
                if(isPlaying){
                    audioRef.current.play();
                }
                return;
            }
            await setCurrentSong(songs[(currentIndex-1) % songs.length]);
        }
        if(isPlaying){
            audioRef.current.play();
    }
        
    };
//Add styles
const trackAnim = {
    transform: `translateX(${songInfo.animationPercentage}%)`
};

    return(
<div  className={`player ${libraryStatus ? "library-active" : ""}`}>
    <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <div className="track" style={{background:`linear-gradient(to right, ${currentSong.color[0]},${currentSong.color[1]})`}}>
        <input min={0} max={songInfo.duration} value={songInfo.currentTime} onChange={dragHandler} type="range" />
            <div style={trackAnim} className="animate-track"></div>
        </div>
        
        <p>{getTime(songInfo.duration)}</p>
    </div>
    <div className="play-control">
        <FontAwesomeIcon  className="skip-back" onClick={()=>skipTrackHandler('skip-back')} size="2x" icon={faAngleLeft} />
        <FontAwesomeIcon onClick={playSongHandler} className="play" size="2x" icon={isPlaying ? faPause : faPlay} />
        <FontAwesomeIcon  className="skip-forward" onClick={()=>skipTrackHandler('skip-forward')} size="2x" icon={faAngleRight} />
    </div>
    
</div>
    )
}
export default Player;