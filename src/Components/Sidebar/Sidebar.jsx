import "./Sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Person2Icon from "@mui/icons-material/Person2";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SettingsIcon from "@mui/icons-material/Settings";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import LogoutIcon from "@mui/icons-material/Logout";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import LoginIcon from "@mui/icons-material/Login";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <h1 className="logo">MyDashboard</h1>
      </div>
      <div className="middle">
        <ul>
          <p className="title">Main</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <li>
            <Person2Icon className="icon" />
            <span>Users</span>
          </li>
          <p className="title">Products</p>
          <li>
            <ProductionQuantityLimitsIcon className="icon" />
            <span>Products</span>
          </li>
          <li>
            <EventAvailableIcon className="icon" />
            <span>Orders</span>
          </li>
          <p className="title">Useful Links</p>

          <li>
            <CircleNotificationsIcon className="icon" />
            <span>Notification</span>
          </li>
          <li>
            <QueryStatsIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">Service</p>

          <li>
            <SystemUpdateAltIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <LoginIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">User</p>

          <li>
            <AssignmentIndIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      {/* <div className="bottom">
        <div className="color-option"></div>
        <div className="color-option"></div>
       
      </div> */}
    </div>
  );
};

export default Sidebar;
