import { searchActionTypes } from './search.types';

const INITIAL_STATE = {
    searchItem : '',
}

const searchReducer = ( state = INITIAL_STATE , action ) => {
    switch (action.type) {
        case searchActionTypes.SET_SEARCH_ITEM:
            return{
                ...state,
                searchItem : action.payload
            }
        default:
            return state;
    }
}

export default searchReducer;