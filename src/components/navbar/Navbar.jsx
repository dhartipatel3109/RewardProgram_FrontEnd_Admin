import './navbar.scss';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import logo from './PD.png';
import { Link } from 'react-router-dom';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { useEffect, useRef, useState } from 'react';

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    let menuRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if(!menuRef.current.contains(e.target)) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handler);
    });

    return (
        <div className="navbar">
            <div className='wrapper'>
                <div className='items'>
                    <div className='item'>
                        <DarkModeOutlinedIcon/>
                    </div>
                    <div className='item'>
                        <FullscreenExitOutlinedIcon />
                    </div>
                    <div className='item'>
                        <NotificationsNoneOutlinedIcon />
                        <div className='counter'>
                            1
                        </div>
                    </div>
                    <div className='item'>
                        <div className='item-form' ref={menuRef}>
                            <img src={logo} className='avatar' alt='profile_img' 
                                onClick={() => {setIsMenuOpen(!isMenuOpen)}}
                            />
                            <div className={`sub-menu ${isMenuOpen ? 'active' : 'inactive'}`} id='sub-menu-id'>
                                <div className='user-info'>
                                    <img src={logo} alt='profile_img' className='user-image'/>
                                    <h2>Utpal Patel</h2> 
                                </div>                               
                                <div className='options'>
                                    <div className='option'>
                                        <SettingsApplicationsIcon/>
                                        <Link to='/v/settings/store' className='link'>                            
                                            <h2>Store Setting</h2>
                                            <span></span>
                                        </Link>
                                    </div>
                                    <div className='option'>
                                        <AccountBoxIcon />
                                        <Link to='/v/settings/merchant-account' className='link'>
                                            <h2>Merchant Setting</h2>
                                        </Link>
                                    </div>
                                    <div className='option'>
                                        <LogoutIcon/>
                                        <Link to='/' className='link'>
                                            <h2>Logout</h2>
                                        </Link>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;