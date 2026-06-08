import React from "react";
import "./Css/ExperienceSection.css";

const experienceData = [
  {
    title: "Backend Developer",
    company: "DocuTrust",
    project: "Document e-Signature Platform",
    description:
      "A document e-signature and notarization platform built on Laravel 12, anchoring completed document hashes to the Polygon blockchain for tamper-proof verification. Includes queue-based PDF sealing, certificate generation, two-factor authentication, and e-invoicing.",
    date: "May 2026 - Present",
    responsibilities: [
      "Built document e-signature and notarization workflows on Laravel 12 with Livewire, including PDF stamping, sealing, and certificate generation.",
      "Built a custom drag-and-drop signature field builder, letting users place signature, initial, date, and text fields onto documents for e-signing.",
      "Integrated Polygon blockchain anchoring through a Node.js (ethers.js) sidecar and a Hardhat-deployed DocumentNotary smart contract for tamper-proof document verification.",
      "Designed Redis-backed queue lanes (documents, notifications, e-invoices) to reliably process long-running PDF and notification jobs.",
      "Implemented two-factor authentication (Google2FA), JWT, and e-invoicing integrations.",
      "Implemented idempotent API endpoints with idempotency keys so document and e-invoice operations are safe to retry without duplication.",
      "Set up CI/CD with GitHub Actions and zero-downtime release deployment to a DigitalOcean droplet (Nginx, PHP-FPM, systemd workers).",
    ],
  },
  {
    title: "Backend Developer",
    company: "Gatewayhub Company",
    project: "GatewayHub",
    description:
      "A web-based payment operations platform for managing gateways, API credentials, transaction monitoring, payment creation, exports, and developer documentation from a single dashboard.",
    date: "Feb 2026 - Present",
    responsibilities: [
      "Implemented the Coins.ph API, payment webhooks, and dynamic QR code generation for secure payment processing.",
      "Implemented idempotent payment APIs and webhook handling using idempotency keys to prevent duplicate transactions on retries.",
      "Integrated merchant APIs for seamless payment processing and transaction management.",
      "Wrote documentation for API endpoints and integration processes to support clear stakeholder communication.",
      "Exposed merchant-facing API endpoints for platform users.",
      "Performed code debugging and analysis to improve performance and reliability.",
      "Deployed VPS infrastructure on DigitalOcean and managed the domain.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Suretrack Company",
    project: "Suretrack",
    description:
      "A delivery and logistics dashboard focused on order tracking, Ninja Van operations, COD monitoring, reports, product specifications, and webhook-based delivery updates.",
    date: "January 2026 - March 2026",
    responsibilities: [
      "Implemented Ninja Van API integration and webhook handling for real-time logistics tracking and delivery updates.",
      "Implemented idempotent API endpoints and webhook handlers so retried delivery and order updates are processed exactly once.",
      "Developed frontend and backend features for order management, delivery tracking, and notifications.",
      "Deployed the web application on Hostinger and managed the domain.",
      "Supported quality assurance and code reviews to maintain coding standards.",
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
                <p className="project-description">{exp.description}</p>

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
