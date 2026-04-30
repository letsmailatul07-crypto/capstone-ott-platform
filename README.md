# 🎬 NOVIX — Advanced OTT Platform UI (Netflix Clone)

A highly polished, production-grade OTT platform UI built with **React + Vite + React Router**. Single global CSS file, no Tailwind, no external UI libraries.

---

## 📁 Folder Structure

```
novix-ott/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── App.jsx              ← Root app + router setup
    ├── App.css              ← SINGLE global stylesheet (all styles here)
    ├── main.jsx             ← Entry point
    ├── data/
    │   └── movies.js        ← All dummy data (movies, profiles, genres, sections)
    ├── hooks/
    │   ├── useScrolled.js   ← Detects scroll position for navbar
    │   └── useDebounce.js   ← Debounces search input
    ├── components/
    │   ├── Navbar.jsx        ← Transparent → solid on scroll, search, avatar
    │   ├── HeroBanner.jsx    ← Full-height hero with animated background
    │   ├── Row.jsx           ← Horizontal scrollable movie row
    │   ├── MovieCard.jsx     ← Thumbnail + hover overlay + progress bar
    │   ├── ProfileCard.jsx   ← Profile avatar card with color ring
    │   ├── SkeletonCard.jsx  ← Loading placeholder for movie cards
    │   └── SkeletonRow.jsx   ← Loading placeholder for rows
    └── pages/
        ├── Home.jsx          ← Hero + multiple rows (trending, popular, etc.)
        ├── Categories.jsx    ← Genre filter tabs + search + grid
        ├── Watch.jsx         ← Video player + details + recommended
        ├── ContinueWatching.jsx ← Progress-bar grid of in-progress titles
        └── Profiles.jsx      ← Profile selection screen
```

---

## ⚡ Quick Start

### Step 1 — Prerequisites
Make sure you have **Node.js ≥ 18** installed:
```bash
node --version
```

### Step 2 — Install dependencies
```bash
cd novix-ott
npm install
```

### Step 3 — Start dev server
```bash
npm run dev
```
Opens at **http://localhost:3000** automatically.

### Step 4 — Build for production
```bash
npm run build
npm run preview   # Preview the production build locally
```

---

## 🎯 Features

| Feature | Implementation |
|---|---|
| **Hero Banner** | Full-viewport animated background, gradient overlay, CTA buttons |
| **Horizontal Rows** | Scroll-snapping with prev/next buttons, 5 sections |
| **Movie Card Hover** | Scale + overlay + play button + metadata reveal |
| **Progress Bar** | Overlay on thumbnail for "Continue Watching" |
| **Profile Switcher** | Full-screen profile selection with color-coded avatars |
| **Navbar** | Transparent→solid on scroll, expandable search, avatar |
| **Categories Page** | Genre tabs + real-time debounced search + grid layout |
| **Watch Page** | HTML5 `<video>` player + details + recommended section |
| **Skeleton Loaders** | Pulsing placeholders during fake load delays |
| **Responsive** | Mobile/tablet/desktop breakpoints |

---

## 🎨 Design System

- **Display font:** Bebas Neue (cinematic, bold)
- **Body font:** DM Sans (clean, readable)
- **Primary color:** `#e50914` (Netflix red)
- **Background:** `#0a0a0f` (deep dark)
- **Accent:** Gold for ratings (`#ffd700`)
- All design tokens in CSS custom properties in `:root`

---

## 🧠 Key Component Explanations

### `Navbar.jsx`
- Uses `useScrolled` hook to toggle `navbar--solid` class
- Expandable search: input width animates via CSS transition
- Hamburger menu shows `navbar__links` on mobile

### `HeroBanner.jsx`
- CSS custom property `--hero-bg` for dynamic background image
- Ken Burns zoom animation via `@keyframes hero-zoom`
- Gradient overlay for text legibility

### `Row.jsx`
- `useRef` on the scroll container for programmatic scroll
- `scroll-snap-type: x mandatory` on the track
- prev/next buttons call `scrollBy({ behavior: 'smooth' })`

### `MovieCard.jsx`
- Overlay fades in on hover via `opacity: 0 → 1`
- Play button scales from `0.7` to `1` on card hover
- Progress bar renders only when `showProgress && movie.progress > 0`

### `ProfileCard.jsx`
- `--profile-color` CSS variable drives border and glow per profile
- `color-mix()` for glow transparency effects

### `Categories.jsx`
- `useMemo` for efficient filtering without re-renders
- `useDebounce` prevents filtering on every keystroke

---

## 📦 Data Shape (movies.js)

```js
{
  id: 1,
  title: "Neon Abyss",
  description: "...",
  genre: ["Action", "Sci-Fi"],
  rating: 9.1,
  year: 2024,
  duration: "2h 18m",
  thumbnail: "https://...",   // 16:9 card image
  banner: "https://...",      // Wide hero image
  videoUrl: "https://...",    // mp4 URL
  progress: 65,               // 0-100, 0 = unwatched, 100 = finished
  tags: ["Original", "4K", "HDR"],
  cast: ["Actor One", "Actor Two"],
}
```

---

## 🔧 Customization

- **Add real movies:** Replace `src/data/movies.js` entries with your own data (or fetch from TMDB API)
- **Add a new page:** Create `src/pages/NewPage.jsx` → add `<Route>` in `App.jsx`
- **Change colors:** Edit CSS variables in `:root` inside `App.css`
- **Add more genres:** Extend the `genres` array in `movies.js`
