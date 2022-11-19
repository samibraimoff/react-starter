import PropTypes from "prop-types";

import { Button } from "./Pokemon.styles";

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
      <Button onClick={() => onSelect(pokemon)}>Selected!</Button>
    </tr>
  );
}

export default Pokemon;
