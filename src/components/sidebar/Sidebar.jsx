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
                        <span>
                            <NavLink to='/dashboard'  style={({isActive}) => ({
                                color: isActive ? '#800e0e' : 'black',
                                textDecoration: 'none',
                            })}>
                                Dashboard
                            </NavLink>
                        </span>
                    </li>
                    <li>    
                        <GroupIcon className="icon"/>
                        <span>
                            <NavLink to='/our-team' style={({isActive}) => ({
                                color: isActive ? '#800e0e' : 'black',
                                textDecoration: 'none',

                            })}>
                                My Team
                            </NavLink>
                        </span>
                    </li>
                    <li>
                        <MilitaryTechIcon className="icon"/>
                        <span>
                            <NavLink to='/store-rewards' style={({isActive}) => ({
                                color: isActive ? '#800e0e' : 'black',
                                textDecoration:  'none',
                                // marginLeft: '-1rem',
                                // transition: 'all 500ms ease',
                                // '&::before': {
                                //     content:   '||',
                                //     width:  '10px',
                                //     height:  '100%',
                                //     background: '#7380ec',
                                //     marginRight:  '5px',
                                // }
                            })}>
                                
                                Rewards
                            </NavLink>
                        </span>
                    </li>
                    <li>
                        <EmojiEventsIcon className="icon"/>
                        <span>
                            <NavLink to='/store-promotions' style={({isActive}) => ({
                                color: isActive ? '#800e0e' : 'black',
                                textDecoration: 'none',
                            })}>
                                Promotions
                            </NavLink>
                        </span>
                    </li>
                    <li>
                        <StarHalfIcon className="icon-color" />
                        <span className="icon-color">
                            <NavLink to='/ongoing-reward-program' style={({isActive}) => ({
                                color: isActive ? '#800e0e' : 'black',
                                textDecoration: 'none',
                            })}>
                                Reward Program
                            </NavLink>
                        </span>
                        {/* <LaunchIcon className="icon-color"/> */}
                    </li>
                    <li>   
                        <PersonIcon className="icon"/>
                        <span>
                            <NavLink to='/customers-list' style={({isActive}) => ({
                                color: isActive ? '#800e0e' : 'black',
                                textDecoration: 'none',
                            })}>
                                Customers
                            </NavLink>
                        </span>
                    </li>
                    <li>  
                        <ReceiptLongIcon className="icon"/>
                        <span>
                            <NavLink to='/transactions-detail' style={({isActive}) => ({
                                color: isActive ? '#800e0e' : 'black',
                                textDecoration: 'none',
                            })}>
                                Transactions
                            </NavLink>
                        </span>
                    </li>
                    <li>     
                        <MarkEmailReadIcon className="icon"/>
                        <span>
                            <NavLink to='/marketing/send-message' style={({isActive}) => ({
                                color: isActive ? '#800e0e' : 'black',
                                textDecoration: 'none',
                            })}>
                                Send SMS/Email
                            </NavLink>
                        </span>
                    </li>  
                    <li>
                        <EditNotificationsIcon className="icon"/>
                        <span>
                            <NavLink to='/marketing/notify-through-app' style={({isActive}) => ({
                                color: isActive ? '#800e0e' : 'black',
                                textDecoration: 'none',
                            })}>
                                Push Notification
                            </NavLink>
                        </span>
                    </li>
                    <li>     
                        <StoreIcon className="icon"/>
                        <span>
                            <NavLink to='/settings/store' style={({isActive}) => ({
                                color: isActive ? '#800e0e' : 'black',
                                textDecoration: 'none',
                            })}>
                                Store Setting
                            </NavLink>
                        </span>
                    </li>
                    <li>
                        <AccountBoxIcon className="icon"/>
                        <span>
                            <NavLink to='/settings/merchant-account' style={({isActive}) => ({
                                color: isActive ? '#800e0e' : 'black',
                                textDecoration: 'none',
                            })}>
                                Account Setting
                            </NavLink>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;