import React, {useState} from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";


import styles from "./Login.module.css"
import {loginUserThunk, logoutUserThunk} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";

//types:
type LoginFormPropsType = any //need to fix any
type IProps = {
    form: string;
}
type LoginPagePropsType = any; //need fix to any
type mapStateToPropsType = {
    isAuth: boolean
}
type mapDispatchToPropsType = any //need to fix any
type passType = 'password' | 'text'
export type LoginPropertiesType = {
    email: string
    password: string
    rememberMe: boolean
    /*captcha: boolean*/
}

//functional component:
const LoginForm: React.FC<any> = (props) => {

    const {
        handleSubmit,
    } = props;

    const [passView, setPassView] = useState<boolean>(false);
    const passInput = passView ?  'text' :  'password';

    //change icon view handler function:
    const changePassView = () => {
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
                        placeholder={"email"}
                        name={"email"}
                        component={"input"}
                    />
                </div>
                <div className={passInput}>
                    <Field
                        placeholder={"Password"}
                        name={"password"}
                        component={"input"}
                        type={passInput}
                    />
                    <span className={styles.iconPass} onClick={changePassView}>👁</span>
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
        </div>
    )
}

//reduxForm HOC:
const LoginReduxForm = reduxForm<any>({form: 'Login'})(LoginForm); //need to check types!!!

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