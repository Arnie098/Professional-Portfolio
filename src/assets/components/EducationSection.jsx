import React from "react";
import "./Css/EducationData.css";

const educationData = [
  {
    level: "College",
    degree: "Bachelor of Science in Information Technology",
    institution: "Davao del Sur State College",
    date: "2022 - Present",
    details: [
      "3rd Year student specializing in backend systems and software engineering",
      "Capstone: NCIP Management System with Blockchain Technology",
      "Coursework in data structures, database systems, web development, and cloud computing",
    ],
  },
  {
    level: "Senior High School",
    degree: "Technical Vocational Livelihood Strand",
    institution: "Digos City National High School",
    date: "2019 - 2021",
    details: [
      "Graduated with honors",
      "Early exposure to programming and computer systems",
    ],
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <div className="education-header">
          <p className="education-eyebrow">Academic Background</p>
          <h2 className="education-title">Education</h2>
          <p className="education-intro">
            My academic path reflects a steady focus on information technology,
            practical software development, and disciplined learning.
          </p>
        </div>

        <div className="timeline">
          {educationData.map((edu, index) => (
            <article key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="education-card-top">
                  <span className="education-level">{edu.level}</span>
                  <span className="date">{edu.date}</span>
                </div>

                <h3 className="degree">{edu.degree}</h3>
                <p className="institution">{edu.institution}</p>

                <ul className="details">
                  {edu.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
