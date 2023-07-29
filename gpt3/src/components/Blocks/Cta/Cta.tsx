import "./Cta.css"

function Cta() {
  return (
    <section className="simple-cta-section" id="cta">
      <div className="container gradient flex-columns">
        <div className="cta__heading">
          <a className="cta__heading--a designed-button | fw-medium clr-text-900 fs-100" href="#">Request Early Access to Get Started</a>
          <h2 className="cta__heading--heading | clr-heading-900 fw-extrabold fs-600">Register today & start exploring the endless possiblities.</h2>
        </div>
        <div className="cta__button designed-button | fs-400 fw-medium">Get Started</div>
      </div>
    </section>
  )
}

export default Cta