import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import store from "./store";



let rerender = (state) => {

ReactDOM.render(<App state={state} dispatch={store.dispatch.bind(store)} />,document.getElementById('root'));

}

rerender(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerender(state);
});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

