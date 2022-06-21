import {Fragment} from "react";

const PokemonTypeFilterList = ({types, setTypes}) => {

    const onChangeHandler = ({target}) => {
        setTypes(state => {
            const newState = structuredClone(state);
            const type = newState.find(({name}) => name === target.name);
            type.active = target.checked;
            return newState;
        })
    };

    return (
        <div>
            {
                types.map(type =>
                    <Fragment key={type.name}>
                        <div>
                            <input type="checkbox" name={type.name} id={type.name} onChange={onChangeHandler}
                                   checked={type.active}/>
                            <label htmlFor={type.name}>{type.name}</label>
                        </div>
                    </Fragment>
                )
            }
        </div>
    );

}
export default PokemonTypeFilterList;