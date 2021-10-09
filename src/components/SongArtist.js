const SongArtist = ({ artist }) => {
	return (
		<div>
			<h3>{artist.strArtist}</h3>
			<img src={artist.strArtistThumb} alt={artist.strArtist} />
			<p>
				{artist.intBornYear || "Not Found"} - {artist.intDiedYear || "Presente"}
			</p>
			<p>{artist.strCountry || "Not Found"}</p>
			<p>
				{artist.strGenre || "Not Found"} - {artist.strStyle || "Not Found"}
			</p>
			<p>
				<a
					href={`http://${artist.strWebsite}`}
					target="_blank"
					rel="noreferrer"
				>
					{artist.strWebsite ? "Sitio Web Oficial" : "Not Found"}
				</a>
			</p>
			<p style={{ whiteSpace: "pre-wrap" }}>
				{artist.strBiographyEN || "Not Found"}
			</p>
		</div>
	);
};

export default SongArtist;
