import { servicesActionTypes } from './services.types';

export const setServicesListing = serviceListing => ({
    type: servicesActionTypes.SET_SERVICES_LISTING,
    payload : serviceListing
});