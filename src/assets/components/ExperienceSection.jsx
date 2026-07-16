import React from "react";
import "./Css/ExperienceSection.css";

const experienceData = [
  {
    title: "Full Stack Laravel Developer",
    company: "DocuTrust",
    project: "Document e-Signature Platform",
    description:
      "A document e-signature and notarization platform built on Laravel 12 + Livewire, with PDF sealing, certificate generation, Redis queues, two-factor authentication, and optional Polygon hash anchoring for tamper-proof verification.",
    date: "May 2026 - Present",
    responsibilities: [
      "Built full-stack e-signature and notarization workflows on Laravel 12 with Livewire, including PDF stamping, sealing, and certificate generation.",
      "Built a custom drag-and-drop signature field builder for signature, initial, date, and text placement on documents.",
      "Modeled domain data with Eloquent and secured flows with Fortify auth, JWT, and Google 2FA.",
      "Designed Redis-backed Laravel queue lanes (documents, notifications, e-invoices) for long-running PDF and notification jobs.",
      "Implemented idempotent Laravel API endpoints with idempotency keys so document and e-invoice operations are safe to retry.",
      "Set up GitHub Actions CI/CD with zero-downtime deploys to DigitalOcean (Nginx, PHP-FPM, systemd workers).",
      "Integrated optional Polygon hash anchoring via a Node.js (ethers.js) sidecar for tamper-evident verification.",
    ],
  },
  {
    title: "Full Stack Laravel Developer",
    company: "GatewayHub",
    project: "Payment Operations Platform",
    description:
      "A Laravel payment operations platform for managing gateways, API credentials, transaction monitoring, payment creation, exports, and developer documentation from a single dashboard.",
    date: "Feb 2026 - Present",
    responsibilities: [
      "Developed the Livewire payment ops dashboard and integrated Coins.ph APIs, payment webhooks, and dynamic QR code generation.",
      "Implemented idempotent payment APIs and webhook handling with idempotency keys to prevent duplicate transactions on retries.",
      "Integrated merchant APIs and exposed merchant-facing Laravel REST endpoints for platform users.",
      "Wrote API documentation so partners can integrate without hand-holding.",
      "Deployed and maintained VPS infrastructure on DigitalOcean and resolved production payment issues end-to-end.",
    ],
  },
  {
    title: "Full Stack Laravel Developer",
    company: "Suretrack",
    project: "Logistics & Delivery Dashboard",
    description:
      "A Laravel 12 + Livewire logistics dashboard for order tracking, Ninja Van operations, COD monitoring, reports, product specifications, and webhook-based delivery updates.",
    date: "January 2026 - March 2026",
    responsibilities: [
      "Built full-stack order management, delivery tracking, and notification features with Laravel 12, Livewire, and Tailwind CSS.",
      "Integrated Ninja Van APIs and Laravel webhook handlers for real-time logistics updates; made handlers idempotent for safe retries.",
      "Added Google OAuth (Socialite/Fortify) for authentication.",
      "Deployed the web application on Hostinger and managed the domain.",
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
            Production Full Stack Laravel work across payments, logistics, and
            document workflows — from Eloquent models and webhooks to Livewire
            UIs and cloud deploys.
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
