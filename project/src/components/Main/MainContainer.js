import React from 'react';
import { connect } from 'react-redux';
import Main from './Main';
import { authThunk } from '../../reducers/authReducer'


class MainContainer extends React.Component{

     componentDidMount(){
        this.props.authThunk();
    }

    render(){
        return(
            <Main />
        )
    }
}



export default connect( null, {authThunk} )(MainContainer);