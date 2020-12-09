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


export const setServicesAC = (services) => ({type:SET_SERVICES, services})

export default servicesReducer;