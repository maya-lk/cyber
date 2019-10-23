import { createSelector } from 'reselect';

const selectServices = state => state.services;

export const selectServiceTermList = createSelector(
    [selectServices],
    services => services.serviceTerms
);

/* export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map( key => collections[key]  )
)

export const selectCollection = collectionUrlParams =>
    createSelector(
        [selectCollections],
        collections => collections[collectionUrlParams]
); */