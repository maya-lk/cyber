import { servicesActionTypes } from './services.types';

const INITIAL_STATE = {
    serviceListing : null,
    serviceTerms : null
}

const servicesReducer = ( state = INITIAL_STATE , action ) => {
    switch (action.type) {
        case servicesActionTypes.SET_SERVICES_LISTING:
            return{
                ...state,
                serviceListing : action.payload
            }
        case servicesActionTypes.SET_SERVICE_TERMS:
            return{
                ...state,
                serviceTerms : action.payload
            }
        default:
            return state;
    }
}

export default servicesReducer;