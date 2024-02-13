import './signup.scss';
import {Link, useNavigate} from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import MicrosoftIcon from '@mui/icons-material/Microsoft';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useEffect, useState } from 'react';
import api from './../../api/AxiosConfig'

const SignUp = () => {

    // SCRIPT TO TOGGLE BETWEEN THE SIGN-UP MERCHANT AND STORE
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
    }, [])
    // END OF SCRIPT

    const [store, setStore] = useState({
        busName : "",
        busEmail : "",
        busPhone : "",
        address1 : "",
        city : "",
        zipCode : "",
        country : ""
    })
    const {busName, busEmail, busPhone, address1, city, zipCode, country } = store

    const on1stInputChange = (e) => {
        setStore({...store, [e.target.name]:e.target.value})
    };

    let temp = 0;
    const on1stSubmit = async (e) => {
        e.preventDefault();
        console.log("=== Submit method called ===");
        console.log(store);
        // fetch("http://localhost:8080/api/v1/auth/stores/create-store-profile", {
        //     method: "POST",
        //     body: JSON.stringify(store),
        //     headers: {
        //         "Content-type": "application/json"
        //     }
        // })

        await api.post('/stores/create-store-profile', store, {
        headers: {
            'Content-Type': 'application/json'
        }
        })
        .then(response => {
            console.log('Store id:', response.data);
            temp = response.data;
        })
        .catch(error => {
            console.error('Error:', error);
        });
        console.log("=== FETCH POST DONE ===");
    }

    let navigate = useNavigate();
    const [merchant, setMerchant] = useState({
        email : "",
        password: "",
        phone: "",
        firstName: "",
        lastName : "",
        role: "ROLE_MERCHANT",
        storeId: temp
    })
    const {email, password, phone, firstName, lastName} = merchant;

    const inputOn2ndChange = (e) => {
        setMerchant({...merchant, [e.target.name]:e.target.value})
    };

    const on2ndSubmit = async () => {
        // e.preventDefault();
        try{
            await api.post("/api/v1/api/merchants/sign-up", merchant);
            navigate("/login");
        } catch(err) {
            console.log(err);
        }
    }
    
    return (
        <div className='signUp'>
            <div className="container" id='container'>
                {/* SIGN UP MERCHANT */}
                <div className='form-container log-in'>
                    <form onSubmit={(e) => on1stSubmit(e)}>
                        <h1>Create Store Profile</h1><br/>
                        <span>Please enter your Store detail to continue</span>
                        <input 
                            type={'text'}
                            placeholder='Store Name'
                            name='busName'
                            value={busName}
                            onChange={(e) => on1stInputChange(e)}
                        />
                        <input 
                            type={'email'} 
                            placeholder='Store Email'
                            name='busEmail'
                            value={busEmail}
                            onChange={(e) => on1stInputChange(e)}
                        />
                        <input 
                            type='text' 
                            placeholder='Store Phone Number'
                            name='busPhone'
                            value={busPhone}
                            onChange={(e) => on1stInputChange(e)}
                        />
                        <div className='split-input'>
                            <div className='split'>
                                <input 
                                    type={'text'}
                                    placeholder='Address 1'
                                    name='address1'
                                    value={address1}
                                    onChange={(e) => on1stInputChange(e)}
                                />
                                <input 
                                    type={'text'}
                                    placeholder='City'
                                    name='city'
                                    value={city}
                                    onChange={(e) => on1stInputChange(e)}
                                />
                            </div>
                        </div>
                        <div className='split-input'>
                            <div className='split'>
                                <input 
                                    type={'text'} 
                                    placeholder='Zip Code'
                                    name='zipCode'
                                    value={zipCode}
                                    onChange={(e) => on1stInputChange(e)}
                                />
                                <input 
                                    type={'text'} 
                                    placeholder='Country'
                                    name='country'
                                    value={country}
                                    onChange={(e) => on1stInputChange(e)}
                                />
                            </div>
                        </div>
                        <div className='div-button'>
                            <button id="signUp_1_submit" type='submit'>Sign Up</button>
                            {/* Button 1: signUp_1_Cancel  to go home */}
                            <Link to="/">Cancel</Link>
                        </div>
                    </form>
                </div>
                {/* SIGN UP STORE */}
                <div className='form-container sign-up'>
                    <form onSubmit={(e)=>onSubmit()}>
                        <h1>Create Merchant Account</h1><br/>
                        {/* <div className='social-icons'>
                            <Link to='' className='icon'><GoogleIcon /></Link>
                            <Link to='' className='icon'><MicrosoftIcon /></Link>
                            <Link to='' className='icon'><FacebookIcon /></Link>
                        </div>
                        <span className='line'>OR</span><br/> */}
                        <span>Please enter Merchant's detail to finish Registeration</span>
                        <input 
                            type={'text'} 
                            placeholder='Merchant Email'
                            name='email'
                            value={email}
                            onChange={(e) => inputOn2ndChange(e)}
                        />
                        <input 
                            type={'password'}
                            placeholder='Merchant Password'
                            name='password'
                            value={password}
                            onChange={(e) => inputOn2ndChange(e)}
                        />
                        <div className='split-input'>
                            <div className='split'>
                            <input 
                                type={'text'} 
                                placeholder='First Name'
                                name='firstName'
                                value={firstName}
                                onChange={(e) => inputOn2ndChange(e)}
                            />
                            <input 
                                type={'text'} 
                                placeholder='Last Name'
                                name='lastName'
                                value={lastName}
                                onChange={(e) => inputOn2ndChange(e)}
                            />
                            </div>
                        </div>
                        <input 
                            type={'text'} 
                            placeholder='Merchant Phone'
                            name='phone'
                            value={phone}
                            onChange={(e) => inputOn2ndChange(e)}
                        />
                        <div>
                            <button id="signUp_2_submit" type='submit'>Submit</button>
                            {/* Button 2: signUp_2_Cancel  to go home */}
                            <Link to="/">Cancel</Link>
                        </div>
                    </form>
                </div>

                <div className='toggle-container'>
                    <div className='toggle'>
                        <div className='toggle-panel toggle-left'>
                            <h1>Step, 2!</h1>
                            <p>Register with your credentials to access your store</p>
                            <button className='hidden' id='button-merchant'>Previous</button>
                        </div>
                        <div className='toggle-panel toggle-right'>
                            <h1>Step, 1!</h1>
                            <p>Enter your store's detail to activate your merchant panel</p>
                            <button className='hidden' id='button-store'>Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;