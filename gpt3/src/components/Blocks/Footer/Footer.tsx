import "./Footer.css";
import logoImage from "./../../../../public/logo.svg";

function Footer() {
  const footerLinks = [
    {
      heading: "Links",
      links: [
        "Overons",
        "Social Media",
        "Counters",
        "Contact"
      ]
    },
    {
      heading: "Company",
      links: [
        "Terms & Conditions",
        "Privacy Policy",
        "Contact"
      ]
    },
    {
      heading: "Get in touch",
      links: [
        "Crechterwoord K12 182 DK Alknjkcb",
        "Social Media",
        "085-132567",
        "info@payme.net"
      ]
    }
  ]
  return (
    <section className="footer-section bg-800" id="footer">
      <div className="container">
        <div className="footer__container">
          <div className="footer__logo">
            <a href="#">
              <img className="footer__logo--logo fs-200" src={logoImage} alt="top" />
              <p className="fw-regular fs-100">
                Crechterwoord K12 182 DK
                <br /> Alknjkcb, All Rights Reserved
              </p>
            </a>
          </div>
          <nav className="footer__navigation">
            <ul className="footer__navigation--links-grid" role="list">
              {footerLinks.map((link, index) => {
                return (
              <li key={index}>
                <h3 className="footer__navigation--links-heading | fs-200">{link.heading}</h3>
                <div className="footer__navigation--links-list">
                  {link.links.map((info, index) => <a className="fs-200" key={index}><p>{info}</p></a>)}
                  </div>
              </li>
                )
              })}
            </ul>
          </nav>
        <p className="footer__credit | fs-100">© 2021 GPT-3. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
