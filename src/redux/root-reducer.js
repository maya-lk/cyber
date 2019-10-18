import { combineReducers } from 'redux';

import vendorCategoryReduser from './vendor-category/vendor-category.reducer';
import homeReducer from './home/home.reducer';
import searchReducer from './search/search.reduser';

export default combineReducers({
    vendorCategory : vendorCategoryReduser,
    home : homeReducer,
    search : searchReducer
})