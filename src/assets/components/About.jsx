import React from "react";
import "./Css/About.css";
import myImage from "../profile.png";

const About = () => {
  return (
    <section id="about" className="about-section py-5">
      <div className="container">
        <h2 className="text-center mb-5">About Me</h2>
        <div className="row align-items-center">
          <div className="col-lg-5 mb-4 mb-lg-0 text-center">
            <div className="about-image-frame">
              <img
                src={myImage}
                className="about-profile-image"
                alt="Arnieque Amaba"
              />
            </div>
          </div>
          <div className="col-lg-7">
            <p>
              Adaptable and solution-oriented developer with a strong interest in
              backend engineering, practical system design, and continuous
              technical growth.
            </p>
            <ul className="about-info mt-4 px-md-0 px-2">
              <li className="d-flex">
                <span>Name:</span> <span>Arnieque Amaba</span>
              </li>
              <li className="d-flex">
                <span>Date of birth:</span> <span>July 30, 2004</span>
              </li>
              <li className="d-flex">
                <span>Address:</span> <span>Philippines</span>
              </li>
              <li className="d-flex">
                <span>Zip code:</span> <span>8002</span>
              </li>
              <li className="d-flex">
                <span>Email:</span> <span>kikoy12345amaba@gmail.com</span>
              </li>
              <li className="d-flex">
                <span>Phone:</span> <span>+63 9916694076</span>
              </li>
            </ul>
            <div className="counter-wrap d-flex mt-4">
              <div className="text">
                <p className="mb-2 fs-3">10+</p>
                <span>Projects Completed</span>
                <p className="mt-3">
                  <a
                    href="/ArniePortFolioResume.docx"
                    className="btn btn-primary"
                    download
                  >
                    Download My Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
