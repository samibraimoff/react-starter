function SelectedPokemon({ pokemon }) {
  return (
    <table>
      <thead>
        <tr>
          <th>{pokemon.name.english}</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Attack</td>
          <td>{pokemon.base.Attack}</td>
        </tr>
        <tr>
          <td>Defense</td>
          <td>{pokemon.base.Defense}</td>
        </tr>
        <tr>
          <td>HP</td>
          <td>{pokemon.base.HP}</td>
        </tr>
        <tr>
          <td>Speed</td>
          <td>{pokemon.base.Speed}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default SelectedPokemon;
