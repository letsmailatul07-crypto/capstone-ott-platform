import { useNavigate } from "react-router-dom";

export default function MovieCard({ movie, showProgress = false }) {
  const navigate = useNavigate();

  return (
    <div className="movie-card" onClick={() => navigate(`/watch/${movie.id}`)}>
      <div className="movie-card__thumb">
        <img
          src={movie.thumbnail}
          alt={movie.title}
          loading="lazy"
          className="movie-card__img"
        />
        {showProgress && movie.progress > 0 && (
          <div className="movie-card__progress-bar">
            <div
              className="movie-card__progress-fill"
              style={{ width: `${movie.progress}%` }}
            />
          </div>
        )}
        <div className="movie-card__overlay">
          <button className="movie-card__play">▶</button>
          <div className="movie-card__meta">
            <span className="movie-card__rating">★ {movie.rating}</span>
            <span className="movie-card__year">{movie.year}</span>
          </div>
          <div className="movie-card__tags">
            {movie.tags.slice(0, 2).map((t) => (
              <span key={t} className="movie-card__tag">{t}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="movie-card__info">
        <h3 className="movie-card__title">{movie.title}</h3>
        <p className="movie-card__genre">{movie.genre.join(" · ")}</p>
      </div>
    </div>
  );
}
