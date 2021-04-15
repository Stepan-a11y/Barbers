import React from "react";
import Header from './Header';
import { logout } from '../../reducers/authReducer'
import { connect } from 'react-redux';



class HeaderContainer extends React.Component {

    componentDidUpdate() {
        
        console.log("componentDidUpdate")
    }

    render() {
        
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})


export default connect (mapStateToProps, {logout})(HeaderContainer);