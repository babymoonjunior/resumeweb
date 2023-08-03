import React from "react";
import "./profile.css";
import profilePicture from "../assets/mypic.jpg"

function Profile() {
  return (
    <section className="profile-container">
      <div className="introduce-container">
        <div className="greeting">
          <h1>Hi !</h1>
          <h3>I'm Preeyanuch Yuwapoom. A Front-End Developer</h3>
        </div>
        <div className="introduce-myself">
          Front-End developer based in Chonburi, Thailand I'am coding with a
          clean and beautiful problem solving in mind.
        </div>
      </div>
      <div className="profile-img">
        <img src={profilePicture} alt="ProfilePicture" />
      </div>
    </section>
  );
}

export default Profile;
