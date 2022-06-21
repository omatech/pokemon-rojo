import PokemonTable from "./components/PokemonTable/PokemonTable";
import styled from 'styled-components';
import PokemonTypeFilterList from "./components/PokemonTypeFilter/PokemonTypeFilterList";
import usePokemonTypes from "./hooks/UsePokemonTypes";
import usePokemons from "./hooks/UsePokemons";
import PokemonSearcher from "./components/PokemonTable/PokemonSearcher";
import {useState} from "react";

const StyledContainer = styled.main`
    width: 1440px;
    max-width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding: 0 4rem;
`;

const StyledSection = styled.section`
    display: grid;
    grid-template-columns: 1fr 4fr;
`;

const App = () => {
    const [searchValue, setSearchValue] = useState('');
    const [types, setTypes, selectedTypes] = usePokemonTypes();
    const filteredPokemons = usePokemons({selectedTypes, searchValue});
    
    return ( 
        <>
            <StyledContainer>
                <StyledSection>
                    <PokemonSearcher setSearchValue={setSearchValue} />
                    <PokemonTypeFilterList types={types} setTypes={setTypes} />
                    <PokemonTable pokemons={filteredPokemons} />
                </StyledSection>
            </StyledContainer>
        </>
    );
}

export default App
