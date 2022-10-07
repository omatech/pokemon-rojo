import { createPortal } from 'react-dom';

import styled from 'styled-components';

const StyledDetail = styled.div `
    width: 500px;
    margin: 40px auto;
    background-color: var(--bg-detail);
    color: var(--txt-inverse);
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 50%);
    z-index: 1000;
`;
const StyledFigure = styled.figure `
    background-color: var(--bg-basic);
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px;
    margin: 0;
`;
const StyledContentDetail = styled.div `
    width: 100%;
    padding: 20px;
`;
const StyledBackdrop = styled.div `
    background: rgba(0,0,0, 0.25);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
`;

const PokemonModal = ({ modalState, setModalState }) => {

    const onCloseHandler = () => {
        setModalState({ isOpen: false, pokemon: {} });
    }

    const capitalizeFirst = str => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    const Modal = () => createPortal(
        <>
            <StyledDetail>
                <a href="#" onClick={() => onCloseHandler()} >Cerrar</a>
                <StyledFigure>
                    <img src={modalState.pokemon.image} alt={modalState.pokemon.name} width="45" height="45" />
                </StyledFigure>
                <StyledContentDetail>
                    <h1>N. {String(modalState.pokemon.number).padStart(3, '0')} - {capitalizeFirst(modalState.pokemon.name)}</h1>
                </StyledContentDetail>
            </StyledDetail>
            <StyledBackdrop onClick={() => onCloseHandler()} />
        </>,
        document.getElementById('modal-root')
    );

    return modalState.isOpen && <Modal modalState={ modalState } setModalState={ setModalState } />
}

export default PokemonModal;