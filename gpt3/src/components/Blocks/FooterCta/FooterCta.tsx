import "./FooterCta.css"

function Blogs() {
  return (
    <>
      <section className="footer-cta-section | bg-800" id="footer-cta">
        <div className="container">
          <div className="footer-cta__content">
            <p
              className="footer-cta__content--heading | text-gradient fw-extrabold fs-800"
              style={{ lineHeight: 1.20968 }}
            >
              Do you want to step in to the future before others
            </p>
            <a className="footer-cta__content--a designed-button | fw-regular fs-400" href="#">
              Request Early Access
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blogs;
