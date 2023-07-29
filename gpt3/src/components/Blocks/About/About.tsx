import Companies from "./Companies/Companies";
import "./About.css";

interface benefit {
  heading: string;
  paragraph: string;
}

function About() {
  const benefitsInfo: benefit[] = [
    {
      heading: "Chatbots",
      paragraph:
        "We so opinion friends me message as delight. Whole front do of plate heard oh ought.",
    },
    {
      heading: "Knowledgebase",
      paragraph:
        "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b",
    },
    {
      heading: "Education",
      paragraph:
        "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b",
    },
  ];

  return (
    <section className="about-section" id="about">
      <div className="about__companies">
        <Companies />
      </div>
      <div className="container" style={{position: "relative"}}>
        <div className="about__content | bg-700" style={{position: "relative"}}>
        <div className="blur about-blur-top"></div>
        <div className="blur about-blur-bottom"></div>
          <div className="about__content--intro flex-columns">
            <div className="about__content--intro--header">
              <div className="gradient line-gradient"></div>
              <h3 className="fs-600 fw-bold">What is GPT-3</h3>
            </div>
            <p className="fs-300 clr-text-300 fw-medium">
              We so opinion friends me message as delight. Whole front do of
              plate heard oh ought. His defective nor convinced residence own.
              Connection has put impossible own apartments boisterous. At
              jointure ladyship an insisted so humanity he. Friendly bachelor
              entrance to on by.
            </p>
          </div>
          <div className="about__content--main flex-columns">
            <div className="about__content--main--header flex-columns">
              <h2 className="about__content--main--header--h2 | fs-700 text-gradient fw-extrabold">
                The possibilities are beyond your imagination
              </h2>
              <a href="#" className="fs-300 clr-text-200 fw-regular">
                Explore The Library
              </a>
            </div>
            <div className="about__content--main--benefits | grid-columns">
              {benefitsInfo.map((info, index) => (
                <article
                  className="about__content--main--benefits--benefit"
                  key={index}
                >
                  <div className="gradient line-gradient"></div>
                  <h3 className="fs-600 fw-bold">{info.heading}</h3>
                  <p className="fs-300 clr-text-300 fw-regular">
                    {info.paragraph}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
