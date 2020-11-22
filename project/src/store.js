import {combineReducers, createStore} from 'redux';
import mastersReducer from './reducers/mastersReducer';
import profileReducer from './reducers/profileReducer'

let reducers = combineReducers({ 
      profile: profileReducer, 
      mastersPage: mastersReducer
    });

let store = createStore(reducers);


export default store;