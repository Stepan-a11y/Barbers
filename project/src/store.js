import {applyMiddleware, combineReducers, createStore} from 'redux';
import mastersReducer from './reducers/mastersReducer';
import profileReducer from './reducers/profileReducer';
import servicesReducer from './reducers/servicesReducer';
import authReducer from './reducers/authReducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import ordersReducer from './reducers/ordersReducer';

let reducers = combineReducers({ 
      profile: profileReducer, 
      mastersPage: mastersReducer,
      servicesPage: servicesReducer,
      auth: authReducer,
      orders: ordersReducer,
      form: formReducer
    });

let store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store;