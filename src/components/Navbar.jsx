import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useScrolled } from "../hooks/useScrolled";

export default function Navbar({ profile }) {
  const scrolled = useScrolled(80);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const openSearch = () => {
    setSearchOpen(true);
    setTimeout(() => inputRef.current?.focus(), 50);
  };

  const handleSearch = (e) => {
    if (e.key === "Enter" && searchVal.trim()) {
      navigate(`/categories?q=${encodeURIComponent(searchVal.trim())}`);
      setSearchOpen(false);
      setSearchVal("");
    }
    if (e.key === "Escape") {
      setSearchOpen(false);
      setSearchVal("");
    }
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar--solid" : ""}`}>
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo">
          <span className="navbar__logo-n">N</span>OVIX
        </Link>

        <div className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}>
          <Link to="/" className="navbar__link" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/categories" className="navbar__link" onClick={() => setMenuOpen(false)}>Browse</Link>
          <Link to="/continue" className="navbar__link" onClick={() => setMenuOpen(false)}>My List</Link>
        </div>

        <div className="navbar__actions">
          <div className={`navbar__search ${searchOpen ? "navbar__search--open" : ""}`}>
            <button
              className="navbar__icon-btn"
              onClick={searchOpen ? () => { setSearchOpen(false); setSearchVal(""); } : openSearch}
              aria-label="Search"
            >
              {searchOpen ? "✕" : "⌕"}
            </button>
            <input
              ref={inputRef}
              className="navbar__search-input"
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
              onKeyDown={handleSearch}
              placeholder="Search titles..."
            />
          </div>

          <Link to="/profiles" className="navbar__avatar" title="Switch Profile">
            <span className="navbar__avatar-emoji">{profile?.avatar || "🦁"}</span>
          </Link>

          <button
            className="navbar__hamburger"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </nav>
  );
}
