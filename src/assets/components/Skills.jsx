import React from "react";
import "./Css/Skills.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const skillGroups = [
  {
    title: "Laravel Stack",
    description: "End-to-end Laravel apps: APIs, Livewire UIs, queues, and auth.",
    skills: [
      { name: "Laravel", color: "#FF2D20", icon: "fab fa-laravel", progress: 85 },
      { name: "PHP", color: "#777BB4", icon: "fab fa-php", progress: 85 },
      { name: "Livewire", color: "#FB70A9", icon: "fas fa-bolt", progress: 80 },
      { name: "Eloquent / MySQL", color: "#00758f", icon: "fas fa-database", progress: 80 },
      { name: "REST & Webhooks", color: "#0ea5e9", icon: "fas fa-exchange-alt", progress: 80 },
      { name: "Redis Queues", color: "#DC382D", icon: "fas fa-layer-group", progress: 75 },
      { name: "Fortify / Socialite", color: "#FF2D20", icon: "fas fa-shield-alt", progress: 75 },
      { name: "Inertia.js", color: "#9553E9", icon: "fas fa-code", progress: 70 },
    ],
  },
  {
    title: "Frontend",
    description: "Dashboards and UIs that pair with Laravel backends.",
    skills: [
      { name: "Tailwind CSS", color: "#38bdf8", icon: "fas fa-wind", progress: 75 },
      { name: "JavaScript", color: "#f0db4f", icon: "fab fa-js-square", progress: 75 },
      { name: "React", color: "#61dafb", icon: "fab fa-react", progress: 75 },
      { name: "Bootstrap", color: "#7952b3", icon: "fab fa-bootstrap", progress: 70 },
      { name: "HTML / CSS", color: "#e34c26", icon: "fab fa-html5", progress: 70 },
      { name: "React Native", color: "#00d8ff", icon: "fab fa-react", progress: 60 },
    ],
  },
  {
    title: "DevOps & More",
    description: "Deploys, cloud, version control, and supporting tools.",
    skills: [
      { name: "Git / GitHub", color: "#f1502f", icon: "fab fa-git-alt", progress: 80 },
      { name: "DigitalOcean", color: "#0080FF", icon: "fas fa-cloud", progress: 75 },
      { name: "CI/CD", color: "#34d058", icon: "fas fa-cogs", progress: 70 },
      { name: "Docker", color: "#0db7ed", icon: "fab fa-docker", progress: 65 },
      { name: "Nginx / PHP-FPM", color: "#009639", icon: "fas fa-server", progress: 70 },
      { name: "Node.js", color: "#68a063", icon: "fab fa-node-js", progress: 70 },
      { name: "FastAPI", color: "#009688", icon: "fas fa-bolt", progress: 65 },
      { name: "Azure", color: "#0089d6", icon: "fas fa-cloud", progress: 60 },
    ],
  },
];

const stats = [
  { label: "Laravel Apps", value: "4+" },
  { label: "Live Platforms", value: "3" },
  { label: "Work Experiences", value: "3" },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="skills-header">
          <div>
            <p className="skills-eyebrow">Capabilities</p>
            <h2 className="skills-title">Skills & Tools</h2>
            <p className="skills-intro">
              A Full Stack Laravel stack — PHP, Livewire, MySQL, queues, and
              deploys — plus the frontend and cloud tools that ship real products.
            </p>
          </div>

          <div className="skills-stats">
            {stats.map((stat) => (
              <div key={stat.label} className="skills-stat-card">
                <span className="skills-stat-value">{stat.value}</span>
                <span className="skills-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-groups">
          {skillGroups.map((group) => (
            <section key={group.title} className="skill-group">
              <div className="skill-group-header">
                <h3 className="skill-group-title">{group.title}</h3>
                <p className="skill-group-description">{group.description}</p>
              </div>

              <div className="skills-grid">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="skill-card">
                    <span className="skill-icon-shell">
                      <i className={`${skill.icon} skill-icon`}></i>
                    </span>
                    <div>
                      <h5 className="skill-name">{skill.name}</h5>
                      <span className="skill-tier">
                        {skill.progress >= 80 ? "Advanced" : skill.progress >= 60 ? "Proficient" : skill.progress >= 40 ? "Intermediate" : "Familiar"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
