import React from 'react';
import { useForm } from "react-hook-form";

const Login = ()=>{

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);
    
    return(
    <div className="loginContainer">
        <div className="logo">
            <img src="/assets/logo.png"></img>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name="email" type="email" placeholder="email" ref={register({ required: true })} />
            <input name="password" type="password" placeholder="password" ref={register({ required:true })} />
            <button type="submit">Submit</button>
        </form>
    </div>
    )
}

export default Login