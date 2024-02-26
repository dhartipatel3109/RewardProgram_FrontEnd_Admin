import './login.scss';
import {Link, useNavigate} from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import MicrosoftIcon from '@mui/icons-material/Microsoft';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Login = () => {

    // SCRIPT TO TOGGLE BETWEEN THE LOG-IN AND FORGOT PASSWORD
    useEffect(() => {
        const container = document.getElementById('container');
        const registerBtn = document.getElementById('button-signup');
        const loginBtn = document.getElementById('button-login');

        registerBtn.addEventListener('click', () => {
            container.classList.add("active");
        });

        loginBtn.addEventListener('click', () => {
            container.classList.remove("active");
        });
    })
    // END OF SCRIPT.

    const [merchant, setMerchant] = useState({
        email : "",
        password : ""
    });
    const {email, password} = merchant;
    const onInputChange = (e) => {setMerchant({...merchant, [e.target.name]:e.target.value})};

    let navigate = useNavigate();
    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        console.log("Credential passed: ", merchant);
        fetch("http://localhost:8080/users/login", {
            method: "POST",
            body: JSON.stringify(merchant),
            headers: {
                "content-type": "application/json"
            }
        })
        .then((response) => {return response.json()})
        .then((data) => {
            console.log("Data: ", data);
            navigate("/v/dashboard");
        })
        .catch(error => {
            toast.error('🦄 Error!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
                // transition: Bounce
            });
            console.log("Error: ", error);
            navigate("/login");
        });
    }

    const [merchantForgotEmail, setMerchantForgotEmail] = useState()    
    
    return (
        <div className='login'>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition: Bounce
            />
            <div className="container" id='container'>
                {/* FORGOT PASSWORD  */}
                <div className='form-container sign-up'>
                    <form>
                        <h1>Forgot Password?</h1><br/>
                        <span>Use your Email that you used while Registration</span><br/>
                        <input 
                            type='text' 
                            placeholder='Email'
                            onChange={(e) => setMerchantForgotEmail(e.target.value)}
                            value={merchantForgotEmail}
                        />
                        <br/>
                        <div className='div-button'>
                            <button id="signUp_2_submit" type='submit'>Submit</button>
                            {/* Button 1: signUp_1_Cancel  to go home */}
                            <Link className='cancel' to="/">Cancel</Link>
                        </div>
                        <Link style={{marginTop:8}} to="/sign-up">Create Account</Link>
                    </form>
                </div>

                {/* Login */}
                <div className='form-container log-in'>
                    <form onSubmit={handleLoginSubmit}>
                        <h1>Merchant Log In</h1>
                        {/* <div className='social-icons'>
                            <Link to='' className='icon'>
                                <GoogleIcon />
                            </Link>
                            <Link to='' className='icon'>
                                <MicrosoftIcon />
                            </Link>
                            <Link to='' className='icon'>
                                <FacebookIcon />
                            </Link>
                        </div> 
                        <span className='line'>OR</span><br/> */}
                        <span>Use your Email and Password to Login</span>
                        <input 
                            type='text' 
                            placeholder='Email'
                            name='email'
                            value={email}
                            onChange={(e) => onInputChange(e)}
                        />
                        <input 
                            type='password' 
                            placeholder='Password'
                            name='password'
                            value={password}
                            onChange={(e) => onInputChange(e)}                            
                        />
                        <div className='div-button'>
                            <button id="signUp_1_submit" type='submit'>Login</button>
                            {/* Button 1: signUp_1_Cancel  to go home */}
                            <Link className='cancel' to="/">Cancel</Link>
                        </div>
                        <Link style={{marginTop:8}} to="/sign-up">Create Account</Link>
                    </form>
                </div>
                <div className='toggle-container'>
                    <div className='toggle'>
                        <div className='toggle-panel toggle-left'>
                            <h1>Welcome, Back!</h1>
                            <p>Enter your credentials to log back in</p>
                            <button className='hidden' id='button-login'>Log In</button>
                        </div>
                        <div className='toggle-panel toggle-right'>
                            <h1>Hello, Friend!</h1>
                            <p><span>Forgot your credentials? Please Follow the below link</span></p>
                            <button className='hidden' id='button-signup'>Forgot Password</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;