const PokemonTypeFilterItem = ({type}) => <>
    <input type="checkbox" id={type.name}/>
    <label htmlFor={type.name}>{type.name}</label>
</>;

export default PokemonTypeFilterItem;
