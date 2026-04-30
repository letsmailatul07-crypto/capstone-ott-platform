import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import SkeletonCard from "../components/SkeletonCard";
import { movies, genres } from "../data/movies";
import { useDebounce } from "../hooks/useDebounce";

export default function Categories() {
  const [searchParams] = useSearchParams();
  const [activeGenre, setActiveGenre] = useState("All");
  const [loading, setLoading] = useState(true);
  const queryParam = searchParams.get("q") || "";
  const [localSearch, setLocalSearch] = useState(queryParam);
  const debouncedSearch = useDebounce(localSearch, 300);

  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(t);
  }, [activeGenre]);

  const filtered = useMemo(() => {
    let list = movies;
    if (activeGenre !== "All") {
      list = list.filter((m) => m.genre.includes(activeGenre));
    }
    if (debouncedSearch.trim()) {
      const q = debouncedSearch.toLowerCase();
      list = list.filter(
        (m) =>
          m.title.toLowerCase().includes(q) ||
          m.description.toLowerCase().includes(q) ||
          m.genre.some((g) => g.toLowerCase().includes(q))
      );
    }
    return list;
  }, [activeGenre, debouncedSearch]);

  return (
    <div className="categories page-container">
      <div className="categories__header">
        <h1 className="categories__title">Browse</h1>
        <input
          className="categories__search"
          placeholder="Search movies..."
          value={localSearch}
          onChange={(e) => setLocalSearch(e.target.value)}
        />
      </div>

      <div className="genre-tabs">
        {genres.map((g) => (
          <button
            key={g}
            className={`genre-tab ${activeGenre === g ? "genre-tab--active" : ""}`}
            onClick={() => setActiveGenre(g)}
          >
            {g}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="categories__grid">
          {Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)}
        </div>
      ) : filtered.length === 0 ? (
        <div className="categories__empty">
          <span className="categories__empty-icon">🎬</span>
          <p>No titles found. Try a different filter.</p>
        </div>
      ) : (
        <div className="categories__grid">
          {filtered.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}
