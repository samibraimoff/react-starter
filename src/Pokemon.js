import PropTypes from "prop-types";

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.shape({
      name: PropTypes.string,
    }),
    type: PropTypes.arrayOf(PropTypes.string),
    onSelect: PropTypes.func,
  }),
};

function Pokemon({ pokemon, onSelect }) {
  return (
    <tr>
      <td>{pokemon.name.english}</td>
      <td>{pokemon.type.join(", ")}</td>
      <button onClick={() => onSelect(pokemon)}>Selected!</button>
    </tr>
  );
}

export default Pokemon;
