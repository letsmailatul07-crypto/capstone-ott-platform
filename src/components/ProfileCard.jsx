export default function ProfileCard({ profile, onSelect }) {
  return (
    <div className="profile-card" onClick={() => onSelect(profile)}>
      <div
        className="profile-card__avatar"
        style={{ "--profile-color": profile.color }}
      >
        <span className="profile-card__emoji">{profile.avatar}</span>
        <div className="profile-card__ring" />
      </div>
      <p className="profile-card__name">{profile.name}</p>
    </div>
  );
}
