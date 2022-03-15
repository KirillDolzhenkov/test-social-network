import React from "react";
import {Field, reduxForm} from "redux-form";

import styles from "./Login.module.css"

//types:
type LoginFormPropsType = any;
type LoginPagePropsType = any;

//functional component:
const LoginForm: React.FC<LoginFormPropsType> = (props) => {

    const {
    } = props;

    return(
        <form onSubmit={props.handleSubmit} className={styles.loginForm}>
            <div>
                <Field placeholder={"Login"} name={"login"} component={"input"}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={"input"}/>
            </div>
            <div className={styles.items}>
                <div>
                    <Field type={"checkbox"} name={"rememberMe"} component={"input"}/> remember me
                </div>
                <div className={styles.loginButton}>
                    <button>Login</button>
                </div>
            </div>
        </form>
    )
}


const LoginReduxForm = reduxForm({form: 'Login'})(LoginForm);

//functional component:
const LoginPage: React.FC<LoginPagePropsType> = () => {
    const onSubmit = () => {
        console.log()
    }

    return (
        <div className={styles.loginPage}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export {
    LoginPage
}