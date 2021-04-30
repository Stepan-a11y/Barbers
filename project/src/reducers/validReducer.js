import { getUsers } from '../api/usersAPI';

const SET_USERS = 'SET_USERS';

let initialState = { 
    users: []
};



const validReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USERS:
           return {...state, users: [...state.users, ...action.users]}
        default:
            return state;
    }

}

export const setUsers = (users) => ({type:SET_USERS, users})

export const getUsersThunk = () => {
    
    return (dispatch) => {
    getUsers().then(data => 
        { 
            dispatch(setUsers(data));
        }
    );
    }
}

export default validReducer;