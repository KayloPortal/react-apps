import possibilityImage from "./../../../../public/possibility.png";
import "./Leading.css";

function Leading() {
  return (
    <section className="leading-section" id="leading">
      <div className="container grid-columns">
        <div className="leading__image">
          <img
            className="leading__image--image"
            src={possibilityImage}
            alt="Possibilty"
          />
        </div>
        <div className="leading__content">
          <a
            className="leading__content--a | clr-text-400 fs-300 fw-regular"
            href="#"
          >
            Request Early Access to Get Started
          </a>
          <h2 className="leading__content--heading | fs-700 text-gradient fw-extrabold">
            The possibilities are beyond your imagination
          </h2>
          <p className="leading__content--p | clr-text-300 fs-300 fw-regular">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <a
            className="leading__content--a | clr-text-200 fs-300 fw-regular"
            href="#"
          >
            Request Early Access to Get Started
          </a>
        </div>
      </div>
    </section>
  );
}

export default Leading;
