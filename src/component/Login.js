import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {

    const [input , setInput] = useState(
        {
            email:'',
            password:''
        }
    )

    const [message, setMessage] = useState('');

    const nevigate = useNavigate();

    const nevigateRegister = ()=>{
        nevigate('/register')
    };

    const handleInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const checkCookie = (data) =>{
        console.log(data)
        document.cookie = 'ravi'+'='+data.jwt;
        // document.cookie = data.jwt;
    }

    const haldleSubmit = async (e) =>{
        e.preventDefault()
        try{
            const response = await axios.post('http://localhost:8000/auth/login',input);
            console.log(response);
            setMessage(response.data.message)
            if (response.data.message === 'Login successful.'){
                checkCookie(response.data)
                nevigate('/')
            }
        }
        catch (error) {
            if (error.response) {
                setMessage(error.response.data.message);
            } else {
                console.error('Error:', error);
            }
        }
    }



    return (
        <div className="login">
            <div className="login-page">
                <h2>Welcome to Mobility eCommerce</h2>
                <div className="form">
                    <form onSubmit={haldleSubmit} >
                        <label>EmailID</label>
                        <input type="text" placeholder="Enter the email id" onChange={handleInput} name="email"></input>
                        <label>Password</label>
                        <input type="password" placeholder="Enter the password" onChange={handleInput} name="password"></input>
                        <button className="btn" type="submit">Login</button>
                    </form>
                    <p className="account" onClick={()=>nevigateRegister()}>Don't have account?<span>Register now</span></p>
                </div>
                <h4 style={{margin:'20px 25px', color:'red'}}>{message}</h4>
            </div>
        </div>
    )
};

export default Login;