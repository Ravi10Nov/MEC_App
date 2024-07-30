import { useNavigate } from "react-router-dom";


const Login = () => {

    const nevigate = useNavigate();

    const nevigateRegister = ()=>{
        nevigate('/register')
    };

    return (
        <div className="login">
            <div className="login-page">
                <h2>Welcome to Mobility eCommerce</h2>
                <div className="form">
                    <form action="/login" method="post" >
                        <label>EmailID</label>
                        <input type="text" placeholder="Enter the email id" name="email"></input>
                        <label>Password</label>
                        <input type="password" placeholder="Enter the password" name="password"></input>
                        <button className="btn" type="submit">Login</button>
                    </form>
                    <p className="account" onClick={()=>nevigateRegister()}>Don't have account?<span>Register now</span></p>
                </div>
            </div>
        </div>
    )
};

export default Login;