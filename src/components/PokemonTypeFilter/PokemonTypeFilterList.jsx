const PokemonTypeFilterList = ({types, setTypes}) => {
    const onChangeHandler = ({target}) => {
        setTypes(state => {
            const newState = structuredClone(state);
            const type = newState.find(({name}) => name === target.name);
            type.active = target.checked;
            return newState;
        })
    };

    return types.map(type => <>
            <input type="checkbox" name={type.name} id={type.name} onChange={onChangeHandler}
                   checked={type.active}/>
            <label htmlFor={type.name}>{type.name}</label>
        </>
    );
}
export default PokemonTypeFilterList;