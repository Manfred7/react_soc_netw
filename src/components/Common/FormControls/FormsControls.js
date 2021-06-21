import React from "react";

import s from "./FormsControls.module.css"

const FormControl = ({input, meta, child, ...props}) => {
    const hasEror = meta.touched && meta.error;
    let controlClass = s.formControl;

    if (hasEror)
        controlClass = controlClass + " " + s.error;

    return (
        <div className={controlClass}>
            <div>
                {props.children}
            </div>
            {hasEror && <span>{meta.error}</span>}
        </div>
    )
}

export const MyTextarea = (props) => {

  const {input, meta, child, ...restProps} = props;

    return (
        <FormControl {...props} >
            <textarea {...input} {...restProps} />
        </FormControl>
    )
}


export const MyInput = (props) => {
    const {input, meta, child, ...restProps} = props;
    return (
        <FormControl {...props}>
            <input {...input} {...restProps} />
        </FormControl>
    )

}
