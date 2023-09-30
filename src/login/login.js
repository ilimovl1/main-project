import React from "react";
import "./login.scss"
import Header from '../Header/Header';
import Columns from "../columns/column";
import Metro from "./login-Img/metro.jpg"
import {BsFacebook} from "react-icons/bs"
import {BsTwitter} from "react-icons/bs"
import {AiFillGooglePlusCircle} from "react-icons/ai"
import {yupResolver} from "@hookform/resolvers/yup" 
import {useForm} from "react-hook-form"
import * as yup from "yup"

const schema = yup.object({

    fullName: yup.string().required(),
    email: yup.string().email("Неправильный e-mail"),
    password: yup.string().min(6, "Пароль слишком короткий")

})

function Login() {

const form = useForm({

    mode: "onChange",
    resolver: yupResolver(schema)

})

const onSubmit = (data) => {

console.log(data);

}

    return(

        <section>

            {/* <Header/> */}
            <Columns/>
            <img className="metro" src={Metro}/>

            <div className="div-0">

                <h1>LOGIN</h1>
                <div className="div-1">

                    <BsFacebook className="twit"/>
                    <BsTwitter className="twit"/>
                    <AiFillGooglePlusCircle className="twit"/>

                </div>

                <div className="div-2" onSubmit={form.handleSubmit(onSubmit)}>

                    <input className={`input ${form.formState.errors.email?.message && "error"}`} {...form.register("email")} placeholder="Login"/>
                    <input className={`input ${form.formState.errors.password?.message && "error"}`} {...form.register("password")} type="password" placeholder="Password"/>
                    <button>Login</button>

                </div>

            </div>

        </section>

    )

}

export default Login