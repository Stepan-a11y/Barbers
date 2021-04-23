import { getOrders } from '../api/ordersAPI';
import { delOrders } from '../api/ordersAPI';

const SET_ORDERS = 'SET_ORDERS';
const DEL_ORDERS = 'DEL_ORDERS';

let initialState = { 
    orders: []
};


const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_ORDERS:
           return {
               ...state, 
               orders: [...state.orders, ...action.orders]
            }
        case DEL_ORDERS:
            return {
                 ...state,
                 orders: state.orders.map( o => {
                     if(o.id === action.orderId) {
                         return {...o}
                     }
                    }
                 )
                 
            }
        default:
            return state;
    }

}

export const setOrders = (orders) => ({type:SET_ORDERS, orders})

export const deleteOrders = (orderId) => ({type:DEL_ORDERS, orderId})


export const deleteOrdersThunk = (orderId) => {
    return (dispatch) => {
        delOrders(orderId).then(data => 
            { 
                dispatch(deleteOrders(orderId));
            }
        );
        }
}


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