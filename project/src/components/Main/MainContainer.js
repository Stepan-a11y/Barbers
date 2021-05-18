import React from 'react';
import { connect } from 'react-redux';
import Main from './Main';
import { authThunk, isLogoutSet } from '../../reducers/authReducer'


class MainContainer extends React.Component{

     componentDidMount(){
        this.props.authThunk();
    }

    render(){
        if(this.props.isLogout) window.location.reload()
        return(
            <Main />
        )
    }
}


let mapStateToProps = (state) => {
    return {
        isLogout: state.auth.isLogout
    }
}


export default connect( mapStateToProps, {authThunk, isLogoutSet} )(MainContainer);