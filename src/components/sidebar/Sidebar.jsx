import './sidebar.scss';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import GroupIcon from '@mui/icons-material/Group';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PersonIcon from '@mui/icons-material/Person';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import StoreIcon from '@mui/icons-material/Store';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import EditNotificationsIcon from '@mui/icons-material/EditNotifications';
import LaunchIcon from '@mui/icons-material/Launch';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import { NavLink } from 'react-router-dom';
import { grey, orange } from '@mui/material/colors';
import styled from '@emotion/styled';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <span id='bus-name' >Djay Liquors</span><br/>
                <span className="bus-logo">
                    
                </span>
            </div>
            <div className="center">
                <ul>
                    <li>    
                        <SpaceDashboardIcon className="icon"/>            
                        <NavLink to='/v/dashboard' style={{textDecoration:'none'}}>
                            <span>Dashboard</span>
                        </NavLink>                        
                    </li>
                    <li>    
                        <GroupIcon className="icon"/>                        
                        <NavLink to='/v/our-team' style={{textDecoration:'none'}}>
                            <span>My Team</span>
                        </NavLink>                        
                    </li>
                    <li>
                        <MilitaryTechIcon className="icon"/>                    
                        <NavLink to='/v/store-rewards' style={{textDecoration:'none'}}>                                
                            <span>Rewards</span>
                        </NavLink>                        
                    </li>
                    <li>
                        <EmojiEventsIcon className="icon"/>                        
                        <NavLink to='/v/store-promotions' style={{textDecoration:'none'}}>
                            <span>Promotions</span>
                        </NavLink>                        
                    </li>
                    <li>
                        <StarHalfIcon className="icon" />
                        <NavLink to='/v/ongoing-reward-program' style={{textDecoration:'none'}}>
                            <span>Reward Program</span>
                        </NavLink>
                        {/* <LaunchIcon className="icon-color"/> */}
                    </li>
                    <li>   
                        <PersonIcon className="icon"/>                        
                        <NavLink to='/v/customers-list' style={{textDecoration:'none'}}>
                            <span>Customers</span>
                        </NavLink>                        
                    </li>
                    <li>  
                        <ReceiptLongIcon className="icon"/>                        
                        <NavLink to='/v/transactions-detail' style={{textDecoration:'none'}}>
                            <span>Transactions</span>
                        </NavLink>                        
                    </li>
                    <li>     
                        <MarkEmailReadIcon className="icon"/>                    
                        <NavLink to='/v/marketing/send-message' style={{textDecoration:'none'}}>
                            <span>Send SMS/Email</span>
                        </NavLink>                        
                    </li>  
                    <li>
                        <EditNotificationsIcon className="icon"/>            
                        <NavLink to='/v/marketing/notify-through-app' style={{textDecoration:'none'}}>
                            <span>Push Notification</span>
                        </NavLink>                        
                    </li>
                    {/* <li>     
                        <StoreIcon className="icon"/>                        
                        <NavLink to='/v/settings/store' style={{textDecoration:'none'}}>
                            <span>Store Setting</span>
                        </NavLink>                        
                    </li>
                    <li>
                        <AccountBoxIcon className="icon"/>                        
                        <NavLink to='/v/settings/merchant-account' style={{textDecoration:'none'}}>
                            <span>Account Setting</span>
                        </NavLink>                        
                    </li> */}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;