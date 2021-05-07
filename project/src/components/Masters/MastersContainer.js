import React from 'react';
import { connect } from 'react-redux';
import Masters from './Masters';
import { authThunk } from '../../reducers/authReducer'
import {setMasters, getMastersThunk} from '../../reducers/mastersReducer';


class MastersContainer extends React.Component{

     componentDidMount(){
        this.props.getMastersThunk();
        this.props.authThunk();
    }

    componentWillUnmount(){
        window.location.reload();
    }

    render(){
        return(
            <Masters isAuth={this.props.isAuth} masters={this.props.masters} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        masters: state.mastersPage.masters
    }
}

export default connect( mapStateToProps, {setMasters, getMastersThunk, authThunk} )(MastersContainer);
