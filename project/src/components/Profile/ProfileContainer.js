import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {getOrdersThunk, setOrders} from '../../reducers/profileReducer';
import { authThunk } from '../../reducers/authReducer';
import Profile from './Profile';



const ProfileContainer = (props) => {

    useEffect(() => {
        props.getOrdersThunk()
        props.authThunk()
    }, [])

    debugger;

    let orderEmail = props.profileOrders.email

    return(
        <Profile orderEmail={orderEmail} emailAuth={props.emailAuth} />
    )
    debugger;
}




let mapStateToProps = (state) => {
    return {
        profileOrders: state.profile.orders,
        emailAuth: state.auth.email
    }
}




export default connect(mapStateToProps, {getOrdersThunk, setOrders, authThunk})(ProfileContainer);


