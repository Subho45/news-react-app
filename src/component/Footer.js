import React from "react";

// css
import "../css/Footer.css";

// icon
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const Footer = () => {
  return (
    <div className="footer">
      <div className="social__media__link">
        <a href="https://www.facebook.com/profile.php?id=100008004977942">
          <FacebookIcon fontSize="small" />
        </a>
        <a href="https://twitter.com/debojyotibabai1">
          <TwitterIcon fontSize="small" />
        </a>
        <a href="https://www.linkedin.com/in/debojyoti-ghosh-7003671a4/">
          <LinkedInIcon fontSize="small" />
        </a>
      </div>
      <p>CopyRight © TechNews | All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
