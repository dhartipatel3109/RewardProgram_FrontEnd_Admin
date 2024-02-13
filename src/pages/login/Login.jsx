import './login.scss';
import {Link} from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import MicrosoftIcon from '@mui/icons-material/Microsoft';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useEffect, useState } from 'react';

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
    

    const [merchantEmail, setMerchantEmail] = useState();
    const [merchantPassword, setMerchantPassword] = useState();

    const [merchantForgotEmail, setMerchantForgotEmail] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
    }
    
    return (
        <div className='login'>
            <div className="container" id='container'>
                {/* FORGOT PASSWORD  */}
                <div className='form-container sign-up'>
                    <form onSubmit={handleSubmit}>
                        <h1>Forgot Password?</h1>
                        <br/>
                        <span>Use your Email that you used while Registration</span>
                        <br/>
                        <input 
                            type='email' 
                            placeholder='Email'
                            onChange={(e) => setMerchantForgotEmail(e.target.value)}
                            value={merchantForgotEmail}
                        />
                        <br/>
                        <button>Submit</button>
                    </form>
                </div>

                {/* Login */}
                <div className='form-container log-in'>
                    <form action=''>
                        <h1>Merchant Log In</h1>
                        <div className='social-icons'>
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
                        <span className='line'>OR</span><br/>
                        <span>Use your Email and Password to Login</span>
                        <input 
                            type='email' 
                            placeholder='Email'
                            onChange={(e) => setMerchantEmail(e.target.value)}
                            value={merchantEmail}
                        />
                        <input 
                            type='password' 
                            placeholder='Password'
                            onChange={(e) => setMerchantPassword(e.target.value)}
                            value={merchantPassword}
                        />
                        <button>Log In</button>
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