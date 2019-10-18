import { homeActionTypes } from './home.types';

export const setVideoUrl = videoUrl => ({
    type : homeActionTypes.SET_VIDEO_URL,
    payload : videoUrl
});

export const setVideoAnimatedClass = animated => ({
    type : homeActionTypes.SET_VIEDO_ANIMATED_CLASS,
    payload : animated
});

export const setFeaturedSellers = sellers => ({
    type : homeActionTypes.SET_FEATURED_SELLERS,
    payload : sellers
});