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


export const setMastersAC = (masters) => ({type:SET_MASTERS, masters})




export default mastersReducer;