import React from "react";

import styles from "./FormControls.module.css"

//types:
type FormControlType = { input: any, meta: any, } //need to fix any fnd check types!!! (meta has: touched, error...)

//functional component:
export const TextAreaForm: React.FC<FormControlType> = ({input, meta, ...props}) => {

    const isError = meta.touched && meta.error;

    return (
        <div className={ isError && `${styles.formControl} ${styles.error}`}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            {isError && <span>{meta.error}</span>}
        </div>
    )
}

export const InputForm: React.FC<FormControlType> = ({input, meta, ...props}) => {

    const isError = meta.touched && meta.error;

    return (
        <div className={ isError && `${styles.formControl} ${styles.error}`}>
            <div>
                <input {...input} {...props}/>
            </div>
            {isError && <span>{meta.error}</span>}
        </div>
    )
}