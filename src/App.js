import "./App.css";
import { useEffect, useState } from "react";
import Pokemon from "./Pokemon";
import SelectedPokemon from "./SelectedPokemon";

function App() {
  const [filter, setFilter] = useState("");
  const [selected, setSelected] = useState(null);
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/pokemon.json")
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  }, []);

  return (
    <div>
      <h1 className="title">Pokemon search</h1>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <div className="container">
        <div className="list">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {pokemon
                .filter((pokemon) =>
                  pokemon.name.english
                    .toLowerCase()
                    .includes(filter.toLowerCase())
                )
                .slice(0, 20)
                .map((el) => (
                  <Pokemon
                    key={el.id}
                    pokemon={el}
                    onSelect={(pokemon) => setSelected(pokemon)}
                  />
                ))}
            </tbody>
          </table>
        </div>
        {selected && (
          <div className="selected">
            <SelectedPokemon pokemon={selected} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
