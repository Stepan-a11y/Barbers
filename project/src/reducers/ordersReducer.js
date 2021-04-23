import { newOrder } from '../api/ordersAPI';
import { getServices } from '../api/servicesAPI';
import { getMasters } from '../api/mastersAPI';

const SET_ORDER_DATA = 'SET_ORDER_DATA';
const SET_SERVICES_TO_ORDER = 'SET_SERVICES_TO_ORDER';
const SET_MASTERS_TO_ORDER = 'SET_MASTERS_TO_ORDER';


let initialState = {
    orderId: null, 
    email: null,
    masterName: null,
    serviceName: null,
    orderDate: null,
    servicesOrder: [],
    mastersOrder:[]   
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
                 servicesOrder: [...state.servicesOrder, ...action.servicesOrder]
            }
        case SET_MASTERS_TO_ORDER:
            return {
                 ...state, 
                 mastersOrder: [...state.mastersOrder, ...action.mastersOrder]
            }
        default:
            return state;
        }
} 

export const setOrderData = (orderId, email, masterName, serviceName, orderDate) => ({
    type: SET_ORDER_DATA, payload: {orderId, email, masterName, serviceName, orderDate}
})


export const setServicesToOrder = (servicesOrder) => ({type:SET_SERVICES_TO_ORDER, servicesOrder})

export const setMastersToOrder = (mastersOrder) => ({type:SET_MASTERS_TO_ORDER, mastersOrder})






export const ordersThunk = (email, masterName, serviceName, orderDate) => {
    return(dispatch) => {
        newOrder(email, masterName, serviceName, orderDate).then(data =>
            {
                if(data.success === true){
                    dispatch(setOrderData(email, masterName, serviceName, orderDate));
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

export const getMastersOrdersThunk = () => {
    return (dispatch) => {
        getMasters().then(data => 
            { 
                dispatch(setMastersToOrder(data));
            }
        );
        }
}







export default ordersReducer;