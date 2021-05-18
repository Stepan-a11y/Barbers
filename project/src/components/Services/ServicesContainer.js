import React from 'react';
import { connect } from 'react-redux';
import Services from './Services';
import { authThunk, isLogoutSet } from '../../reducers/authReducer'
import {setServices, getServicesThunk} from '../../reducers/servicesReducer'
import { Redirect } from 'react-router-dom';



class ServicesContainer extends React.Component {

        componentDidMount(){
            this.props.getServicesThunk();
            this.props.authThunk();
        }

        componentWillUnmount(){
            window.location.reload();
        }

        
        render()  {
            if(this.props.isLogout) window.location.reload()
            return <Services services={this.props.services} />
        }

}

let mapStateToProps = (state) => {
    return {
        services: state.servicesPage.services,
        isLogout: state.auth.isLogout,
    }
}



export default connect( mapStateToProps, { setServices, getServicesThunk, authThunk, isLogoutSet } )(ServicesContainer);

