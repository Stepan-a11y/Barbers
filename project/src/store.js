import {applyMiddleware, combineReducers, createStore} from 'redux';
import mastersReducer from './reducers/mastersReducer';
import profileReducer from './reducers/profileReducer';
import servicesReducer from './reducers/servicesReducer';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({ 
      profile: profileReducer, 
      mastersPage: mastersReducer,
      servicesPage: servicesReducer
    });

let store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store;