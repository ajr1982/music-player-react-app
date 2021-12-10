import React from "react";
import LibrarySong from "./LibrarySong";
const Library = ({
	songs,
	currentSong,
	setCurrentSong,
	audioRef,
	isPlaying,
	setIsPlaying,
	setSongs,
	libraryStatus,
}) => {
	return (
		<div className={`library ${libraryStatus ? "active-library" : ""}`}>
			<h2>Library</h2>
			<div className="library-songs">
				{songs.map((song) => (
					<LibrarySong
						song={song}
						setSongs={setSongs}
						songs={songs}
						setCurrentSong={setCurrentSong}
						currentSong={currentSong}
						id={song.id}
						key={song.id}
						audioRef={audioRef}
						isPlaying={isPlaying}
						setIsPlaying={setIsPlaying}
					/>
				))}
			</div>
		</div>
	);
};
export default Library;
