import "./Blogs.css";
import blogImages from "../../../assets/blogImages";

function FooterCta() {
  const blogsInfo = [
    {
      date: "Sep 26, 2021",
      heading: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    },
    {
      date: "Sep 26, 2021",
      heading: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    },
    {
      date: "Sep 26, 2021",
      heading: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    },
    {
      date: "Sep 26, 2021",
      heading: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    },
    {
      date: "Sep 26, 2021",
      heading: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    },
  ];
  return (
    <section className="blogs-section" id="blogs">
      <div className="container">
        <h2 className="blogs__heading text-gradient fs-800 fw-extrabold">
          A lot is happening,
          <br /> We are blogging about it.
        </h2>
        <div className="blogs__blogs grid-columns ">
          {blogsInfo.map((info, index) => {
            return (
              <article
                key={index}
                className={
                  "blogs__blogs--blog" + (index === 0 ? " row-span" : "")
                }
              >
                <img
                  className="blogs__blogs--blog-image"
                  src={blogImages[index].imageUrl}
                  alt={blogImages[index].imageAlt}
                />
                <div className="blogs__blogs--blog-content | bg-700">
                  <div>
                    <p className="blogs__blogs--blog-date | fs-50 fw-medium">
                      {info.date}
                    </p>
                    <h3
                      className={
                        "blogs__blogs--blog-heading | fw-bold" +
                        (index === 0 ? " fs-600" : " fs-500")
                      }
                      style={{
                        lineHeight: index === 1 ? 1.2 : 1.56
                      }
                      }
                    >
                      {info.heading}
                    </h3>
                  </div>
                  <a
                    href="#"
                    className="blogs__blogs--blog-a | fs-50 fw-medium"
                  >
                    Read Full Article
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FooterCta;
