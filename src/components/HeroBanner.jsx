import { useNavigate } from "react-router-dom";

export default function HeroBanner({ movie }) {
  const navigate = useNavigate();

  if (!movie) return null;

  return (
    <div className="hero" style={{ "--hero-bg": `url(${movie.banner})` }}>
      <div className="hero__bg" />
      <div className="hero__gradient" />
      <div className="hero__content">
        <div className="hero__badges">
          {movie.tags.map((t) => (
            <span key={t} className="hero__badge">{t}</span>
          ))}
        </div>
        <h1 className="hero__title">{movie.title}</h1>
        <div className="hero__meta">
          <span className="hero__rating">★ {movie.rating}</span>
          <span className="hero__dot">·</span>
          <span>{movie.year}</span>
          <span className="hero__dot">·</span>
          <span>{movie.duration}</span>
        </div>
        <p className="hero__desc">{movie.description}</p>
        <div className="hero__actions">
          <button className="hero__btn hero__btn--primary" onClick={() => navigate(`/watch/${movie.id}`)}>
            ▶ Play Now
          </button>
          <button className="hero__btn hero__btn--secondary" onClick={() => navigate(`/watch/${movie.id}`)}>
            ⓘ More Info
          </button>
        </div>
        <div className="hero__genres">
          {movie.genre.map((g) => (
            <span key={g} className="hero__genre-tag">{g}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
