import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  AlignmentType,
  BorderStyle,
  LevelFormat,
  ExternalHyperlink,
  TabStopType,
} from "docx";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const outPath = path.join(root, "public", "ArniePortFolioResume.docx");
const backupPath = path.join(root, "public", "ArniePortFolioResume.backup.docx");

// US Letter, 0.5" margins
const PAGE_W = 12240;
const PAGE_H = 15840;
const MARGIN = 720;
const CONTENT_W = PAGE_W - MARGIN * 2;

const navy = "1B3A4B";
const ink = "1A1A1A";
const muted = "444444";
const rule = "2E5A72";

const thinBorder = { style: BorderStyle.SINGLE, size: 12, color: rule, space: 1 };
const noBorder = { style: BorderStyle.NONE, size: 0, color: "FFFFFF", space: 0 };

function sectionTitle(text) {
  return new Paragraph({
    spacing: { before: 160, after: 80 },
    border: { bottom: thinBorder, top: noBorder, left: noBorder, right: noBorder },
    children: [
      new TextRun({
        text: text.toUpperCase(),
        bold: true,
        size: 20,
        font: "Arial",
        color: navy,
      }),
    ],
  });
}

function bullet(text, ref = "bullets") {
  return new Paragraph({
    numbering: { reference: ref, level: 0 },
    spacing: { before: 20, after: 20 },
    children: [new TextRun({ text, size: 19, font: "Arial", color: ink })],
  });
}

function body(text, opts = {}) {
  return new Paragraph({
    spacing: { before: opts.before ?? 0, after: opts.after ?? 40 },
    alignment: opts.align ?? AlignmentType.LEFT,
    children: [
      new TextRun({
        text,
        size: opts.size ?? 19,
        font: "Arial",
        color: opts.color ?? ink,
        bold: opts.bold ?? false,
        italics: opts.italics ?? false,
      }),
    ],
  });
}

function roleHeader(title, dates) {
  return new Paragraph({
    spacing: { before: 120, after: 20 },
    tabStops: [{ type: TabStopType.RIGHT, position: CONTENT_W }],
    children: [
      new TextRun({ text: title, bold: true, size: 20, font: "Arial", color: ink }),
      new TextRun({ text: "\t", size: 19, font: "Arial" }),
      new TextRun({ text: dates, size: 18, font: "Arial", color: muted }),
    ],
  });
}

function companyLine(company, location) {
  return new Paragraph({
    spacing: { before: 0, after: 40 },
    children: [
      new TextRun({ text: company, italics: true, size: 19, font: "Arial", color: muted }),
      new TextRun({ text: `  |  ${location}`, size: 18, font: "Arial", color: muted }),
    ],
  });
}

function skillLine(label, value) {
  return new Paragraph({
    spacing: { before: 20, after: 20 },
    children: [
      new TextRun({ text: `${label}: `, bold: true, size: 19, font: "Arial", color: ink }),
      new TextRun({ text: value, size: 19, font: "Arial", color: ink }),
    ],
  });
}

function linkLine(parts) {
  const children = [];
  parts.forEach((p, i) => {
    if (i > 0) {
      children.push(new TextRun({ text: "  |  ", size: 17, font: "Arial", color: muted }));
    }
    if (p.type === "link") {
      children.push(
        new ExternalHyperlink({
          children: [
            new TextRun({
              text: p.text,
              size: 17,
              font: "Arial",
              color: "0563C1",
              underline: {},
            }),
          ],
          link: p.url,
        })
      );
    } else {
      children.push(new TextRun({ text: p.text, size: 17, font: "Arial", color: muted }));
    }
  });
  return new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 0, after: 20 },
    children,
  });
}

const doc = new Document({
  styles: {
    default: {
      document: {
        run: { font: "Arial", size: 19, color: ink },
      },
    },
  },
  numbering: {
    config: [
      {
        reference: "bullets",
        levels: [
          {
            level: 0,
            format: LevelFormat.BULLET,
            text: "•",
            alignment: AlignmentType.LEFT,
            style: { paragraph: { indent: { left: 288, hanging: 180 } } },
          },
        ],
      },
      {
        reference: "project-bullets",
        levels: [
          {
            level: 0,
            format: LevelFormat.BULLET,
            text: "•",
            alignment: AlignmentType.LEFT,
            style: { paragraph: { indent: { left: 288, hanging: 180 } } },
          },
        ],
      },
    ],
  },
  sections: [
    {
      properties: {
        page: {
          size: { width: PAGE_W, height: PAGE_H },
          margin: { top: MARGIN, right: MARGIN, bottom: MARGIN, left: MARGIN },
        },
      },
      children: [
        // Name
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 40 },
          children: [
            new TextRun({
              text: "ARNIEQUE O. AMABA",
              bold: true,
              size: 32,
              font: "Arial",
              color: navy,
            }),
          ],
        }),
        // Target title
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 60 },
          children: [
            new TextRun({
              text: "Full Stack Laravel Developer",
              size: 21,
              font: "Arial",
              color: muted,
              bold: true,
            }),
          ],
        }),
        // Contact
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 20 },
          children: [
            new TextRun({
              text: "Digos City, Davao del Sur, Philippines  ·  +63 991 669 4076  ·  kikoy12345amaba@gmail.com",
              size: 16,
              font: "Arial",
              color: muted,
            }),
          ],
        }),
        linkLine([
          {
            type: "link",
            text: "Portfolio",
            url: "https://professional-portfolio-1-c4ev.onrender.com",
          },
          { type: "link", text: "GitHub", url: "https://github.com/Arnie098" },
          {
            type: "link",
            text: "LinkedIn",
            url: "https://linkedin.com/in/arnie-que-amaba-9383b2284",
          },
          { type: "link", text: "GatewayHub", url: "https://gatewayhub.io" },
          { type: "link", text: "DocuTrust", url: "https://sign.docutrust.tech" },
          { type: "link", text: "Suretrack", url: "https://suretrack.spcardealer.com" },
        ]),

        // Summary — Laravel first
        sectionTitle("Professional Summary"),
        body(
          "Full Stack Laravel Developer with production experience shipping multi-tenant web apps for payments, logistics, and document workflows. Builds end-to-end features in Laravel 12 (Livewire, Eloquent, queues, Fortify auth), MySQL, and Tailwind — from REST/webhook APIs to admin dashboards and cloud deploys. Strong in payment integrations, idempotent APIs, Redis jobs, and CI/CD on DigitalOcean. Seeking a full-time Full Stack Laravel Developer role.",
          { after: 40 }
        ),

        // Skills — Laravel/ATS keyword dense
        sectionTitle("Technical Skills"),
        skillLine(
          "Laravel Stack",
          "Laravel 12, PHP 8, Livewire/Flux, Eloquent ORM, Blade, Inertia.js, Fortify, Socialite, Queues, Events, Policies, Form Requests"
        ),
        skillLine(
          "Full Stack",
          "REST APIs, Webhooks, MySQL, Redis, Tailwind CSS, Bootstrap, Alpine.js, React, JavaScript/TypeScript, JWT, 2FA"
        ),
        skillLine(
          "Integrations",
          "Coins.ph payments, Ninja Van logistics, merchant APIs, QR payments, PDF generation (dompdf/FPDI), email/notifications"
        ),
        skillLine(
          "DevOps",
          "Git, GitHub Actions CI/CD, Docker, Nginx, PHP-FPM, systemd, DigitalOcean, Hostinger, Azure"
        ),
        skillLine(
          "Also",
          "Node.js, FastAPI, React Native, SQL Server, Swagger/OpenAPI, Solidity/Hardhat (Polygon)"
        ),

        // Experience — Full Stack Laravel framing
        sectionTitle("Professional Experience"),

        roleHeader("Full Stack Laravel Developer — DocuTrust", "May 2026 – Present"),
        companyLine("E-Signature & Notarization Platform  ·  Freelance / Remote", "Live: sign.docutrust.tech"),
        bullet(
          "Built full-stack e-signature and notarization product in Laravel 12 + Livewire: document upload, drag-and-drop signature fields, PDF stamping/sealing, and certificate generation."
        ),
        bullet(
          "Modeled domain data with Eloquent (documents, signers, certificates, e-invoices) and secured flows with Fortify auth, JWT, and Google 2FA."
        ),
        bullet(
          "Implemented Redis-backed Laravel queues for PDF processing, notifications, and e-invoicing so long-running jobs stay reliable under load."
        ),
        bullet(
          "Designed idempotent Laravel API endpoints with idempotency keys so document and invoice actions are safe to retry without duplicates."
        ),
        bullet(
          "Shipped GitHub Actions CI/CD with zero-downtime releases to DigitalOcean (Nginx, PHP-FPM, systemd queue workers)."
        ),
        bullet(
          "Added optional Polygon hash-anchoring via a Node.js sidecar for tamper-evident document verification after signing completes."
        ),

        roleHeader("Full Stack Laravel Developer — GatewayHub", "Feb 2026 – Present"),
        companyLine("Payment Operations Platform  ·  Freelance / Remote", "Live: gatewayhub.io"),
        bullet(
          "Developed Laravel payment ops dashboard: gateway management, API keys, transaction monitoring, exports, and developer docs in one place."
        ),
        bullet(
          "Integrated Coins.ph and merchant APIs with Livewire UI + REST endpoints, including dynamic QR payment generation for production use."
        ),
        bullet(
          "Implemented idempotent payment APIs and webhook controllers to prevent duplicate charges when payment gateways retry events."
        ),
        bullet(
          "Authored merchant-facing API documentation and exposed clean Laravel routes/resources so partners can integrate independently."
        ),
        bullet(
          "Deployed and maintained the app on DigitalOcean (domains, env config, Nginx) and resolved production payment/debug issues end-to-end."
        ),

        roleHeader("Full Stack Laravel Developer — Suretrack", "Jan 2026 – Mar 2026"),
        companyLine("Logistics & Delivery Dashboard  ·  Freelance / Remote", "Live: suretrack.spcardealer.com"),
        bullet(
          "Built Laravel 12 + Livewire logistics dashboard for orders, delivery tracking, COD monitoring, product specs, and operational reports."
        ),
        bullet(
          "Integrated Ninja Van APIs and Laravel webhook handlers for real-time delivery status; made handlers idempotent for safe retries."
        ),
        bullet(
          "Added Google OAuth (Socialite/Fortify) and full-stack notification flows; deployed the application on Hostinger with domain setup."
        ),

        // Projects
        sectionTitle("Selected Projects"),
        roleHeader("NCIP — Hybrid Blockchain + ABAC Management System", "Capstone · Laravel"),
        body(
          "Internal records and case platform (IP census, document registry, IPMR, FPIC, audit logs) with ABAC permissions and tamper-evident record hashes.",
          { after: 20, size: 18, color: muted }
        ),
        bullet(
          "Stack: Laravel 12, Inertia.js, React, TypeScript, Tailwind CSS, MySQL, Solidity/Hardhat, ethers.js, Leaflet",
          "project-bullets"
        ),

        roleHeader("Flick — QR Code Attendance", "Academic / Side project"),
        body(
          "Cross-platform QR attendance with offline mobile storage and a Dockerized FastAPI backend on Azure for auth and email verification.",
          { after: 20, size: 18, color: muted }
        ),
        bullet("Stack: React Native, SQLite, FastAPI, Docker, Azure", "project-bullets"),

        // Education
        sectionTitle("Education"),
        roleHeader("B.S. Information Technology", "2022 – Present"),
        companyLine("Davao del Sur State College", "Digos City, Philippines"),
        bullet(
          "Focus: web development, databases, and software engineering; building production Laravel apps alongside coursework."
        ),
        bullet(
          "Capstone: NCIP Hybrid Blockchain-Powered Management System (Laravel + ABAC security framework)."
        ),

        sectionTitle("Languages"),
        body("Filipino (Native)  ·  English (Professional working proficiency)", { after: 0 }),
      ],
    },
  ],
});

if (fs.existsSync(outPath)) {
  fs.copyFileSync(outPath, backupPath);
}

const buffer = await Packer.toBuffer(doc);
fs.writeFileSync(outPath, buffer);
fs.writeFileSync(path.join(root, "public", "ArniePortFolioResume.updated.docx"), buffer);

const ats = `ARNIEQUE O. AMABA
Full Stack Laravel Developer
Digos City, Davao del Sur, Philippines
+63 991 669 4076 | kikoy12345amaba@gmail.com
Portfolio: https://professional-portfolio-1-c4ev.onrender.com
GitHub: https://github.com/Arnie098
LinkedIn: https://linkedin.com/in/arnie-que-amaba-9383b2284
Live Laravel apps: https://gatewayhub.io | https://sign.docutrust.tech | https://suretrack.spcardealer.com

PROFESSIONAL SUMMARY
Full Stack Laravel Developer with production experience shipping multi-tenant web apps for payments, logistics, and document workflows. Builds end-to-end features in Laravel 12 (Livewire, Eloquent, queues, Fortify auth), MySQL, and Tailwind — from REST/webhook APIs to admin dashboards and cloud deploys. Strong in payment integrations, idempotent APIs, Redis jobs, and CI/CD on DigitalOcean. Seeking a full-time Full Stack Laravel Developer role.

TECHNICAL SKILLS
Laravel Stack: Laravel 12, PHP 8, Livewire/Flux, Eloquent ORM, Blade, Inertia.js, Fortify, Socialite, Queues, Events, Policies, Form Requests
Full Stack: REST APIs, Webhooks, MySQL, Redis, Tailwind CSS, Bootstrap, Alpine.js, React, JavaScript/TypeScript, JWT, 2FA
Integrations: Coins.ph payments, Ninja Van logistics, merchant APIs, QR payments, PDF generation (dompdf/FPDI), email/notifications
DevOps: Git, GitHub Actions CI/CD, Docker, Nginx, PHP-FPM, systemd, DigitalOcean, Hostinger, Azure
Also: Node.js, FastAPI, React Native, SQL Server, Swagger/OpenAPI, Solidity/Hardhat (Polygon)

PROFESSIONAL EXPERIENCE

Full Stack Laravel Developer — DocuTrust
E-Signature & Notarization Platform | Freelance / Remote | May 2026 – Present | Live: sign.docutrust.tech
- Built full-stack e-signature and notarization product in Laravel 12 + Livewire: document upload, drag-and-drop signature fields, PDF stamping/sealing, and certificate generation.
- Modeled domain data with Eloquent (documents, signers, certificates, e-invoices) and secured flows with Fortify auth, JWT, and Google 2FA.
- Implemented Redis-backed Laravel queues for PDF processing, notifications, and e-invoicing so long-running jobs stay reliable under load.
- Designed idempotent Laravel API endpoints with idempotency keys so document and invoice actions are safe to retry without duplicates.
- Shipped GitHub Actions CI/CD with zero-downtime releases to DigitalOcean (Nginx, PHP-FPM, systemd queue workers).
- Added optional Polygon hash-anchoring via a Node.js sidecar for tamper-evident document verification after signing completes.

Full Stack Laravel Developer — GatewayHub
Payment Operations Platform | Freelance / Remote | Feb 2026 – Present | Live: gatewayhub.io
- Developed Laravel payment ops dashboard: gateway management, API keys, transaction monitoring, exports, and developer docs in one place.
- Integrated Coins.ph and merchant APIs with Livewire UI + REST endpoints, including dynamic QR payment generation for production use.
- Implemented idempotent payment APIs and webhook controllers to prevent duplicate charges when payment gateways retry events.
- Authored merchant-facing API documentation and exposed clean Laravel routes/resources so partners can integrate independently.
- Deployed and maintained the app on DigitalOcean (domains, env config, Nginx) and resolved production payment/debug issues end-to-end.

Full Stack Laravel Developer — Suretrack
Logistics & Delivery Dashboard | Freelance / Remote | Jan 2026 – Mar 2026 | Live: suretrack.spcardealer.com
- Built Laravel 12 + Livewire logistics dashboard for orders, delivery tracking, COD monitoring, product specs, and operational reports.
- Integrated Ninja Van APIs and Laravel webhook handlers for real-time delivery status; made handlers idempotent for safe retries.
- Added Google OAuth (Socialite/Fortify) and full-stack notification flows; deployed the application on Hostinger with domain setup.

SELECTED PROJECTS

NCIP — Hybrid Blockchain + ABAC Management System (Capstone · Laravel)
Internal records and case platform (IP census, document registry, IPMR, FPIC, audit logs) with ABAC permissions and tamper-evident record hashes.
Tech: Laravel 12, Inertia.js, React, TypeScript, Tailwind CSS, MySQL, Solidity/Hardhat, ethers.js, Leaflet

Flick — QR Code Attendance
Cross-platform QR attendance with offline mobile storage and a Dockerized FastAPI backend on Azure for auth and email verification.
Tech: React Native, SQLite, FastAPI, Docker, Azure

EDUCATION
Bachelor of Science in Information Technology
Davao del Sur State College | 2022 – Present
- Focus: web development, databases, and software engineering; building production Laravel apps alongside coursework
- Capstone: NCIP Hybrid Blockchain-Powered Management System (Laravel + ABAC security framework)

LANGUAGES
Filipino (Native) · English (Professional working proficiency)
`;

fs.writeFileSync(path.join(root, "resume_ats.txt"), ats);

const md = `# Arnieque O. Amaba

**Full Stack Laravel Developer**

Digos City, Davao del Sur, Philippines  
+63 991 669 4076 | kikoy12345amaba@gmail.com  
Portfolio: https://professional-portfolio-1-c4ev.onrender.com  
GitHub: https://github.com/Arnie098 | LinkedIn: https://linkedin.com/in/arnie-que-amaba-9383b2284  
Live Laravel apps: https://gatewayhub.io | https://sign.docutrust.tech | https://suretrack.spcardealer.com

## Professional Summary

Full Stack Laravel Developer with production experience shipping multi-tenant web apps for payments, logistics, and document workflows. Builds end-to-end features in Laravel 12 (Livewire, Eloquent, queues, Fortify auth), MySQL, and Tailwind — from REST/webhook APIs to admin dashboards and cloud deploys. Strong in payment integrations, idempotent APIs, Redis jobs, and CI/CD on DigitalOcean. Seeking a full-time Full Stack Laravel Developer role.

## Technical Skills

- **Laravel Stack:** Laravel 12, PHP 8, Livewire/Flux, Eloquent ORM, Blade, Inertia.js, Fortify, Socialite, Queues, Events, Policies, Form Requests
- **Full Stack:** REST APIs, Webhooks, MySQL, Redis, Tailwind CSS, Bootstrap, Alpine.js, React, JavaScript/TypeScript, JWT, 2FA
- **Integrations:** Coins.ph payments, Ninja Van logistics, merchant APIs, QR payments, PDF generation (dompdf/FPDI), email/notifications
- **DevOps:** Git, GitHub Actions CI/CD, Docker, Nginx, PHP-FPM, systemd, DigitalOcean, Hostinger, Azure
- **Also:** Node.js, FastAPI, React Native, SQL Server, Swagger/OpenAPI, Solidity/Hardhat (Polygon)

## Professional Experience

### Full Stack Laravel Developer — DocuTrust

E-Signature & Notarization Platform · Freelance / Remote | May 2026 – Present | Live: sign.docutrust.tech

- Built full-stack e-signature and notarization product in Laravel 12 + Livewire: document upload, drag-and-drop signature fields, PDF stamping/sealing, and certificate generation.
- Modeled domain data with Eloquent (documents, signers, certificates, e-invoices) and secured flows with Fortify auth, JWT, and Google 2FA.
- Implemented Redis-backed Laravel queues for PDF processing, notifications, and e-invoicing so long-running jobs stay reliable under load.
- Designed idempotent Laravel API endpoints with idempotency keys so document and invoice actions are safe to retry without duplicates.
- Shipped GitHub Actions CI/CD with zero-downtime releases to DigitalOcean (Nginx, PHP-FPM, systemd queue workers).
- Added optional Polygon hash-anchoring via a Node.js sidecar for tamper-evident document verification after signing completes.

### Full Stack Laravel Developer — GatewayHub

Payment Operations Platform · Freelance / Remote | Feb 2026 – Present | Live: gatewayhub.io

- Developed Laravel payment ops dashboard: gateway management, API keys, transaction monitoring, exports, and developer docs in one place.
- Integrated Coins.ph and merchant APIs with Livewire UI + REST endpoints, including dynamic QR payment generation for production use.
- Implemented idempotent payment APIs and webhook controllers to prevent duplicate charges when payment gateways retry events.
- Authored merchant-facing API documentation and exposed clean Laravel routes/resources so partners can integrate independently.
- Deployed and maintained the app on DigitalOcean (domains, env config, Nginx) and resolved production payment/debug issues end-to-end.

### Full Stack Laravel Developer — Suretrack

Logistics & Delivery Dashboard · Freelance / Remote | Jan 2026 – Mar 2026 | Live: suretrack.spcardealer.com

- Built Laravel 12 + Livewire logistics dashboard for orders, delivery tracking, COD monitoring, product specs, and operational reports.
- Integrated Ninja Van APIs and Laravel webhook handlers for real-time delivery status; made handlers idempotent for safe retries.
- Added Google OAuth (Socialite/Fortify) and full-stack notification flows; deployed the application on Hostinger with domain setup.

## Selected Projects

### NCIP — Hybrid Blockchain + ABAC Management System (Capstone · Laravel)

Internal records and case platform (IP census, document registry, IPMR, FPIC, audit logs) with ABAC permissions and tamper-evident record hashes.

Tech: Laravel 12, Inertia.js, React, TypeScript, Tailwind CSS, MySQL, Solidity/Hardhat, ethers.js, Leaflet

### Flick — QR Code Attendance

Cross-platform QR attendance with offline mobile storage and a Dockerized FastAPI backend on Azure for auth and email verification.

Tech: React Native, SQLite, FastAPI, Docker, Azure

## Education

### B.S. Information Technology

Davao del Sur State College | 2022 – Present

- Focus: web development, databases, and software engineering; building production Laravel apps alongside coursework
- Capstone: NCIP Hybrid Blockchain-Powered Management System (Laravel + ABAC security framework)

## Languages

Filipino (Native) · English (Professional working proficiency)
`;

fs.writeFileSync(path.join(root, "resume_rewrite.md"), md);

console.log("Wrote Laravel-targeted resume:", outPath);
console.log("ATS:", path.join(root, "resume_ats.txt"));
console.log("Markdown:", path.join(root, "resume_rewrite.md"));
