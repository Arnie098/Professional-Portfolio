import React from "react";
import "./Css/Project.css";
import flickIcon from "../images/Flick/FlickIcon.png";
import Bible1 from "../images/BibleDesktopApp/Image1.png";
import Bible2 from "../images/BibleDesktopApp/Image2.png";
import flickImg1 from "../images/Flick/1.jpg";
import flickImg3 from "../images/Flick/3.jpg";
import flickImg4 from "../images/Flick/4.jpg";
import flickImg7 from "../images/Flick/7.jpg";
import flickImg8 from "../images/Flick/8.jpg";
import flickImg9 from "../images/Flick/9.jpg";
import flickImg10 from "../images/Flick/10.jpg";
import flickImg11 from "../images/Flick/11.jpg";
import flickImg12 from "../images/Flick/12.jpg";
import flickImg13 from "../images/Flick/13.jpg";
import flickImg14 from "../images/Flick/14.jpg";
import gatewayhubLanding from "../../../Projects/gatewayhub-landingpage.png";
import gatewayhubLogin from "../../../Projects/gatewayhub-login.png";
import gatewayhubDashboard from "../../../Projects/gatewayhub-dashboard.png";
import gatewayhubApiKey from "../../../Projects/gatewayhub-api-key.png";
import gatewayhubApiDocs from "../../../Projects/gatewayhib-api-docs.png";
import gatewayhubPayments from "../../../Projects/gatewayhub-with multiple payment gateway.png";
import gatewayhubToggles from "../../../Projects/gatewayhub-payment-toggles.png";
import suretrackLanding from "../../../Projects/suretrack-landingpage.png";
import suretrackLogin from "../../../Projects/suretrack-login-page with google Oauth.png";
import suretrackDashboard from "../../../Projects/Suretrack-dashboard.png";
import suretrackDashboardTwo from "../../../Projects/suretrack-dashboard2.png";
import suretrackOrders from "../../../Projects/suretrack-orders.png";
import suretrackSpecs from "../../../Projects/suretrack-product-specs.png";
import suretrackReports from "../../../Projects/suretrack-reports.png";
import ncipLanding from "../../../Projects/ncip-langdingpage.png";
import ncipModules from "../../../Projects/ncip-modules.png";
import ncipCensusMasterlist from "../../../Projects/ncip-census-masterlist.png";
import ncipCensusConsolidation from "../../../Projects/ncip-census-consolidation.png";
import ncipDocs from "../../../Projects/ncip-docs.png";
import ncipIpmr from "../../../Projects/ncip-ipmr.png";
import ncipFpic from "../../../Projects/ncip-fpic.png";
import ncipAudit from "../../../Projects/ncip-audit.png";

const projects = [
  {
    title: "Flick-QRcodeAttendance",
    description: `A cross-platform QR-based attendance app built with React Native and SQLite for offline record storage,
    with a Dockerized FastAPI backend deployed on Azure for login sessions and email verification.`,
    stack: "React Native, SQLite, FastAPI, Docker, Azure",
    images: [
      flickIcon,
      flickImg1,
      flickImg3,
      flickImg4,
      flickImg7,
      flickImg8,
      flickImg9,
      flickImg10,
      flickImg11,
      flickImg12,
      flickImg13,
      flickImg14,
    ],
  },
  {
    title: "BibleExpose",
    description: `A fullscreen Bible reading and projection desktop app built with React, featuring Bisaya and KJV translations designed for simplicity and convenience.`,
    stack: "React, Desktop UI, Scripture Projection",
    images: [Bible1, Bible2],
  },
  {
    title: "GatewayHub",
    description:
      "A web-based payment operations platform for managing gateways, API credentials, transaction monitoring, payment creation, exports, and developer documentation from a single dashboard.",
    stack: "Laravel 12, Livewire/Flux, Fortify, Socialite, endroid/qr-code, Tailwind CSS, MySQL, Coins.ph API",
    images: [
      gatewayhubLanding,
      gatewayhubLogin,
      gatewayhubDashboard,
      gatewayhubApiKey,
      gatewayhubApiDocs,
      gatewayhubPayments,
      gatewayhubToggles,
    ],
    link: "https://gatewayhub.io",
  },
  {
    title: "Suretrack",
    description:
      "A delivery and logistics dashboard focused on order tracking, Ninja Van operations, COD monitoring, reports, product specifications, and webhook-based delivery updates.",
    stack: "Laravel 12, Livewire/Flux, Fortify, Socialite (Google OAuth), Tailwind CSS, MySQL, Ninja Van API",
    images: [
      suretrackLanding,
      suretrackLogin,
      suretrackDashboard,
      suretrackDashboardTwo,
      suretrackOrders,
      suretrackSpecs,
      suretrackReports,
    ],
    link: "https://suretrack.spcardealer.com",
  },
  {
    title: "NCIP — Hybrid Blockchain + ABAC System",
    description:
      "An internal records and case management platform powered by a hybrid blockchain for tamper-evident records, secured with an Attribute-Based Access Control (ABAC) framework for fine-grained, policy-driven permissions. Includes modules for IP census, document registry, IPMR tracking, FPIC workflows, audit logs, and administrative documentation.",
    stack: "Laravel 12, Inertia.js, React + TypeScript, Tailwind CSS, Solidity/Hardhat, ethers.js, Leaflet, MySQL",
    images: [
      ncipLanding,
      ncipModules,
      ncipCensusMasterlist,
      ncipCensusConsolidation,
      ncipDocs,
      ncipIpmr,
      ncipFpic,
      ncipAudit,
    ],
    status: "Internal System",
  },
  {
    title: "DocuTrust",
    description:
      "A document e-signature and notarization platform built on Laravel 12, anchoring completed document hashes to the Polygon blockchain for tamper-proof verification. Includes queue-based PDF sealing, certificate generation, two-factor authentication, and e-invoicing.",
    stack: "Laravel 12, Livewire, Solidity/Hardhat (Polygon), Node.js/ethers.js, Redis, MySQL, dompdf/FPDI",
    images: [],
    link: "https://sign.docutrust.tech",
  },
];

const Project = () => {
  return (
    <section id="projects" className="project-section py-5">
      <div className="container">
        <div className="project-header">
          <p className="project-eyebrow">What I've Built</p>
          <h2 className="project-title">Selected Projects</h2>
          <p className="project-intro">
            Production Laravel systems I&apos;ve designed and developed — payment
            platforms, logistics dashboards, e-signature workflows, and more.
          </p>
        </div>
        <div className="row">
          {[...projects].reverse().map((project, index) => (
            <div className="col-md-4 col-sm-6 mb-4" key={index}>
              <div className="card h-100 project-card">
                {project.images.length > 0 ? (
                <div
                  id={`carousel-${index}`}
                  className="carousel slide"
                >
                  <div className="carousel-inner">
                    {project.images.map((img, imgIndex) => (
                      <div
                        className={`carousel-item ${imgIndex === 0 ? "active" : ""}`}
                        key={imgIndex}
                      >
                        <a
                          href={img}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-image-link"
                        >
                          <img
                            src={img}
                            className="d-block w-100 project-image"
                            alt={`${project.title} screenshot ${imgIndex + 1}`}
                            loading="lazy"
                          />
                        </a>
                      </div>
                    ))}
                  </div>

                  {project.images.length > 1 && (
                    <>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target={`#carousel-${index}`}
                        data-bs-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target={`#carousel-${index}`}
                        data-bs-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </>
                  )}
                </div>
                ) : (
                  <div
                    className="project-image-placeholder d-flex align-items-center justify-content-center"
                    style={{
                      minHeight: "200px",
                      background: "var(--color-surface-soft)",
                      color: "var(--color-muted)",
                    }}
                  >
                    Screenshots coming soon
                  </div>
                )}
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <p className="project-stack">{project.stack}</p>
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn mt-auto custom-btn"
                    >
                      View Project
                    </a>
                  ) : (
                    <span className="project-status mt-auto">{project.status || "In Development"}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
