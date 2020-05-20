import React, { Component } from "react";
import "./Home.css";

import schedule from "../../images/schedule.png";
import secure from "../../images/secure.png";
import collaboration from "../../images/collaboration.png";
import icon from "../../images/icon.png";
// import fitbit from "../../images/fitbit.png";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">          
        <div className="lander">
          <div className="fitbit-image">
            <div className="gradient">
              <h1>Peace of mind when it comes to your data.</h1>
              <p>Filter the information you want to share.</p>
            </div>
          </div>
          
        </div>
          
        <div className="feature">
          <div className="item">
            <img src={schedule} alt="calendar"/>
            <h2>Pick a schedule that works for you.</h2>
          </div>

          <div className="item">
            <img src={secure} alt="secure"/>
            <h2>Your data is kept secure.</h2>
          </div>

          <div className="item">
            <img src={collaboration} alt="collaboration"/>
            <h2>Know when your data is fetched.</h2>
          </div>
        </div>

        <div className="project">
          <div className="sample">
            <img src={icon} alt="Susan Miller"/>
            <h2>LIvES</h2>
            <p>The LIvES study has recruited 1,200 ovarian cancer survivors 
              nationally to participate in a lifestyle intervention supported 
              by the Gynecologic Oncology Group and the National Cancer Institute. 
              The main study objective is to determine if the lifestyle 
              intervention group experiences improved quality of life and survival 
              in comparison to the usual care group. Additional objectives of this 
              study involve assessment of nutrients in your blood.

</p>
          </div>

          <div className="sample">
            <img src={icon} alt="Nirav Merchant"/>
            <h2>WISH</h2>
            <p>The WISH study is currently recruiting cancer survivors who are women
               and currently smoke (traditional combustible) cigarettes and who have
               radiation therapy in their treatment plan. The study includes personal
                coaching over the telephone to help participants quit smoking as well
                 as support a healthier lifestyle (diet, exercise, stress management).
                  The WISH study will help researchers to understand the impact of 
                  quitting smoking on radiation treatment outcomes.

</p>
          </div>
        </div>
      </div>
    );
  }
}
