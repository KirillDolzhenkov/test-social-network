import React from "react";
import {Field, reduxForm} from "redux-form";

import styles from "./Login.module.css"
import {loginUserThunk} from "../../redux/auth-reducer";

//types:
type LoginFormPropsType = any; //need to fix
type LoginPagePropsType = any; //need to fix

//functional component:
const LoginForm: React.FC<LoginFormPropsType> = (props) => {
    /*const {} = props;*/

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
const LoginPage: React.FC<LoginPagePropsType> = (props) => {
    /*const {} = props;*/
    const onSubmit = (formData: any) => {
       /* props.loginUserThunk(formData);*/
        console.log(formData);
    }

    return (
        <div className={styles.loginPage}>
            <h1>Login Bushido</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export {
    LoginPage
}