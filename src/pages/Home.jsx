import { useState, useEffect } from "react";
import HeroBanner from "../components/HeroBanner";
import Row from "../components/Row";
import SkeletonRow from "../components/SkeletonRow";
import { movies, sections } from "../data/movies";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const featured = movies[0];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home">
      <HeroBanner movie={featured} />
      <div className="home__content">
        {loading ? (
          <>
            <SkeletonRow />
            <SkeletonRow />
            <SkeletonRow />
          </>
        ) : (
          <>
            <Row title="🔥 Trending Now" movies={sections.trending} />
            <Row title="🎬 Popular on NOVIX" movies={sections.popular} />
            <Row title="⭐ Top Rated" movies={sections.topRated} />
            <Row title="🎭 NOVIX Originals" movies={sections.originals} />
            <Row title="▶ Continue Watching" movies={sections.continueWatching} showProgress />
          </>
        )}
      </div>
    </div>
  );
}
