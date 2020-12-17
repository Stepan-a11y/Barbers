import { getServices } from '../api/servicesAPI';

const SET_SERVICES = 'SET_SERVICES';

let initialState = { 
    services: []
};


const servicesReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_SERVICES:
           return {...state, services: [...state.services, ...action.services]}
        default:
            return state;
    }

}


export const setServices = (services) => ({type:SET_SERVICES, services})


export const getServicesThunk = () => {
    return (dispatch) => {
        getServices().then(data => 
            { 
                dispatch(setServices(data));
            }
        );
        }
}

export default servicesReducer;