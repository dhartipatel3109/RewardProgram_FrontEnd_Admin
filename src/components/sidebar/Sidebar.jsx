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
                        <span>Dashboard</span>
                    </li>
                    <li>    
                        <GroupIcon className="icon"/>
                        <span>My Team</span>
                    </li>
                    <li>
                        <MilitaryTechIcon className="icon"/>
                        <span>Rewards</span>
                    </li>
                    <li>
                        <EmojiEventsIcon className="icon"/>
                        <span>Promotions</span>
                    </li>
                    <li>
                        <StarHalfIcon className="icon-color" />
                        <span className="icon-color">Reward Program</span>
                        {/* <LaunchIcon className="icon-color"/> */}
                    </li>
                    <li>   
                        <PersonIcon className="icon"/>
                        <span>Customers</span>
                    </li>
                    <li>  
                        <ReceiptLongIcon className="icon"/>
                        <span>Transactions</span>
                    </li>
                    <li>     
                        <MarkEmailReadIcon className="icon"/>
                        <span>Send SMS/Email</span>
                    </li>  
                    <li>
                        <EditNotificationsIcon className="icon"/>
                        <span>Push Notification</span>
                    </li>
                    <li>     
                        <StoreIcon className="icon"/>
                        <span>Store</span>
                    </li>
                    <li>
                        <AccountBoxIcon className="icon"/>
                        <span>Account</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;