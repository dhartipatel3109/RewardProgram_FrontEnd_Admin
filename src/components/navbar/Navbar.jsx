import './navbar.scss';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import logo from './PD.png';

const Navbar = () => {
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
                        <img 
                            src={logo}
                            className='avatar' alt='profile_img'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;