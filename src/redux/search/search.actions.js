import { searchActionTypes } from './search.types';

export const setSearchItem = searchItem => ({
    type : searchActionTypes.SET_SEARCH_ITEM,
    payload : searchItem
});