import "./App.css";
import { useEffect, useState } from "react";
import Pokemon from "./Pokemon";
import SelectedPokemon from "./SelectedPokemon";
import { Wrapper, Title, Container, Input, List, Selected } from "./App.styles";

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
    <Wrapper>
      <Title>Pokemon search</Title>
      <Input
        type="text"
        placeholder="Search for your pokemon"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <Container>
        <List>
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
        </List>
        {selected && (
          <Selected>
            <SelectedPokemon pokemon={selected} />
          </Selected>
        )}
      </Container>
    </Wrapper>
  );
}

export default App;
