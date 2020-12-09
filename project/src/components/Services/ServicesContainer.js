import React from 'react';
import { connect } from 'react-redux';
import Services from './Services';
import {setServicesAC} from '../../reducers/servicesReducer'


let mapStateToProps = (state) => {
    return {
        services: state.servicesPage.services
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setServices: (services) => {
            dispatch(setServicesAC(services));
        }
    }
}

const ServicesContainer = connect( mapStateToProps, mapDispatchToProps )(Services);

export default ServicesContainer;