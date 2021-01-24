import { login } from '../api/authAPI';

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null, 
    firstName: null,
    lastName: null,
    email: null,
    isAuth: false    
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA: 
            return {
                ...state, 
                ...action.payload,
                isAuth: true
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, firstName, lastName, email, isAuth) => ({type: SET_USER_DATA, payload: {userId, firstName, lastName, email}, isAuth: isAuth})


export const loginThunk = (email, password) => {
    return (dispatch) => {
        login(email, password).then(data =>
            {
                if(data.success === true) {
                    let {id, firstName, lastName, email} = data.user;
                    dispatch(setAuthUserData(id, firstName, lastName, email));
                    localStorage.setItem('token', data.token)
                }
            }
        );
    }
}

export default authReducer;
