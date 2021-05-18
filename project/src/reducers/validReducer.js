import { getUsers, updUser } from '../api/usersAPI';

const SET_USERS = 'SET_USERS';
const UPD_USER = 'UPD_USER';
const IS_LOADING = 'IS_LOADING';

let initialState = { 
    userId: null,
    firstName: null,
    lastName: null,
    isUpd: false,
    isLoading: false,
    users: []
};



const validReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USERS:
           return {...state, users: [...state.users, ...action.users]}
        case UPD_USER:
           return {...state, ...action.payload, isUpd: true}
        case IS_LOADING:
            return {...state, isLoading: action.isLoading}
        default:
            return state;
    }

}

export const setUsers = (users) => ({type:SET_USERS, users})

export const updUserState = (userId, firstName, lastName, isUpd) => ({type:UPD_USER, payload:{userId, firstName, lastName}, isUpd: isUpd })

export const isLoadingFlag = (isLoading) => ({type:IS_LOADING, isLoading})


export const getUsersThunk = () => {
    
    return (dispatch) => {
    getUsers().then(data => 
        { 
            dispatch(setUsers(data));
        }
    );
    }
}


export const updUserThunk = (userId, firstName, lastName) => {
    
    return (dispatch) => {

    dispatch(isLoadingFlag(true));   

    updUser(userId, firstName, lastName).then(data => 

        {
            if(data.success === true){
                dispatch(isLoadingFlag(false))
                dispatch(updUserState(userId, firstName, lastName));
            }
        }
    );
    }
}



export default validReducer;