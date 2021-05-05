import { getUsers, updUser } from '../api/usersAPI';

const SET_USERS = 'SET_USERS';
const UPD_USER = 'UPD_USER';

let initialState = { 
    userId: null,
    firstName: null,
    lastName: null,
    isUpd: false,
    users: []
};



const validReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USERS:
           return {...state, users: [...state.users, ...action.users]}
        case UPD_USER:
           return {...state, ...action.payload, isUpd: true}
        default:
            return state;
    }

}

export const setUsers = (users) => ({type:SET_USERS, users})

export const updUserState = (userId, firstName, lastName, isUpd) => ({type:UPD_USER, payload:{userId, firstName, lastName}, isUpd: isUpd })

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
    updUser(userId, firstName, lastName).then(data => 
        { 
            if(data.success === true){
                dispatch(updUserState(userId, firstName, lastName));
            }
        }
    );
    }
}



export default validReducer;