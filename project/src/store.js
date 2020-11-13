
let rerender = () => {
    console.log('changed');
}

let state = {
     orders: [
         { id: 1, nameMaster: "Dmitry Sokolow", dateOrder: "12 september 2020 - 12:20"},
         { id: 2, nameMaster: "Petr Ivanow", dateOrder: "23 september 2020 - 14:40"}
     ],
     inform: {
         newNameMaster: "",
         newDateOrder:""
     }

     
}




export let addOrder = () => {
    let newOrder = {
        id:3,
        nameMaster: state.inform.newNameMaster,
        dateOrder: state.inform.newDateOrder
    }
    state.orders.push(newOrder);
    debugger;
    rerender(state);
}


export let update = (data) => {

   state.inform = data;
   rerender(state);
}


export const subscribe = (observer) => {
        rerender = observer;
}

export default state;