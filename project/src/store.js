import {combineReducers, createStore} from 'redux';
import profileReducer from './reducers/profileReducer'

let reducers = combineReducers({profile: profileReducer});

let store = createStore(reducers);


export default store;