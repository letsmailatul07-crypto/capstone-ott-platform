import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Watch from "./pages/Watch";
import ContinueWatching from "./pages/ContinueWatching";
import Profiles from "./pages/Profiles";
import { profiles } from "./data/movies";
import "./App.css";

function AppLayout({ profile, onSelectProfile }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/profiles"
          element={<Profiles onSelectProfile={onSelectProfile} />}
        />
        <Route
          path="/*"
          element={
            profile ? (
              <>
                <Navbar profile={profile} />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/categories" element={<Categories />} />
                  <Route path="/watch/:id" element={<Watch />} />
                  <Route path="/continue" element={<ContinueWatching />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </>
            ) : (
              <Navigate to="/profiles" replace />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default function App() {
  const [profile, setProfile] = useState(profiles[0]);

  return <AppLayout profile={profile} onSelectProfile={setProfile} />;
}
