import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {AppStateType, store} from './redux/store';


const reRenderEntireThree =(state: AppStateType)=> {

    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    state={state}
                    addPost={store.addPost.bind(store)}
                    addMessage={store.addMessage.bind(store)}
                    setNewPostText={store.setNewPostText.bind(store)}
                    setNewMessageText={store.setNewMessageText.bind(store)}
                    dispatch={store.dispatch.bind(store)}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );

}

reRenderEntireThree(store.getState());
store.subscribe(reRenderEntireThree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
