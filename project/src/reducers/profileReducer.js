import { getOrders } from '../api/ordersAPI';
import { delOrders } from '../api/ordersAPI';

const SET_ORDERS = 'SET_ORDERS';
const DEL_ORDERS = 'DEL_ORDERS';

let initialState = { 
    orders: [],
    del: false
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
                     if(o._id === action.orderId) {
                         return {...o}
                     }
                    }
                 ),
                 del: true
                 
            }
        default:
            return state;
    }

}

export const setOrders = (orders) => ({type:SET_ORDERS, orders})

export const deleteOrders = (orderId, del) => ({type:DEL_ORDERS, orderId, del: del})


export const deleteOrdersThunk = (orderId) => {
    return (dispatch) => {
        delOrders(orderId).then(data => 
            { 
                if(data.success === true){
                dispatch(deleteOrders(orderId));
                }
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