import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addPost, AppStateType, state} from "./redux/store";

export const reRenderEntireThree =(state: AppStateType)=> {

    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    state={state}
                    addPost={addPost}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );

}