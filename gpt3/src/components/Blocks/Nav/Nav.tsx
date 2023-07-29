import { useState } from "react";
import gptLogo from "../../../../public/logo.svg";
import "./Nav.css";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const linksAnchors = [
    { tag: "Home", target: "#hero" },
    { tag: "What is GPT-3", target: "#about" },
    { tag: "Open AI", target: "" },
    { tag: "Case Studies", target: "" },
    { tag: "Library", target: "" },
  ];

  const LinkElements = linksAnchors.map((info, index) => (
    <li key={index}>
      <a href={info.target}>
        <p className="header__navigation--link fs-400 fw-regular">{info.tag}</p>
      </a>
    </li>
  ));

  const buttons = (
    <>
      <a className="header__button button-transparent designed-button | clr-heading-100 fs-400 fw-regular">
        Sign in
      </a>
      <a className="header__button button-orange designed-button | clr-heading-100 bg-text-clr-500 fs-400 fw-regular">
        Sign up
      </a>
    </>
  );

  return (
    <header className="header-section" id="nav">
      <div className="container">
        <div className="header__logo">
          <img src={gptLogo} alt="GPT3" className="header__logo--image" />
        </div>
        <nav className="header__navigation">
          <ul role="list">{LinkElements}</ul>
        </nav>
        <div className="header__buttons">{buttons}</div>
        {isOpen && (
          <nav className="header__navigation-sm | bg-800 scale-in-center">
            <ul role="list">{LinkElements}</ul>
            <div className="header__buttons-sm">{buttons}</div>
          </nav>
        )}
        <button
          className={"header__toggle" + (isOpen? " toggle-close" : " toggle-open")}
          onClick={() => setIsOpen((prev) => !prev)}
        ></button>
      </div>
    </header>
  );
}

export default Nav;
