import { getOrders } from '../api/ordersAPI';


const SET_ORDER = 'SET_ORDER';



let initialState = { 
    orders: []
};


const profileReducer = (state = initialState, action) => {
        switch(action.type) {
            case SET_ORDER:
                return {...state, orders: [...state.orders, ...action.orders]}
            default:
                return state;
        }

}



export const setOrders = (orders) => ({type:SET_ORDER, orders})



export const getOrdersThunk = () => {
    debugger;
    return (dispatch) => {
    getOrders().then(data => 
        { 
            dispatch(setOrders(data));
        }
    );
    }
    debugger;
}


export default profileReducer;