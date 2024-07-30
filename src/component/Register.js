import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Register = () => {

    const [message, setMessage] = useState('');

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    })

    const navigate = useNavigate();

    const handleInput = (e) => {
        setUser({ ...user, [e.target.name]: [e.target.value] })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:8000/auth/register', user)
            setMessage(response.data.message);
            navigate('/login')
        }
        catch (error) {
            setMessage(error.response.data.message);
        }
        setUser({
            name: '',
            email: '',
            password: ''
        })
    }

    const nevigateLogin = () => {
        navigate('/login')
    }

    return (
        <div className="login">
            <div className="login-page-1">
                <h2>Welcome to Mobility eCommerce</h2>
                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <label>Name</label>
                        <input type="text" onChange={handleInput} placeholder="Enter the email id" name="name"></input>
                        <label>EmailID</label>
                        <input type="text" placeholder="Enter the email id" onChange={handleInput} name="email"></input>
                        <label>Password</label>
                        <input type="password" placeholder="Enter the password" onChange={handleInput} name="password"></input>
                        <button className="btn" type="submit">Register</button>
                    </form>
                    <p className="account" onClick={() => nevigateLogin()}>Already have account?<span>Login now</span></p>
                </div>
                <h4>{message}</h4>
            </div>
        </div>
    )
}

export default Register;