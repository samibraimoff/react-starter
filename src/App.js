import "./App.css";

import pokemon from "./pokemon.json";

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
          <th>Name</th>
          <th>Type</th>
        </thead>
        <tbody>
          {pokemon.slice(0, 10).map((el) => (
            <tr key={el.id}>
              <td>{el.name.english}</td>
              <td>{el.type.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
