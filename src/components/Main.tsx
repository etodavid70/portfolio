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
              <img src="https://media.licdn.com/dms/image/v2/D4D03AQEF5LH-bJK_PA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1695977822049?e=1758153600&v=beta&t=cPK23-RTHuH5BIsu1Z83hNRVoBOod9S6mGTDN3bvcOM" alt="Avatar" />
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