const Song = ({ libraryStatus, currentSong }) => {
	return (
		<div className={`song-container ${libraryStatus ? "library-active" : ""}`}>
			<img alt={currentSong.name} src={currentSong.cover} />
			<h2>{currentSong.name}</h2>
			<h3>{currentSong.artist}</h3>
		</div>
	);
};
export default Song;
