import { registration } from '../api/authAPI';

const SET_NEW_USER = 'SET_NEW_USER';

let initialState = {
    userId: null, 
    firstName: null,
    lastName: null,
    email: null,
    password: null    
};


const registrationReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_NEW_USER: 
            return {
                ...state, 
                ...action.payload,
            }
        default:
            return state;
    }
}


export const setNewUser = (userId, firstName, lastName, email, password) => ({type: SET_NEW_USER, payload: {userId, firstName, lastName, email, password}})



export const registrationThunk = ( firstName, lastName, email, password) => {
    return (dispatch) => {
        registration(firstName, lastName, email, password).then(data =>
            {      
                   
                    dispatch(setNewUser(firstName, lastName, email, password));      
            }
        );
    }
}



export default registrationReducer;
