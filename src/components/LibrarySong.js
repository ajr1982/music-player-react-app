const LibrarySong = ({
	song,
	songs,
	setSongs,
	currentSong,
	setCurrentSong,
	id,
	audioRef,
	isPlaying,
	setIsPlaying,
}) => {
	const songSelectHandler = async () => {
		await setCurrentSong(song);

		if (!isPlaying) {
			setIsPlaying(!isPlaying);
			audioRef.current.play();
		} else {
			audioRef.current.play();
		}
	};
	return (
		<div
			onClick={songSelectHandler}
			className={`library-song ${song.id === currentSong.id ? "selected" : ""}`}
		>
			<img alt={song.name} src={song.cover} />
			<div className="song-description">
				<h3>{song.name}</h3>
				<h4>{song.artist}</h4>
			</div>
		</div>
	);
};
export default LibrarySong;
