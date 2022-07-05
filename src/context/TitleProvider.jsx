import { createContext, useReducer } from 'react';

export const StaticTextsContext = createContext();

const TitleProvider = ({children}) => {
    const staticTexts = {
        columnsHeader: [
            { 'key': "image", 'name': "Pokemon", 'sortable': false },
            { 'key': "number", 'name': "Número", 'sortable': true},
            { 'key': "name", 'name': "Nombre", 'sortable': true},
            { 'key': "type", 'name': "Tipo", 'sortable': true}
        ],
        filterTitle: "Tipos pokémon",
        paginationConfig: [
            {
                "size" : 10,
            },
            {
                "size" : 20,
            },
            {
                "size" : 50,
            },
            {
                "size" : 100,
            }
        ]
    };
    return <StaticTextsContext.Provider value={{ staticTexts }}>
        {children}
    </StaticTextsContext.Provider>
}

export default TitleProvider;