import React from 'react';
import {Field, reduxForm} from 'redux-form'

let LoginForm = (props) => {
    const {handleSubmit} = props
    return (

        <form onSubmit={handleSubmit}>
            <div>
                <Field name="login" component="input" type="text"/>
            </div>
            <div>
                <Field name="password" component="input" type="password"/>
            </div>
            <div>
                <Field name="rememberMe" component="input" type="checkbox"/>remember me!
            </div>
            <div>
                <button type="submit">Login</button>
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
