import { newOrder } from '../api/ordersAPI';
import { getServices } from '../api/servicesAPI';

const SET_ORDER_DATA = 'SET_ORDER_DATA';
const SET_SERVICES_TO_ORDER = 'SET_SERVICES_TO_ORDER';

let initialState = {
    orderId: null, 
    masterName: null,
    serviceName: null,
    orderDate: null,
    services: []   
};


const ordersReducer = (state = initialState, action) => {
        switch(action.type){
        case SET_ORDER_DATA:
            return {
                ...state,
                ...action.payload
            }
        case SET_SERVICES_TO_ORDER:
            return {
                 ...state, 
                 services: [...state.services, ...action.services]
            }
        default:
            return state;
        }
} 

export const setOrderData = (orderId, masterName, serviceName, orderDate) => ({
    type: SET_ORDER_DATA, payload: {orderId, masterName, serviceName, orderDate}
})

export const setServicesToOrder = (services) => ({type:SET_SERVICES_TO_ORDER, services})

export const ordersThunk = (masterName, serviceName, orderDate) => {
        return(dispatch) => {
            newOrder(masterName, serviceName, orderDate).then(data =>
                {
                    if(data.success === true){
                        dispatch(setOrderData(masterName, serviceName, orderDate));
                    }
                }
            );
        }
}

export const getServicesOrdersThunk = () => {
    return (dispatch) => {
        getServices().then(data => 
            { 
                dispatch(setServicesToOrder(data));
            }
        );
        }
}

export default ordersReducer;