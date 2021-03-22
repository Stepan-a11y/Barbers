import { newOrder } from '../api/ordersAPI';

const SET_ORDER_DATA = 'SET_ORDER_DATA';

let initialState = {
    orderId: null, 
    masterName: null,
    serviceName: null,
    orderDate: null,   
};


const ordersReducer = (state = initialState, action) => {
        switch(action.type){
        case SET_ORDER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
        }
} 

export const setOrderData = (orderId, masterName, serviceName, orderDate) => ({
    type: SET_ORDER_DATA, payload: {orderId, masterName, serviceName, orderDate}
})

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

export default ordersReducer;