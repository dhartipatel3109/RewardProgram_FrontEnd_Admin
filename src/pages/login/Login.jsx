import './login.scss';
import {Link} from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import MicrosoftIcon from '@mui/icons-material/Microsoft';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useEffect } from 'react';

const Login = () => {

    // SCRIPT TO TOGGLE BETWEEN THE SIGN-UP AND LOG-IN
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
    
    return (
        <div className='login'>
            <div className="container" id='container'>
                {/* SIGN UP  */}
                <div className='form-container sign-up'>
                    <form action=''>
                        <h1>Forgot Password?</h1>
                        <br/>
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
                        <span className='line'>OR</span> */}
                        <span>Use your Email that you used while Registration</span>
                        <br/>
                        <input type='email' placeholder='Email'/>
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
                        <span className='line'>OR</span>
                        <br/>
                        <span>Use your Email and Password to Login</span>
                        <input type='email' placeholder='Email'/>
                        <input type='password' placeholder='Password'/>
                        {/* <Link to='#' className='forget-link'>
                            Forgot password?
                        </Link> */}
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