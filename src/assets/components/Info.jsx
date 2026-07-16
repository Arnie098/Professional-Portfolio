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
              Full Stack Laravel Developer
            </h2>
            <hr className="info-divider" />
            <p className="info-summary fs-5">
              I build production Laravel apps end-to-end — Livewire dashboards,
              REST and webhook APIs, payment and logistics integrations, and
              cloud deploys. Clean architecture, reliable code, products that ship.
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
