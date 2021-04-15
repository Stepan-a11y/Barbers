import { getOrders } from '../api/ordersAPI';


const SET_ORDERS = 'SET_ORDERS';

let initialState = { 
    orders: []
};


const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_ORDERS:
           return {...state, orders: [...state.orders, ...action.orders]}
        default:
            return state;
    }

}

export const setOrders = (orders) => ({type:SET_ORDERS, orders})

export const getOrdersThunk = () => {
    
    return (dispatch) => {
    getOrders().then(data => 
        { 
            dispatch(setOrders(data));
        }
    );
    }
}


export default profileReducer;