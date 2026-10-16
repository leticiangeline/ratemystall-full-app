import { stalls } from "./stalls.js";
import { countRatings } from "./rating.js";

function App() {
  return (
    <main>
      <h1>Rate My Stall</h1>
      <ul>
        {stalls.map((stall) => (
          <li key={stall.id}>
            {stall.name} ({countRatings(stall.ratings)} ratings)
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
