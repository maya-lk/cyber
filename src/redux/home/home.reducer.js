import { homeActionTypes } from './home.types';

const INITIAL_STATE = {
    videoUrl : null,
    animated : null,
    sellers : null
}

const homeReducer = ( state = INITIAL_STATE , action ) => {
    switch (action.type) {
        case homeActionTypes.SET_VIDEO_URL:
            return{
                ...state,
                videoUrl : action.payload
            }
        case homeActionTypes.SET_VIEDO_ANIMATED_CLASS:
            return {
                ...state,
                animated : action.payload
            }
        case homeActionTypes.SET_FEATURED_SELLERS:
            return {
                ...state,
                sellers : action.payload
            }
        default:
            return state;
    }
}

export default homeReducer;