import { vendorCategoryActionTypes } from './vendor-category.type';

const INITIAL_STATE = {
    vendorCategory : null
}

const vendorCategoryReduser = ( state = INITIAL_STATE , action ) => {
    switch (action.type) {
        case vendorCategoryActionTypes.SET_CATEGORY_VALUES:
            return{
                ...state,
                vendorCategory : action.payload
            }
        default:
            return state;
    }
}

export default vendorCategoryReduser