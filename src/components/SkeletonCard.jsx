export default function SkeletonCard() {
  return (
    <div className="skeleton-card">
      <div className="skeleton-card__thumb skeleton-pulse" />
      <div className="skeleton-card__line skeleton-pulse" style={{ width: "80%" }} />
      <div className="skeleton-card__line skeleton-pulse" style={{ width: "50%" }} />
    </div>
  );
}
