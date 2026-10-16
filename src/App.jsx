import { stalls } from "./stalls.js";
import { countRatings, averageRating } from "./rating.js";

function App() {
  return (
    <main>
      <h1>Rate My Stall</h1>
      <ul>
        {stalls.map((stall) => (
          <li key={stall.id}>
            {stall.name}: {averageRating(stall.ratings).toFixed(1)} ★ ({countRatings(stall.ratings)} reviews)
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
