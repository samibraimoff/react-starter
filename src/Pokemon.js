import PropTypes from "prop-types";

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.shape({
      name: PropTypes.string,
    }),
    type: PropTypes.arrayOf(PropTypes.string),
  }),
};

function Pokemon({ pokemon }) {
  return (
    <tr>
      <td>{pokemon.name.english}</td>
      <td>{pokemon.type.join(", ")}</td>
    </tr>
  );
}

export default Pokemon;
