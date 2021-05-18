import { getMasters } from '../api/mastersAPI';

const SET_MASTERS = 'SET_MASTERS';
const IS_LOADING = 'IS_LOADING';

let initialState = { 
    masters: [],
    isLoading: false,
};


const mastersReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_MASTERS:
           return {...state, masters: [...state.masters, ...action.masters]}
        case IS_LOADING:
            return {...state, isLoading: action.isLoading}
        default:
            return state;
    }

}

export const setMasters = (masters) => ({type:SET_MASTERS, masters})

export const isLoadingFlag = (isLoading) => ({type:IS_LOADING, isLoading})

export const getMastersThunk = () => {
    
    return (dispatch) => {

        dispatch(isLoadingFlag(true));

    getMasters().then(data => 
        { 
            dispatch(isLoadingFlag(false));
            dispatch(setMasters(data));
        }
    );
    }
}

export default mastersReducer;