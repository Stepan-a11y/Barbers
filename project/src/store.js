let state = {
     orders: [
         { id: 1, nameMaster: "Dmitry Sokolow", dateOrder: "12 september 2020 - 12:20"},
         { id: 2, nameMaster: "Petr Ivanow", dateOrder: "23 september 2020 - 14:40"}
     ],
     inform: {}
}



export const addOrder = (order) => {
    let newOrder = {
        id:3,
        nameMaster: state.inform.nameMaster,
        date: state.inform.date
    }
debugger;
    state.orders.push(newOrder);

}


export const updateInform = (newInform) => {
    state.inform = newInform;
}



export default state;