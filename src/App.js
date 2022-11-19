import "./App.css";

import pokemon from "./pokemon.json";
import Pokemon from "./Pokemon";

function App() {
  return (
    <div
      style={{
        margin: "auto",
        width: 800,
        paddingTop: "1rem",
      }}
    >
      <h1 className="title">Pokemon search</h1>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {pokemon.slice(0, 10).map((el) => (
            <Pokemon key={el.id} pokemon={el} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
