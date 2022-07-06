export const stateReducer = (state, { type, payload }) => {
    switch (type) {
        case "SET_PAGE_SIZE":
           const newState = structuredClone(state);
                       const a = newState.find(({ alias }) => alias === payload.pageSize);
                       a.pageSize = payload.pageSize;
            return newState;
            let obj = {
                pageSize : payload.pageSize,
                orderValue: state.orderValue,
            }

            return payload.pageSize;
        case "SET_ORDER_VALUE":
            return payload.orderValue;
        case "SET_SEARCH_VALUE":
            return payload.searchValue;
        case "SET_DIRECTION":
            return payload.direction;
        case "SET_PAGE_NUMBER":
            return payload.pageNumber;
        //case "SET_TYPES":
            //return payload.page;
        default:
            return state;
    }
}