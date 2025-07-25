import React from "react";
import "./Header.css";
import Netflix from "../../assets/image/Netflix_Logos.jpg";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Header() {
  return (
    <div className="header_outer_container">
      <div className="header_container">
        <div className="header_left">
          <ul>
            <li>
              <img src={Netflix} alt="netflix logo" width="100" />
            </li>
            <li>Home</li>
            <li>Tv shows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>Mylist</li>
            <li>Browse by languages</li>
          </ul>
        </div>
        <div className="header-right">
          <ul>
            <li><SearchIcon/></li>
            <li><NotificationsNoneIcon/></li>
            <li><AccountBoxIcon/></li>
            <li><ArrowDropDownIcon/></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
