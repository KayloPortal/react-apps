import "./Benefits.css";

interface benefit {
  heading: string;
  pargaraph: string;
}

function Benefits() {
  const benefitsInfo: benefit[] = [
    {
      heading: "Improving end distrusts instantly",
      pargaraph:
        "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
    },
    {
      heading: "Become the tended active",
      pargaraph:
        "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
    },
    {
      heading: "Message or am nothing",
      pargaraph:
        "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
    },
    {
      heading: "Really boy law county",
      pargaraph:
        "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.",
    },
  ];

  return (
    <section className="benefits-section" style={{position: "relative"}} id="benefits">
        <div className="blur benefits-blur"></div>
      <div className="container grid-columns">
        <div className="benefits__content">
          <h2 className="benefits__content--h2 | fs-700 text-gradient fw-extrabold">
            The Future is Now and You Just Need To Realize It. Step into Future
            Today & Make it Happen.
          </h2>
          <a className="fs-300 clr-text-200 fw-regular" href="#">
            Request Early Access to Get Started
          </a>
        </div>
        <div className="benefits__benefits-grid grid-columns">
          {benefitsInfo.map((info, index) => (
            <article className="benefits__benefits-grid--benefit" key={index}>
              <div className="benefits__benefits-grid--benefit--header">
                <div className="gradient line-gradient"></div>
                <h3 className=" | fs-400 fw-bold">{info.heading}</h3>
              </div>
              <p className=" | clr-text-300 fs-200 fw-regular">
                {info.pargaraph}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
