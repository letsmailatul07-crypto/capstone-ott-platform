import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import { movies } from "../data/movies";

export default function Watch() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);
  const [listed, setListed] = useState(false);
  const [loading, setLoading] = useState(true);

  const movie = movies.find((m) => m.id === Number(id));
  const recommended = movies.filter((m) => m.id !== Number(id) && m.genre.some((g) => movie?.genre.includes(g))).slice(0, 6);

  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, [id]);

  if (!movie) {
    return (
      <div className="watch-not-found page-container">
        <h2>Title not found</h2>
        <button className="hero__btn hero__btn--primary" onClick={() => navigate("/")}>Go Home</button>
      </div>
    );
  }

  return (
    <div className="watch page-container">
      <button className="watch__back" onClick={() => navigate(-1)}>← Back</button>

      {loading ? (
        <div className="skeleton-pulse watch__player-skeleton" />
      ) : (
        <div className="watch__player-wrap">
          <video
            className="watch__player"
            src={movie.videoUrl}
            controls
            poster={movie.banner}
            autoPlay={false}
          />
        </div>
      )}

      <div className="watch__details">
        <div className="watch__info">
          <div className="watch__tags">
            {movie.tags.map((t) => (
              <span key={t} className="movie-card__tag">{t}</span>
            ))}
          </div>
          <h1 className="watch__title">{movie.title}</h1>
          <div className="watch__meta">
            <span className="hero__rating">★ {movie.rating}</span>
            <span className="hero__dot">·</span>
            <span>{movie.year}</span>
            <span className="hero__dot">·</span>
            <span>{movie.duration}</span>
            <span className="hero__dot">·</span>
            <span className="watch__genres">{movie.genre.join(", ")}</span>
          </div>
          <p className="watch__desc">{movie.description}</p>
          <p className="watch__cast"><strong>Cast:</strong> {movie.cast.join(", ")}</p>
        </div>

        <div className="watch__actions">
          <button className="watch__action-btn watch__action-btn--primary">
            ▶ Play
          </button>
          <button
            className={`watch__action-btn ${listed ? "watch__action-btn--active" : ""}`}
            onClick={() => setListed((v) => !v)}
          >
            {listed ? "✓ In List" : "+ My List"}
          </button>
          <button
            className={`watch__action-btn ${liked ? "watch__action-btn--liked" : ""}`}
            onClick={() => setLiked((v) => !v)}
            aria-label="Like"
          >
            {liked ? "♥ Liked" : "♡ Like"}
          </button>
        </div>
      </div>

      {recommended.length > 0 && (
        <div className="watch__recommended">
          <h2 className="row__title">More Like This</h2>
          <div className="categories__grid categories__grid--compact">
            {recommended.map((m) => (
              <MovieCard key={m.id} movie={m} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
