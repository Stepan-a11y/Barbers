import React from 'react';
import { connect } from 'react-redux';
import Services from './Services';
import { authThunk } from '../../reducers/authReducer'
import {setServices, getServicesThunk} from '../../reducers/servicesReducer'



class ServicesContainer extends React.Component {

        componentDidMount(){
            this.props.getServicesThunk();
            this.props.authThunk();
        }

        componentWillUnmount(){
            window.location.reload();
        }

        render() {
            return <Services services={this.props.services} />
        }

}

let mapStateToProps = (state) => {
    return {
        services: state.servicesPage.services
    }
}



export default connect( mapStateToProps, { setServices, getServicesThunk, authThunk } )(ServicesContainer);

