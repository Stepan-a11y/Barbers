import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {getOrdersThunk, setOrders} from '../../reducers/profileReducer';
import { authThunk } from '../../reducers/authReducer';
import Profile from './Profile';
import { Redirect } from 'react-router-dom';



const ProfileContainer = (props) => {

    useEffect(() => {
        props.authThunk();
        props.getOrdersThunk();
        return () => {
            window.window.location.reload()
          }
    }, [])

   
    

    if(!props.isAuth) return <Redirect to="/login" />

    return(

        <Profile  isAuth={props.isAuth} firstName={props.firstName} lastName={props.lastName} emailAuth={props.emailAuth} orders={props.orders}/>
    )
    
}




let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        firstName: state.auth.firstName,
        lastName: state.auth.lastName,
        emailAuth: state.auth.email,
        orders: state.profile.orders
    }
}




export default connect(mapStateToProps, {authThunk, getOrdersThunk, setOrders})(ProfileContainer);


