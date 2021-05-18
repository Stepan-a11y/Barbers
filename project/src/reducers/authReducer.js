import { login, auth } from '../api/authAPI';

const SET_USER_DATA = 'SET_USER_DATA';
const SET_PASSWORD_ERR = 'SET_PASSWORD_ERR';
const IS_LOADING = 'IS_LOADING';
const IS_LOGOUT = 'IS_LOGOUT';


let initialState = {
    userId: null, 
    firstName: null,
    lastName: null,
    email: null,
    isAuth: false,
    isLoading: false,
    msgError: null,
    isLogout: false,    
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA: 
            return {
                ...state, 
                ...action.payload,
                isAuth: true
            }
        case SET_PASSWORD_ERR: 
            return {
                ...state, 
                ...action.payload
            }
        case IS_LOADING:
            return {...state, isLoading: action.isLoading}
        case IS_LOGOUT:
                return {...state, isLogout: action.isLogout}
        default:
            return state;
    }
}

export const setAuthUserData = (userId, firstName, lastName, email, isAuth) => (
    {type: SET_USER_DATA, payload: {userId, firstName, lastName, email}, isAuth:isAuth})

export const setPasswordError = (msgError) => ({type: SET_PASSWORD_ERR, payload: {msgError}})

export const isLoadingFlag = (isLoading) => ({type:IS_LOADING, isLoading})

export const isLogoutSet = (isLogout) => ({type:IS_LOGOUT, isLogout})




export const loginThunk = (email, password) => {
    return (dispatch) => {
        login(email, password).then(data =>
            {
                if(data.success === true) {
                    let {id, firstName, lastName, email} = data.user;
                    dispatch(setAuthUserData(id, firstName, lastName, email));
                    localStorage.setItem('token', data.token)
                } else if(data.success === false) {
                    dispatch(setPasswordError(data.msg))
                }
            }
        );
    }
}

export const logout = () => {
    return (dispatch) => 
    {
        try {
            auth().then(data =>
                {
                    if(data.success === true) {
                        localStorage.removeItem('token');
                        dispatch(setAuthUserData(null, null, null, null, false));
                        dispatch(isLogoutSet(true))
                    }
                }
            );
            } catch (e){
                console.log(e.response.data);
            }
    }
}



export const authThunk = () => {
    return (dispatch) => {

        dispatch(isLoadingFlag(true));

        try {
        auth().then(data =>
            {
                if(data.success === true) {
                    localStorage.setItem('token', data.token)
                    let {id, firstName, lastName, email} = data.user;
                    dispatch(setAuthUserData(id, firstName, lastName, email));

                }
            }
        );
        } catch (e){
            console.log(e.response.data);
        }
    }
}


export default authReducer;
