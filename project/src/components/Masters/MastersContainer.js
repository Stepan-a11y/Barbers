import React from 'react';
import { connect } from 'react-redux';
import Masters from './Masters';
import {setMastersAC} from '../../reducers/mastersReducer'


let mapStateToProps = (state) => {
    return {
        masters: state.mastersPage.masters
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setMasters: (masters) => {
            dispatch(setMastersAC(masters));
        }
    }
}

const MastersContainer = connect( mapStateToProps, mapDispatchToProps )(Masters);


export default MastersContainer;