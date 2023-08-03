import React from "react";
import "./footer.css";
import contactBG from "../assets/footer-img/contact-bg.png";
import github from "../assets/footer-img/github.png";
import instagram from "../assets/footer-img/instagram.png";
import email from "../assets/footer-img/email.png";
import call from "../assets/footer-img/call.png";
import footerBG from "../assets/footer-img/footer-bg.png";

const contactIcon = [
  { id: 1, icon: github, text: "Github" , link: "https://github.com/yourusername" },
  { id: 2, icon: instagram, text: "Instagram" , link: "https://www.instagram.com/yourusername" },
  { id: 3, icon: email, text: "Email", link: "mailto:youremail@example.com" },
  { id: 4, icon: call, text: "Call", link: "tel:+66949144997"  },
];

function ContactList({icon, text, id, link}) {
  return (
    <div className="combine-contact-icon" key={id}>
      
      <div className="contact-bg">
        <img src={contactBG} alt="contact-bg" />
      </div>
      <a href={link} className="contact-img">
        <img src={icon} alt={text} />
      </a>
      <p className="contact-text">{text}</p>
      
    </div>
  );
}

function Footer() {
  return (
    <section className="footer-container">
      <h1 className="footer-title">Contact Me</h1>
      <div className="contact-list-container">
      {contactIcon.map((item, index) => (
        <ContactList key={item.id} icon={item.icon} text={item.text} link={item.link} /> 
      ))}
      </div>
      <div className="designBy">
        <p className="designBy-title">Design By BabymoonJunior</p>
        <img src={footerBG} alt="footer-bg" className="footerBG" />
      </div>
    </section>
  );
}

export default Footer;
