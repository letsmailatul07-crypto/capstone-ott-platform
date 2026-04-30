import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import SkeletonCard from "../components/SkeletonCard";
import { sections } from "../data/movies";

export default function ContinueWatching() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="continue page-container">
      <h1 className="categories__title">Continue Watching</h1>
      <p className="continue__sub">Pick up right where you left off.</p>

      {loading ? (
        <div className="categories__grid">
          {Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={i} />)}
        </div>
      ) : sections.continueWatching.length === 0 ? (
        <div className="categories__empty">
          <span className="categories__empty-icon">📺</span>
          <p>Nothing in progress. Start watching something!</p>
        </div>
      ) : (
        <div className="categories__grid">
          {sections.continueWatching.map((movie) => (
            <MovieCard key={movie.id} movie={movie} showProgress />
          ))}
        </div>
      )}
    </div>
  );
}
