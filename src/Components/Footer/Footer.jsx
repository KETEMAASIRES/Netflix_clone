import React from "react";
import "./footer.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <div className="footer_outer_container">
      <div className="footer_container">
        <div className="footer_icons">
          <FacebookOutlinedIcon />
          <InstagramIcon />
          <TwitterIcon />
          <YouTubeIcon />
        </div>
        <div className="footer-list">
          <div>
            <p>Audio Description</p>
            <p>Investor Relations</p>
            <p>Privacy</p>
            <p>Contact Us</p>
          </div>
          <div>
            <p>Help Center</p>
            <p>Jobs</p>
            <p>Legal Notices</p>
            <p>Do Not Sell or Share My Personal Information</p>
          </div>
          <div>
            <p>Gift Cards</p>
            <p>Netflix Shop</p>
            <p>Cookie Preferences</p>
            <p>Ad Choices</p>
          </div>
          <div>
            <p>Media Center</p>
            <p>Terms of Use</p>
            <p>Corporate Information</p>
          </div>
        </div>
        <div className="service_code">
          <p>Service Code</p>
        </div>
      </div>
      <div className="copy_right">&copy; 1997–2025 Netflix, Inc.</div>
    </div>
  );
}

export default Footer;
