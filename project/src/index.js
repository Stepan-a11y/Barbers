import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import state, { subscribe } from "./store";
import { addOrder} from "./store";
import { update } from "./store";



let rerender = (state) => {

ReactDOM.render(<App state={state} addOrder={ addOrder } update={ update }/>,document.getElementById('root'));

}

rerender(state);

subscribe(rerender);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

