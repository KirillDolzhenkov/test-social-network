import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";

import styles from "./Login.module.css"
import {loginUserThunk, logoutUserThunk} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";

//types:
type LoginFormPropsType = any; //need to any
type LoginPagePropsType = any; //need to any
type mapStateToPropsType = {
    isAuth: boolean
}; //need to any
type mapDispatchToPropsType = any //need to any

export type LoginPropertiesType = {
    email: string
    password: string
    rememberMe: boolean
    /*captcha: boolean*/
}

//functional component:
const LoginForm: React.FC<LoginFormPropsType> = (props) => {

    const {
        handleSubmit,
    } = props;

    return (
        <form onSubmit={handleSubmit} className={styles.loginForm}>
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

//reduxForm HOC:
const LoginReduxForm = reduxForm<{},LoginFormPropsType>({form: 'Login'})(LoginForm); //need to check types!!!

//mapStateToProps & functional component:
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
    }
}

const LoginPage: React.FC<LoginPagePropsType> = (props) => {

    const {
        loginUserThunk,
        isAuth,
    } = props;

    //login onClickHandler:
    const onSubmit = (formData: LoginPropertiesType) => {
        loginUserThunk(formData.email, formData.password, formData.rememberMe);
    }

    //redirect users to profile page after login:
    if (isAuth){
        return <Redirect to={"/profile"}/>
    }

    return (
        <div className={styles.loginPage}>
            <h1>User Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

//HOC:
const LoginPageContainer = connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(
    mapStateToProps, {
        loginUserThunk,
        logoutUserThunk,
    }
)(LoginPage);


export {
    LoginPageContainer
}