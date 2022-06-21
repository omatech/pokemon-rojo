import PokemonTable from "./components/PokemonTable/PokemonTable";
import styled from 'styled-components';
import PokemonTypeFilterList from "./components/PokemonTypeFilter/PokemonTypeFilterList";
import usePokemonTypes from "./hooks/UsePokemonTypes";
import usePokemons from "./hooks/UsePokemons";
import PokemonSearcher from "./components/PokemonTable/PokemonSearcher";
import {useState} from "react";
import PokemonPagination from "./components/PokemonTable/PokemonPagination";
import PokemonPageSize from "./components/PokemonTable/PokemonPageSize";

const StyledContainer = styled.main`
    width: 1440px;
    max-width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding: 0 4rem;
`;

const StyledSection = styled.section`
    display: grid;
    //grid-template-columns: 1fr 4fr;
`;

const App = () => {
    const [searchValue, setSearchValue] = useState('');
    const [types, setTypes, selectedTypes] = usePokemonTypes();
    const [currentPage, setCurrentPage] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const [pokemonCount, pokemons, pageCount] = usePokemons({selectedTypes, searchValue, currentPage, pageSize});

    return (
        <>
            <StyledContainer>
                <StyledSection>
                    <PokemonTypeFilterList types={types} setTypes={setTypes} />
                    <PokemonSearcher setSearchValue={setSearchValue} />
                    <span>Visualizando {pokemons.length} Pokémons de {pokemonCount}</span>
                    <PokemonPageSize pageSize={pageSize} setPageSize={setPageSize}/>
                    <PokemonTable pokemons={pokemons} />
                    <PokemonPagination pageCount={pageCount} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
                </StyledSection>
            </StyledContainer>
        </>
    );
}

export default App
