import { createContext, useReducer } from 'react';

export const StaticTextsContext = createContext();

const TitleProvider = ({children}) => {

    //const [state, dispatch] = useReducer(reducer, initialState, init);
    const staticTexts = {
        columnsHeader: [
            { 'key': "image", 'name': "Pokemon", 'sortable': false },
            { 'key': "number", 'name': "Número", 'sortable': true},
            { 'key': "name", 'name': "Nombre", 'sortable': true},
            { 'key': "type", 'name': "Tipo", 'sortable': true}
        ],
        filterTitle: "Tipos pokémon",
        paginationConfig: {
            sizes : [10, 20, 50, 100],
            text : "Mostrar :: elementos"
        }
    };
    return <StaticTextsContext.Provider value={{ staticTexts }}>
        {children}
    </StaticTextsContext.Provider>
}

export default TitleProvider;