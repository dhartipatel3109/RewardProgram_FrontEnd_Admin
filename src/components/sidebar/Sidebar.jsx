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

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <span className="bus-name">Djay Liquors</span>
                <br/>
                <span className="bus-logo"></span>
            </div>
            <br/>
            <div className="center">
                <ul>
                    <li>    
                        <div className="inner-li">     
                            <SpaceDashboardIcon className="icon"/>
                            <span>Dashboard</span>
                        </div>
                    </li>
                </ul>
                <br/>
                
                
                <p className="title">Manage</p>
                <ul>
                    <li>              
                        <div className="inner-li">
                            <GroupIcon className="icon"/>
                            <span>My Team</span>
                        </div>
                    </li>
                    <li>
                        <div className="inner-li">
                            <MilitaryTechIcon className="icon"/>
                            <span>Rewards</span> 
                        </div>
                    </li>
                    <li>
                        <div className="inner-li">
                            <EmojiEventsIcon className="icon"/>
                            <span>Promotions</span>
                         </div>
                    </li>
                </ul>
                <br/>
                

                <ul>
                    <li>
                        <div className='inner-li'>
                            <StarHalfIcon className="icon-color" />
                            <span className="icon-color">Reward Program</span>
                            <LaunchIcon className="icon-color"/>
                        </div>
                    </li>
                </ul>
                <br />

                
                <p className="title">Pages</p>
                <ul>
                    <li>   
                        <div className="inner-li">   
                            <PersonIcon className="icon"/>
                            <span>Customers</span>
                        </div>
                    </li>
                    <li>  
                        <div className="inner-li">
                            <ReceiptLongIcon className="icon"/>
                            <span>Transactions</span>
                        </div> 
                    </li>
                </ul>
                <br/>
                <p className="title">Marketing</p>
                <ul>
                    <li>     
                        <div className="inner-li">
                            <MarkEmailReadIcon className="icon"/>
                            <span>Send SMS/Email</span>
                        </div>
                    </li>  
                    <li>
                        <div className="inner-li">
                            <EditNotificationsIcon className="icon"/>
                            <span>Push Notification</span>
                        </div>
                    </li>
                </ul>
                <br/>
                
                
                <p className="title">Setting</p>
                <ul>
                    <li>     
                        <div className="inner-li">
                            <StoreIcon className="icon"/>
                            <span>Store</span>
                        </div>
                    </li>
                    <li>
                        <div className="inner-li">
                            <AccountBoxIcon className="icon"/>
                            <span>Account</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;