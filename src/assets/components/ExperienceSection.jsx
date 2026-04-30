import React from "react";
import "./Css/ExperienceSection.css";

const experienceData = [
  {
    title: "Backend Developer",
    company: "COIL Event",
    project: "TravelTour",
    date: "August 2023 - September 2023",
    responsibilities: [
      "Collaborated internationally through the Collaborative Online International Learning (COIL) program using GitHub for coordination and code sharing.",
      "Implemented AI chatbot features using FastAPI and integrated them with the OpenAI API.",
      "Designed database schemas and managed application data using MySQL.",
      "Built REST APIs following clean architecture principles.",
    ],
  },
  {
    title: "Backend Developer",
    company: "ASEAN Hackathon",
    project: "CAREPATH AI",
    date: "April 2026 - Present",
    responsibilities: [
      "Integrated the Deepseek API for health assessment workflows and AI chatbot features.",
      "Implemented smart scheduling logic to improve appointment management and resource allocation.",
      "Designed responsive web application interfaces using React and Tailwind CSS.",
      "Supported quality assurance and code reviews to maintain coding standards.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Suretrack Company",
    project: "Suretrack",
    date: "January 2026 - March 2026",
    responsibilities: [
      "Implemented Ninja Van API integration and webhook handling for real-time logistics tracking and delivery updates.",
      "Developed frontend and backend features for order management, delivery tracking, and notifications.",
      "Deployed the web application on Hostinger and managed the domain.",
      "Supported quality assurance and code reviews to maintain coding standards.",
    ],
  },
  {
    title: "Backend Developer",
    company: "Gatewayhub Company",
    project: "GatewayHub",
    date: "March 2026 - Present",
    responsibilities: [
      "Implemented the Coins.ph API, payment webhooks, and dynamic QR code generation for secure payment processing.",
      "Integrated merchant APIs for seamless payment processing and transaction management.",
      "Wrote documentation for API endpoints and integration processes to support clear stakeholder communication.",
      "Exposed merchant-facing API endpoints for platform users.",
      "Performed code debugging and analysis to improve performance and reliability.",
      "Deployed VPS infrastructure on DigitalOcean and managed the domain.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <div className="experience-header">
          <p className="experience-eyebrow">Professional Work</p>
          <h2 className="experience-title">Experience</h2>
          <p className="experience-intro">
            Practical experience across backend systems, full stack product
            development, AI-assisted workflows, logistics integrations, and
            payment platforms.
          </p>
        </div>

        <div className="experience-list">
          {experienceData.map((exp, index) => (
            <article key={index} className="experience-item">
              <div className="experience-marker"></div>
              <div className="experience-card">
                <div className="experience-card-top">
                  <div>
                    <span className="experience-role">{exp.title}</span>
                    <h3 className="job-title">{exp.company}</h3>
                  </div>
                  <span className="date">{exp.date}</span>
                </div>

                <p className="project-label">Project: {exp.project}</p>

                <ul className="responsibilities">
                  {exp.responsibilities.map((task, i) => (
                    <li key={i}>{task}</li>
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

export default ExperienceSection;
