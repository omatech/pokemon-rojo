import PokemonTypeFilterItem from "./PokemonTypeFilterItem";

const pokemonTypeFilterList = ({ types }) =>
    types.map(type => <PokemonTypeFilterItem key={type.name} type={type} />);

export default pokemonTypeFilterList;