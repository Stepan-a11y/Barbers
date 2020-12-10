import { getMasters } from '../api/mastersAPI';

const SET_MASTERS = 'SET_MASTERS';

let initialState = { 
    masters: []
};


const mastersReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_MASTERS:
           return {...state, masters: [...state.masters, ...action.masters]}
        default:
            return state;
    }

}

export const setMasters = (masters) => ({type:SET_MASTERS, masters})

export const getMastersThunk = () => {
    return (dispatch) => {
    getMasters().then(data => 
        { 
            dispatch(setMasters(data));
        }
    );
    }
}

export default mastersReducer;