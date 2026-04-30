import SkeletonCard from "./SkeletonCard";

export default function SkeletonRow() {
  return (
    <section className="row">
      <div className="row__header">
        <div className="skeleton-pulse" style={{ width: 160, height: 20, borderRadius: 4 }} />
      </div>
      <div className="row__track">
        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </section>
  );
}
