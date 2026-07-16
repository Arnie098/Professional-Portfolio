import React from "react";
import "./Css/About.css";
import myImage from "../profile.png";

const About = () => {
  return (
    <section id="about" className="about-section py-5">
      <div className="container">
        <div className="about-header-centered">
          <p className="about-eyebrow">Who I Am</p>
          <h2 className="about-title">About Me</h2>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-5 mb-4 mb-lg-0 text-center">
            <div className="about-image-frame">
              <img
                src={myImage}
                className="about-profile-image"
                alt="Arnieque Amaba"
                loading="lazy"
              />
            </div>
          </div>
          <div className="col-lg-7">
            <p className="about-bio">
              I&apos;m a Full Stack Laravel Developer who ships production systems —
              payment platforms handling real transactions, logistics dashboards with
              live tracking, and document e-signature workflows. I care about clean
              architecture, well-documented APIs, and code other developers can maintain.
            </p>
            <p className="about-bio">
              My approach is practical: understand the problem, build the solution in
              Laravel (Livewire, Eloquent, queues), deploy it reliably, and iterate.
              I own features end-to-end — from MySQL models and REST/webhooks to
              Tailwind UIs and DigitalOcean deploys.
            </p>
            <ul className="about-info mt-4 px-md-0 px-2">
              <li className="d-flex">
                <span>Location:</span> <span>Digos City, Philippines</span>
              </li>
              <li className="d-flex">
                <span>Email:</span> <span>kikoy12345amaba@gmail.com</span>
              </li>
              <li className="d-flex">
                <span>Focus:</span> <span>Full Stack Laravel (PHP · Livewire · MySQL)</span>
              </li>
              <li className="d-flex">
                <span>Available:</span> <span>Open to full-time Laravel roles</span>
              </li>
            </ul>
            <div className="about-actions mt-4">
              <a
                href="/ArniePortFolioResume.docx"
                className="btn btn-primary"
                download
              >
                Download Resume
              </a>
              <a href="#contact" className="btn btn-outline-about">
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
