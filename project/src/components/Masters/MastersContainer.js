import React from 'react';
import { connect } from 'react-redux';
import Masters from './Masters';
import { authThunk, isLogoutSet } from '../../reducers/authReducer'
import {setMasters, getMastersThunk, isLoadingFlag} from '../../reducers/mastersReducer';


class MastersContainer extends React.Component{

     componentDidMount(){
        this.props.getMastersThunk();
        this.props.authThunk();
    }

    componentWillUnmount(){
        window.location.reload();
    }

    render(){

        if(this.props.isLogout) window.location.reload()
        return( 
            
            <Masters isAuth={this.props.isAuth} masters={this.props.masters} />
        
        )
    }
}

let mapStateToProps = (state) => {
    return {
        masters: state.mastersPage.masters,
        isLogout: state.auth.isLogout,
    }
}

export default connect( mapStateToProps, {setMasters, getMastersThunk, isLoadingFlag, authThunk, isLogoutSet} )(MastersContainer);
