import { useState } from "react";
import "./Hero.css";
import aiImage from "./../../../../public/ai.png";
import people from "./../../../../public/people.png"

function Hero() {
  const [content, setContent] = useState("");

  return (
    <section className="hero-section" id="hero">
      <div className="container grid-columns">
        <div className="hero__content">
          <h1 className=" | text-gradient fs-800 fw-extrabold">
            Let’s Build Something amazing with GPT-3 OpenAI
          </h1>
          <p className=" | clr-text-100 fs-500 fw-regular">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <form className="hero__form" action="">
            <input
              className="hero__form--input | bg-600 clr-heading-100 fs-500 fw-regular"
              type="text"
              value={content}
              placeholder="Your Email Address"
              onChange={(e) => setContent(e.target.value)}
            />
            <button className="button-orange hero__form--button | fs-500 fw-medium" type="submit">
              Get Started
            </button>
          </form>
          <div className="hero__content--feeds">
            <img className="hero__content--feeds--image" src={people} alt="dsad" />
            <p className="hero__content--feeds-text fs-100 fw-regular">1,600 people requested access a visit in last 24 hours</p>
          </div>
        </div>

        <div className="hero__image">
          <img className="hero__image--image" src={aiImage} alt="AI Face" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
