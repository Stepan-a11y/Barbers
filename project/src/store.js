import {combineReducers, createStore} from 'redux';
import mastersReducer from './reducers/mastersReducer';
import profileReducer from './reducers/profileReducer';
import servicesReducer from './reducers/servicesReducer';

let reducers = combineReducers({ 
      profile: profileReducer, 
      mastersPage: mastersReducer,
      servicesPage: servicesReducer
    });

let store = createStore(reducers);


export default store;