import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import productReducer from './redux/reducers/ProductReducer';
import usersReducer from './redux/reducers/UserReducer';

const allReducers = combineReducers({
    prod : productReducer,
    user : usersReducer
});

const myStore = createStore(
    allReducers,
    {
        prod: [{
            name: "Product 1",
            quantity: 6,
            user: "Michael"
        }]
    },
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    //window.devToolsExtension && window.devToolsExtension()   
);

//console.log(store.getState())


//store.dispatch(action);

// const updateUserAction = {
//     type : "updateUser",
//     payload: {
//         user: "New User Called Something",
//     }
// }

//myStore.dispatch(updateUserAction);
console.log(myStore.getState());
ReactDOM.render(<Provider store={myStore}><App /></Provider>, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
