import myImage from "../profile.png";
import "./Css/Info.css";

export default function Info() {
  return (
    <section
      id="home"
      className="home-section d-flex align-items-center"
    >
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <h1 className="display-4 fw-bold">
              Hi, I'm <span className="highlight">Arnie</span>
            </h1>
            <h2 className="info-subtitle">
              Backend Developer &amp; Full Stack Engineer
            </h2>
            <hr className="info-divider" />
            <p className="info-summary fs-5">
              I build backend systems, payment integrations, and full-stack web
              applications. Focused on clean architecture, reliable APIs, and
              shipping products that work.
            </p>
            <div className="info-cta">
              <a href="#projects" className="btn btn-primary info-btn">View My Work</a>
              <a href="#contact" className="btn btn-outline info-btn-outline">Get In Touch</a>
            </div>
          </div>

          <div className="col-md-6 col-12 image-container">
            <div className="floating-image profile-frame">
              <img
                src={myImage}
                className="profile-image"
                alt="Arnieque Amaba"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
