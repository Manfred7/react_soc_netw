import React from 'react';
import {Field, reduxForm} from 'redux-form'
import {MyInput} from "../Common/FormControls/FormsControls";
import {maxLength30, requiredField} from "../../Utils/Validators/validators";

let LoginForm = (props) => {
    const {handleSubmit} = props
    return (

        <form onSubmit={handleSubmit}>
            <div>
                <Field name="login" component={MyInput} validate={[requiredField,maxLength30]} type="text"/>
            </div>
            <div>
                <Field name="password" component={MyInput} validate={[requiredField,maxLength30]}type="password"/>
            </div>
            <div>
                <Field name="rememberMe" component="input" type="checkbox"/>remember me!
            </div>
            <div>
                <button type="submit">Login1</button>
            </div>
        </form>

        /*<form>
            <div>
                <input type={"text"} placeholder="login"/>
            </div>
            <div>
                <input type="password" placeholder="password"/>
            </div>
            <div>
                <input type={"checkbox"}/> remember me!
            </div>
            <div>
                <button type={"submit"}>Login</button>
            </div>
        </form>*/
    )
}
const createReduxForm = reduxForm({ form: 'LoginFrm' })
LoginForm = createReduxForm(LoginForm);

const Login = (props) => {
    const onSubmit =(formdata)=>{
        console.log(formdata);
    }

    return (
        <div>
            <h1>
                Login
            </h1>
            <LoginForm onSubmit={onSubmit}/>
        </div>
    );
};

export default Login;
