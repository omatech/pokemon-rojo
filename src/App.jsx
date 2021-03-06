import Header from './components/header/Header';
import StyledGlobal from './utils/StyledGlobal';
import PokemonTable from "./components/PokemonTable/PokemonTable";
import styled from 'styled-components';
import PokemonTypeFilterList from "./components/PokemonTypeFilter/PokemonTypeFilterList";
import usePokemonTypes from "./hooks/UsePokemonTypes";
import usePokemons from "./hooks/UsePokemons";

import {useState} from "react";
import PokemonPagination from "./components/PokemonTable/PokemonPagination";
import PokemonPageSize from "./components/PokemonTable/PokemonPageSize";
import TitleProvider from "./context/TitleProvider";

import './styles.scss';
import {colors, heights, widths} from './utils/variables';

const StyledContainer = styled.main`
    width: 1440px;
    max-width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding: 0 4rem;
`;

const StyledSection = styled.section`
    display: grid;
    gap: 36px;
    grid-template-columns: 1fr;
`;

const TotalPkmn = styled.div`
    font-size: 13px;
    text-transform: uppercase;
`;

const TwoCols = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`;

const StyledApp = styled.div`
  background-color: ${ colors.bgBody };
  display: grid;
  grid-template-columns: ${ widths.wSidebar } auto;
  grid-template-rows: ${ heights.hHeader } 1fr;
  height: 100vh;
`;

const App = () => {
    const [direction, setDirection] = useState('asc');
    const [orderValue, setOrderValue] = useState('number');
    const [searchValue, setSearchValue] = useState('');
    const [types, setTypes, selectedTypes] = usePokemonTypes();
    const [currentPage, setCurrentPage] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const [pokemonCount, pokemons, pageCount, isLoading] = usePokemons({selectedTypes, searchValue, currentPage, pageSize, orderValue, direction});

    return (

        <StyledApp>

            <TitleProvider>

                <Header setSearchValue={setSearchValue} />

                <PokemonTypeFilterList types={types} setTypes={setTypes} />

                <StyledContainer>

                    <StyledSection>

                        <section>
                            <TwoCols>
                                <TotalPkmn>{pokemonCount} <strong>Pok??mons</strong></TotalPkmn>
                                <PokemonPageSize pageSize={pageSize} setPageSize={setPageSize}/>
                            </TwoCols>
                            <PokemonTable pokemons={pokemons} orderValue={orderValue} setOrderValue={setOrderValue} direction={direction} setDirection={setDirection}/>
                            <PokemonPagination pageCount={pageCount} totalCount={pokemonCount} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
                        </section>

                    </StyledSection>

                </StyledContainer>

                <StyledGlobal />

            </TitleProvider>

        </StyledApp>

    );
}

export default App
