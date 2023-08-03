import React from "react";
import "./skill.css";
import frontEndPic from "../assets/FrontendDev.png";
import backEndPic from "../assets/Backenddev.png";
import uxUiPic from "../assets/uiuxdesign.png";

const skillData = [
  {
    img: frontEndPic,
    title: "Front-End Developer",
    description: "(CSS, React, Javascript)",
  },
  {
    img: backEndPic,
    title: "Back-End Developer",
    description: "(NodeJS, MongoDB, Postgre SQL)",
  },
  {
    img: uxUiPic,
    title: "Others",
    description: "(PHP, Visual basic, C#)",
  },
];

function SkillList({ img, title, description }) {
  return (
    <div className="skill-card">
      <div className="skill-img">
        <img src={img} alt={title} />
      </div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}

function Skill() {
  return (
    <section className="skill-container">
      <h1 className="skill-title">Skills</h1>
      <div className="skill-card-container">
        {skillData.map((item, index) => (
          <SkillList
            key={index}
            img={item.img}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Skill;
