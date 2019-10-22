import { createSelector } from 'reselect';

const selectHome = state => state.home;

export const selectFeaturedSeller = createSelector(
    [selectHome],
    (home) => home.sellers 
)