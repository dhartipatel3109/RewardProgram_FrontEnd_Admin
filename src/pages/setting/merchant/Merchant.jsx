import './merchant.scss'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';

const Merchant = () => {
    // Show and Hide Password
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    // End

    return (
        <div className='merchant'>
            <Box component="form" className='box'
                sx={{
                    '& .MuiTextField-root': { m: 1.5, width: '45ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <div className='store-title'>
                    <h2>Djay Liquors</h2>
                    <p>(Merchant Settings)</p>
                    <br/>
                </div>
                <div className='merchant-info'>
                    <p>Merchant id: </p>
                    <p>Member Since: </p>
                </div>
                <br/>
                <div>
                    <TextField
                        required
                        id="firstName"
                        label="First Name"
                    />
                    <TextField 
                        required
                        id="lastName" 
                        label="Last Name" 
                    />
                    <TextField 
                        required
                        id="phoneNo" 
                        label="Phone No." 
                    />
                    <TextField 
                        required
                        id="email"
                        label="Email" 
                    />
                    <FormControl sx={{ m: 1, width: '45ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {
                                            showPassword ? <VisibilityOff /> : <Visibility />
                                        }
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                    <TextField 
                        required
                        id="outlined-search" 
                        type="Search field" 
                        label="Job Title" 
                    />
                    <br/><br/>
                    <div>
                        <button id='merchant-save' className='button'>
                            Save
                        </button>
                    </div>
                </div>
                
            </Box>
        </div>
    )
}

export default Merchant;
