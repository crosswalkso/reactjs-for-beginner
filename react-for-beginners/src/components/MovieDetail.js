function MovieDetail({ title, year, rating, genres, summary, medium_cover_image }) {
  return (
    <div>
      <img src={medium_cover_image} alt={title} />
      <h2>{title}</h2>
      <h3>
        {year}, {rating}
      </h3>
      <p>{summary}</p>
      <ul>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

export default MovieDetail;
