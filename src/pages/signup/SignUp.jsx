import './signup.scss';
import {Link} from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import MicrosoftIcon from '@mui/icons-material/Microsoft';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useEffect } from 'react';

const SignUp = () => {

    // SCRIPT TO TOGGLE BETWEEN THE SIGN-UP AND LOG-IN
    useEffect(() => {
        const container = document.getElementById('container');
        const registerMerchant = document.getElementById('button-merchant');
        const registerStore = document.getElementById('button-store');

        registerStore.addEventListener('click', () => {
            container.classList.add("active");
        });

        registerMerchant.addEventListener('click', () => {
            container.classList.remove("active");
        });
    })
        
    
    return (
        <div className='login'>
            <div className="container" id='container'>
                {/* SIGN UP  */}
                <div className='form-container sign-up'>
                    <form action=''>
                        <h1>Create Store Profile</h1>
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
                        <span className='line'>OR</span>
                        <span>Use your Email for Registration</span> */}
                        <input type='text' placeholder='Store Name'/>
                        <input type='email' placeholder='Store Email'/>
                        <input type='text' placeholder='Store Phone Number'/>
                        
                        <div className='split-input'>
                            <div className='split'>
                                <input type='text' placeholder='Address'/>
                                <input type='text' placeholder='City'/>
                            </div>
                        </div>
                        <div className='split-input'>
                            <div className='split'>
                                <input type='text' placeholder='Zip Code'/>
                                <input type='text' placeholder='Country'/>
                            </div>
                        </div>
                        <button>Sign Up</button>
                    </form>
                </div>

                {/* Login */}
                <div className='form-container log-in'>
                    <form action=''>
                        <h1>Create Merchant Account</h1>
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
                        <span>Use your Email and Password to Register</span>
                        <input type='email' placeholder='Merchant Email'/>
                        <input type='password' placeholder='Merchant Password'/>
                        <button>Submit</button>
                    </form>
                </div>

                <div className='toggle-container'>
                    <div className='toggle'>
                        <div className='toggle-panel toggle-left'>
                            <h1>Step, 2!</h1>
                            <p>Enter your store's detail to activate merchant panel</p>
                            <button className='hidden' id='button-merchant'>Previous</button>
                        </div>
                        <div className='toggle-panel toggle-right'>
                            <h1>Step, 1!</h1>
                            <p>Register with your credentials to access your store</p>
                            <button className='hidden' id='button-store'>Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;