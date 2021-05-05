import { registration } from '../api/authAPI';

const SET_NEW_USER = 'SET_NEW_USER';

let initialState = {
    userId: null, 
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    registered: false    
};


const registrationReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_NEW_USER: 
            return {
                ...state, 
                ...action.payload,
                registered: true
            }
        default:
            return state;
    }
}


export const setNewUser = (userId, firstName, lastName, email, password, registered) => ({type: SET_NEW_USER, payload: {userId, firstName, lastName, email, password}, registered: registered})



export const registrationThunk = ( firstName, lastName, email, password) => {
    return (dispatch) => {
        registration(firstName, lastName, email, password).then(data =>
            {      
                if(data.success === true) {
                    dispatch(setNewUser(firstName, lastName, email, password));  
                }    
            }
        );
    }
}



export default registrationReducer;
