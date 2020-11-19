import React from 'react';
import { connect } from 'react-redux';
import {updateInformAC, addOrderAC} from '../../reducers/profileReducer';
import Profile from './Profile';



/*
 let informChange = () => {
        
    let order = {
        newNameMaster: inputTextMaster.current.value,
        newDateOrder: inputTextDate.current.value
}
    props.dispatch(updateInformAC(order));
}




let addOrder = () => {  
    props.dispatch(addOrderAC());      
}
*/

debugger;

let mapStateToProps = (state) => {
    return {
        orders: state.profile.orders,
        inform: state.profile.inform
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateInform: (order) => {
            dispatch(updateInformAC(order));
        },
        addOrder: () => {
            dispatch(addOrderAC());
        }
    }
}




let ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);


export default ProfileContainer;