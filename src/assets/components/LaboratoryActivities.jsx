import React from "react";
import "./Css/LaboratoryActivities.css";

const labData = [
  {
    title: "INTRODUCTION",
    description:
      "Creating a hoverable card using HTML and CSS to enhance user interaction.",
    image: "1.png",
    demoLink: "http://localhost:5173/",
  },
  {
    title: "Input HTML Elements as You Can",
    description:
      "Showcasing various input HTML elements and form controls.",
    image: "2.png",
    demoLink:
      "http://127.0.0.1:5500/src/assets/components/LabActivities/act2.html",
  },
  {
    title: "Hoverable Profile Card",
    description:
      "Changing text content dynamically when a user hovers over an element.",
    image: "3.png",
    demoLink:
      "http://127.0.0.1:5500/src/assets/components/LabActivities/act3.html",
  },
  {
    title: "Darkmode Implementation",
    description:
      "Implementing a dark mode feature using CSS and JavaScript.",
    image: "4.png",
    demoLink:
      "http://127.0.0.1:5500/src/assets/components/LabActivities/act4.html",
  },
  {
    title: "Darkmode with changing text content",
    description:
      "Using JavaScript to toggle dark mode and change text content on button click.",
    image: "5.png",
    demoLink:
      "http://127.0.0.1:5500/src/assets/components/LabActivities/act5.html",
  },
];

const LaboratoryActivities = () => {
  return (
    <section id="laboratory-activities" className="lab-section">
      <div className="lab-container">
        <h2 className="lab-title">Laboratory Activities (1-5)</h2>
        <div className="lab-list">
          {labData.map((lab, index) => (
            <div key={index} className="lab-card">
              <img src={lab.image} alt={lab.title} className="lab-image" />
              <div className="lab-content">
                <h3 className="lab-heading">{lab.title}</h3>
                <p className="lab-description">{lab.description}</p>
                <a
                  href={lab.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lab-link"
                >
                  View Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LaboratoryActivities;
