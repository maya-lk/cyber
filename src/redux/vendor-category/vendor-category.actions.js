import { vendorCategoryActionTypes } from './vendor-category.type';

export const setVendorCategoryValues = vendorCategory => ({
    type : vendorCategoryActionTypes.SET_CATEGORY_VALUES,
    payload : vendorCategory
});