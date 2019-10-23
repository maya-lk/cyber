import { servicesActionTypes } from './services.types';

export const setServicesListing = serviceListing => ({
    type: servicesActionTypes.SET_SERVICES_LISTING,
    payload : serviceListing
});

export const setServiceTerms = serviceTerms => ({
    type: servicesActionTypes.SET_SERVICE_TERMS,
    payload : serviceTerms
});