import { useRef } from "react";
import MovieCard from "./MovieCard";

export default function Row({ title, movies, showProgress = false }) {
  const rowRef = useRef(null);

  const scroll = (dir) => {
    if (rowRef.current) {
      rowRef.current.scrollBy({ left: dir * 320, behavior: "smooth" });
    }
  };

  if (!movies || movies.length === 0) return null;

  return (
    <section className="row">
      <div className="row__header">
        <h2 className="row__title">{title}</h2>
        <div className="row__controls">
          <button className="row__btn" onClick={() => scroll(-1)} aria-label="Scroll left">‹</button>
          <button className="row__btn" onClick={() => scroll(1)} aria-label="Scroll right">›</button>
        </div>
      </div>
      <div className="row__track" ref={rowRef}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} showProgress={showProgress} />
        ))}
      </div>
    </section>
  );
}
