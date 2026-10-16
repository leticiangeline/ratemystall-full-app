import { useState } from "react";
import { stalls } from "./stalls.js";
import { countRatings } from "./rating.js";

const NOTE_THEMES = ["clover", "stars", "blue", "flannel"];

function App() {
  const [selectedArea, setSelectedArea] = useState("all");

  const areas = Array.from(
    new Set(stalls.map((s) => s.area).filter(Boolean))
  );

  const filteredStalls =
    selectedArea === "all"
      ? stalls
      : stalls.filter((s) => s.area === selectedArea);

  return (
    <div className="page-container">
      {/* Left Sidebar */}
      <aside className="sidebar">
        <h1 className="logo-title">
          <span>Rate</span>
          <span>My</span>
          <span>Stall</span>
        </h1>

        <div className="filter-group">
          <label htmlFor="area-select" className="filter-label">
            Select Area:
          </label>
          <div className="select-container">
            <select
              id="area-select"
              className="area-dropdown"
              value={selectedArea}
              onChange={(e) => setSelectedArea(e.target.value)}
            >
              <option value="all">All Areas</option>
              {areas.map((area) => (
                <option key={area} value={area}>
                  {area}
                </option>
              ))}
            </select>
          </div>
        </div>
      </aside>

      {/* Main Cork Bulletin Board */}
      <main className="board-container">
        <div className="cork-board">
          {/* Scrollable area inside the board boundaries */}
          <div className="board-scroll-area">
            <ul className="stalls-grid">
              {filteredStalls.map((stall, index) => {
                const theme = NOTE_THEMES[index % NOTE_THEMES.length];
                return (
                  <li
                    key={stall.id}
                    className={`stall-note stall-note-${theme}`}
                  >
                    <div className="stall-note-body">
                      {stall.area && (
                        <span className="stall-area-badge">{stall.area}</span>
                      )}
                      <p className="stall-label">
                        {stall.name} ({countRatings(stall.ratings)} ratings)
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Blythe Books Mat in Bottom Right Corner */}
          <img
            src="/blythe-books.png"
            alt="Blythe collection guide books"
            className="blythe-mat"
          />
        </div>
      </main>
    </div>
  );
}

export default App;
