import React from "react";

import styles from "./FormControls.module.css"

//types:
type FormControlType = any //{ input: any, meta: any, FormValue: string} //need to fix any fnd check types!!! (meta has: touched, error...)

//functional component:
const  FormControl: React.FC<FormControlType> = ({input, meta, ...props}) => {

    const {
        formControlValue,
    } = props;

    const isError = meta.touched && meta.error;
    const FormElement = formControlValue;

    return (
        <div className={ isError && `${styles.formControl} ${styles.error}`}>
            <div>
                <FormElement {...input} {...props}/>
            </div>
            {isError && <span>{meta.error}</span>}
        </div>
    )
}

export {
    FormControl
}