import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {getOrdersThunk, setOrders, deleteOrdersThunk} from '../../reducers/profileReducer';
import { authThunk, isLogoutSet } from '../../reducers/authReducer';
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
    if(props.isLogout) return <Redirect to="/login" />

    return(

        <Profile  del={props.del} isAuth={props.isAuth} firstName={props.firstName} lastName={props.lastName} emailAuth={props.emailAuth} orders={props.orders} deleteOrdersThunk={props.deleteOrdersThunk}/>
    )
    
}




let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        firstName: state.auth.firstName,
        lastName: state.auth.lastName,
        emailAuth: state.auth.email,
        orders: state.profile.orders,
        isLogout: state.auth.isLogout,
        del: state.profile.del
    }
}




export default connect(mapStateToProps, {authThunk, getOrdersThunk, setOrders, deleteOrdersThunk, isLogoutSet})(ProfileContainer);


