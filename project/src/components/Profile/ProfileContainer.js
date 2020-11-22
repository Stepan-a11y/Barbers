import React from 'react';
import { connect } from 'react-redux';
import {updateInformAC, addOrderAC} from '../../reducers/profileReducer';
import Profile from './Profile';


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