import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import logo from '../../../../assets/images/Logo3.png'
import background from '../../../../assets/images/hero-bg.jpeg'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='top'>
        <Link to={'/'}><span className='logo'><h5>Fundmenaija</h5></span></Link>
        </div>
        <hr />
        <div className='center'>
          <ul>
            <p className="title">MAIN MENU</p>
            <li>
               <DashboardIcon className='icon' />
               <Link to={'/dash'}><span>Dashboard</span></Link>
            </li>
            <p className="title">FUNDS MENU</p>
            <li>
              <GroupIcon className='icon' />
              <Link to={'/dash'}><span>Wallet</span></Link>
            </li>
            <li>
              <Inventory2Icon className='icon' />
              <Link to={'/dash/transfer'}><span>Transfer</span></Link>
            </li>
            <li>
              <ProductionQuantityLimitsIcon className='icon' />
              <Link to={'/dash/withdraw'}><span>Withdraw</span></Link>
            </li>
            <li>
              <LocalShippingIcon className='icon' />
              <Link to={'/dash/raise'}><span>Raise Fund</span></Link>
            </li>
            <p className="title">ACCOUNT</p>
            <li>
              <PersonIcon className='icon' />
              <Link to={'/dash/profile'}><span>Profile</span></Link>
            </li>
            <li>
              <SettingsIcon className='icon' />
              <Link to={'/dash/setting'}><span>Settings</span></Link>
            </li>
            <li>
              <ExitToAppIcon className='icon' />
              <span>Logout</span>
            </li>
          </ul>
        </div>
        <div className='bottom'>
          <div className='colorOptions'></div>
          <div className='colorOptions'></div>
        </div>
    </div>
  )
}

export default Sidebar