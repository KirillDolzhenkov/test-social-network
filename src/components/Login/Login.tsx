import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";

import styles from "./Login.module.css"
import {loginUserThunk, logoutUserThunk} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

//types:
type LoginFormPropsType = any; //need to any
type LoginPagePropsType = any; //need to any
type mapDispatchToPropsType = any //need to any

export type LoginPropertiesType = {
    email: string
    password: string
    rememberMe: boolean
    /*captcha: boolean*/
}

//functional component:
const LoginForm: React.FC<LoginFormPropsType> = (props) => {

    return (
        <form onSubmit={props.handleSubmit} className={styles.loginForm}>
            <div>
                <Field
                    placeholder={"email"}
                    name={"email"}
                    component={"input"}
                />
            </div>
            <div>
                <Field
                    placeholder={"Password"}
                    name={"password"}
                    component={"input"}
                    type={"password"}
                />
            </div>
            <div className={styles.items}>
                <div>
                    <Field
                        type={"checkbox"}
                        name={"rememberMe"}
                        component={"input"}
                    /> remember me
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
const LoginPage: React.FC<LoginPagePropsType> = (props) => {

    const onSubmit = (formData: LoginPropertiesType) => {
        props.loginUserThunk(formData.email, formData.password, formData.rememberMe);
        /*console.log(formData.email, formData.password, formData.rememberMe);*/
    }

    return (
        <div className={styles.loginPage}>
            <h1>User Login</h1>

            <LoginReduxForm //@ts-ignore //need to fix it !!!
             onSubmit={onSubmit}/>
        </div>
    )
}

//HOC:
const LoginPageContainer = connect<null, mapDispatchToPropsType, {}, AppStateType>(
    null, {
        loginUserThunk,
        logoutUserThunk,
    })(LoginPage);


export {
    LoginPageContainer
}