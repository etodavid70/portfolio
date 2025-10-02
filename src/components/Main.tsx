import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          {/*<img src="../assets/images/passport.jpeg" alt="Avatar" />*/}
              <img src="https://drive.google.com/file/d/1F6IENDSjsuMgcWrWechvaEfsNScNU0w-/view?usp=drive_link" alt="Eto" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/etodavid70" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/david-eto/" target="_blank" rel="noreferrer"><LinkedInIcon style={{ color: "#0a66c2"}}/></a>
          </div>
          <h1>Eto David</h1>
          <p>Mobile Engineer</p>
            <p style={{ fontSize: "15px"}}>Kotlin | Flutter | React Native</p>
          <div className="mobile_social_icons">
            <a href="https://github.com/etodavid70" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/david-eto/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;