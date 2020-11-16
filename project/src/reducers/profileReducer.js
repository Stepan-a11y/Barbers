const UPDATE_INFORM = 'UPDATE_INFORM';
const ADD_ORDER = 'ADD_ORDER';



let initialState = { 
        orders: [
            { id: 1, nameMaster: "Dmitry Sokolow", dateOrder: "12 september 2020 - 12:20"},
            { id: 2, nameMaster: "Petr Ivanow", dateOrder: "23 september 2020 - 14:40"}
        ],
        inform: {
            newNameMaster: "",
            newDateOrder:""
        }
};


const profileReducer = (state = initialState, action) => {
        switch(action.type) {
            case ADD_ORDER:
                let newOrder = {
                    id:3,
                    nameMaster: state.inform.newNameMaster,
                    dateOrder: state.inform.newDateOrder
                }
                state.orders.push(newOrder);
                return state;
            case UPDATE_INFORM:
                state.inform = action.order;
                return state;
            default:
                return state;
        }

}



export const updateInformAC = (order) => ({type:UPDATE_INFORM, order:order})
export const addOrderAC = () => ({type:ADD_ORDER })



export default profileReducer;