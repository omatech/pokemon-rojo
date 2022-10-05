import { useContext, lazy, Suspense } from 'react';
import Header from './components/header/Header';
import StyledGlobal from './utils/StyledGlobal';
import PokemonTable from "./components/PokemonTable/PokemonTable";
import styled from 'styled-components';
import PokemonTypeFilterList from "./components/PokemonTypeFilter/PokemonTypeFilterList";
import PokemonPagination from "./components/PokemonTable/PokemonPagination";
import PokemonPageSize from "./components/PokemonTable/PokemonPageSize";
import TitleProvider from "./context/TitleProvider";
import './styles.scss';
import {colors, heights, widths} from './utils/variables';
import usePokemonTypes from "./hooks/UsePokemonTypes";
import StateProvider, { StateContext } from  "./context/StateProvider";
import usePokemons from './hooks/UsePokemons';

const PokemonDetail = lazy(() => import("./components/PokemonDetail"))


const StyledContainer = styled.main`
    box-sizing: border-box;
    width: 1280px;
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

const Contexted = Component => props =>
  <StateProvider>
    <Component {...props} />
  </StateProvider>;

const App = () => {
    const { state  } = useContext(StateContext);
    const [ isLoading ] = usePokemons();
    usePokemonTypes();

    return (
        <StyledApp>
            <TitleProvider>
                <Header/>
                <PokemonTypeFilterList />
                <StyledContainer>
                    <StyledSection>
                    {!isLoading ?
                        <section>
                            {
                                state.pokemon
                                ?
                                    <Suspense fallback={<div> El componente Table está cargando... </div>}>
                                        <PokemonDetail/>
                                    </Suspense>
                                :
                                    <>
                                        <TwoCols>
                                            <TotalPkmn>{state.pokemonCount} <strong>Pokémons</strong></TotalPkmn>
                                            <PokemonPageSize/>
                                        </TwoCols>
                                        <PokemonTable/>
                                        <PokemonPagination />
                                    </>
                            }
                        </section>
                        : <div>Loading...</div> }
                    </StyledSection>
                </StyledContainer>
                <StyledGlobal/>
            </TitleProvider>
        </StyledApp>
    );
}

export default Contexted(App);
