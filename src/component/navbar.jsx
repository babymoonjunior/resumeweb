import React from "react";
import "./NavBar.css";

function Navlist({ href, text, className }) {
  return (
    <li className={className}>
      <a href={href} className={className}>
        {text}
      </a>
    </li>
  );
}

const navData = [
  { href: "#", text: "About", className: "nav-link" },
  { href: "#", text: "Skill", className: "nav-link" },
  { href: "#", text: "Portfolio", className: "nav-link" },
  { href: "#", text: "Contact Me", className: "nav-link-contact" },
];

function NavBar() {
  return (
    <nav className="navbar">
      <p className="myName">BabymoonJunior</p>

      <ul className="nav-link-container">
        {navData.map((item,index) => (
            <Navlist key={index} href={item.href} text={item.text} className={item.className} />
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
