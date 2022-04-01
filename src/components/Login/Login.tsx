import React, {useState} from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {ThunkAction} from "redux-thunk";

import styles from "./Login.module.css"
import {
    authReducerAT,
    loginUserThunk,
    logoutUserThunk
} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

//types:
type confProps = {
    form: string;
}
type passType = 'password' | 'text'
type LoginPagePropsType = any //need to fix any
type LoginFormPropsType = any //need to fix any
type mapStateToPropsType = {
    isAuth: boolean
}
type mapDispatchToPropsType = {
    loginUserThunk: (
        email: string,
        password: string,
        rememberMe: boolean
    ) => ThunkAction<void, AppStateType, unknown, authReducerAT>
    logoutUserThunk:  () => ThunkAction<void, AppStateType, unknown, authReducerAT>
}
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

    const [passView, setPassView] = useState<boolean>(false);
    const passVariation: passType = passView ?  'text' :  'password';

    //change password view type handler function:
    const showPasswordHandler = () => {
        if (passView) {
            setPassView(false);
        } else {
            setPassView(true);
        }
    }

    return (
        <div className={styles.loginForm}>
            <form onSubmit={handleSubmit}>
                <div>
                    <Field
                        className={styles.field}
                        placeholder={"email"}
                        name={"email"}
                        component={"input"}
                    />
                </div>
                <div>
                    <Field
                        className={styles.field}
                        placeholder={"Password"}
                        name={"password"}
                        component={"input"}
                        type={passVariation}
                    />
                    <span className={styles.iconPass} onClick={showPasswordHandler}>👁</span>
                </div>
                <div className={styles.items}>
                    <div className={styles.checkBox}>
                        <Field
                            className={"field"}
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
        </div>
    )
}

//reduxForm HOC:
const LoginReduxForm = reduxForm<confProps,any>({form: 'Login'})(LoginForm); //need to check types & fix any !!!

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
    if (isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div className={styles.loginPage}>
            <h1>Samurai Login</h1>
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