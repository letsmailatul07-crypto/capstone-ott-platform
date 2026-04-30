import { useNavigate } from "react-router-dom";
import ProfileCard from "../components/ProfileCard";
import { profiles } from "../data/movies";

export default function Profiles({ onSelectProfile }) {
  const navigate = useNavigate();

  const handleSelect = (profile) => {
    if (profile.name === "+ Add") return;
    onSelectProfile(profile);
    navigate("/");
  };

  return (
    <div className="profiles-screen">
      <div className="profiles-screen__inner">
        <div className="profiles-screen__logo">
          <span className="navbar__logo-n">N</span>OVIX
        </div>
        <h1 className="profiles-screen__heading">Who's watching?</h1>
        <div className="profiles-screen__grid">
          {profiles.map((p) => (
            <ProfileCard key={p.id} profile={p} onSelect={handleSelect} />
          ))}
        </div>
      </div>
    </div>
  );
}
