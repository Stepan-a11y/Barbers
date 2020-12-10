import React from 'react';
import { connect } from 'react-redux';
import Masters from './Masters';
import {setMasters, getMastersThunk} from '../../reducers/mastersReducer';


class MastersContainer extends React.Component{

     componentDidMount(){
        this.props.getMastersThunk();
    }

    render(){
        return(
            <Masters masters={this.props.masters} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        masters: state.mastersPage.masters
    }
}

export default connect( mapStateToProps, {setMasters, getMastersThunk} )(MastersContainer);
