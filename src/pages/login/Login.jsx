import './login.scss';
import {Link} from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import MicrosoftIcon from '@mui/icons-material/Microsoft';
import FacebookIcon from '@mui/icons-material/Facebook';

const Login = () => {
    return (
        <div className='login'>
            <div className='dummy'>
                
            </div>
            <div className="container">
                {/* SIGN UP  */}
                <div className='form-container sign-up'>
                    <form action=''>
                        <h1>Create Account</h1>
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

                        <span>or use your email for Registration</span>

                        <input type='text' placeholder='Name'/>
                        <input type='email' placeholder='Email'/>
                        <input type='password' placeholder='Password'/>
                        <button>Sign Up</button>
                    </form>
                </div>

                {/* Login */}
                <div className='form-container log-in'>
                    <form action=''>
                        <h1>Log In</h1>
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

                        <span>or use your email and password for Log in</span>
                        <input type='email' placeholder='Email'/>
                        <input type='password' placeholder='Password'/>
                        <Link to='#'>
                            Forgot password?
                        </Link>
                        <button>Log In</button>
                    </form>
                </div>

                <div className='toggle-container'>
                    <div className='toggle'>
                        <div className='toggle-panel toggle-left'>
                            <h1>Welcome, Back!</h1>
                            <p>Enter your personal details to use all the site</p>
                            <button className='hidden' id='button-login'>Log In</button>
                        </div>

                        <div className='toggle-panel toggle-right'>
                            <h1>Hello, Friend!</h1>
                            <p>Register with your personal details to use all the site</p>
                            <button className='hidden' id='button-signup'>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;