import "./Navbar.scss";

import SearchIcon from "@mui/icons-material/Search";
import TranslateIcon from "@mui/icons-material/Translate";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="search">
        <input type="text" placeholder="Search..." />
        <SearchIcon className="search-icon"/>
      </div>

      <div className="items">
        <div className="item">
          <TranslateIcon />
          <span>English</span>
        </div>
        <div className="item">
          <DarkModeOutlinedIcon />
        </div>
        <div className="item">
          <NotificationsActiveOutlinedIcon />
        </div>
        <div className="item">
          <ChatBubbleOutlineOutlinedIcon />
        </div>
        <div className="item">
          <MenuOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
