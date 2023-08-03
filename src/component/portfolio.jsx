import React from "react";
import "./portfolio.css";
import purpleCircle from "../assets/purple-cir.png";
import emoji from "../assets/emoji_email.png";
import portImage01 from "../assets/port1.png";
import blueCircle from "../assets/blue-cir.png";
import portImage02 from "../assets/port2.png";
import greyCircle from "../assets/grey-cir.png";
import portImage03 from "../assets/port3.png";
import logoport03 from "../assets/logoport3.png";

function PortfolioCard({
  circleBgSrc,
  emojiSrc,
  titleText,
  subTitle,
  portImgSrc,
  logoPort,
}) {
  return (
    <div className="port-card">
      <div className="circle-bg">
        <img src={circleBgSrc} alt="circle-bg" />
      </div>
      {/* ---ส่วนที่ต่าง--- */}
      {emojiSrc ? (
        <>
          <div className="emoji">
            <img src={emojiSrc} alt="email-emoji" />
          </div>
          <p className="header-text-1">{titleText}</p>
        </>
      ) : logoPort ? (
        // แสดง logoPort ถ้ามีการระบุ
        <div className="text-in-port-container">{logoPort}</div>
      ) : (
        // ถ้าไม่ระบุ emojiSrc และไม่ระบุ logoPort
        <div className="text-in-port-container">
          <p className="header-text-2">{titleText}</p>
          <p className="little-text-2">{subTitle}</p>
        </div>
      )}
      {/* ---ส่วนที่ต่าง--- */}
      <div className="port-img">
        <img src={portImgSrc} alt="portfolio-image" />
      </div>
    </div>
  );
}

function Portfolio() {
  return (
    <section className="portfolio-container">
      <h1 className="portfolio-title">My Portfolio</h1>
      <div className="port-card-container">
        <PortfolioCard
          circleBgSrc={purpleCircle}
          emojiSrc={emoji}
          titleText="Sendpay"
          portImgSrc={portImage01}
        />
        {/* ขาดlittle text */}
        <PortfolioCard
          circleBgSrc={blueCircle}
          titleText="E- Commerce"
          subTitle="Website"
          portImgSrc={portImage02}
        />
        <PortfolioCard
          circleBgSrc={greyCircle}
          logoPort={<img src={logoport03} alt="logo-port-3" />}
          portImgSrc={portImage03}
        />
      </div>
    </section>
  );
}

export default Portfolio;
