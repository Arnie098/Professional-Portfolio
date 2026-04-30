import React from "react";
import "./Css/Skills.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const skillGroups = [
  {
    title: "Frontend",
    description: "Building responsive interfaces and component-driven user experiences.",
    skills: [
      { name: "HTML", color: "#e34c26", icon: "fab fa-html5", progress: 25 },
      { name: "CSS", color: "#264de4", icon: "fab fa-css3-alt", progress: 25 },
      { name: "JavaScript", color: "#f0db4f", icon: "fab fa-js-square", progress: 25 },
      { name: "React", color: "#61dafb", icon: "fab fa-react", progress: 50 },
      { name: "React Native", color: "#00d8ff", icon: "fab fa-react", progress: 50 },
      { name: "Bootstrap", color: "#7952b3", icon: "fab fa-bootstrap", progress: 25 },
    ],
  },
  {
    title: "Backend & Cloud",
    description: "Designing APIs, deployments, infrastructure, and system integrations.",
    skills: [
      { name: ".NET", color: "#512bd4", icon: "fas fa-code", progress: 75 },
      { name: "Java", color: "#f89820", icon: "fab fa-java", progress: 50 },
      { name: "FastAPI", color: "#009688", icon: "fas fa-bolt", progress: 30 },
      { name: "Docker", color: "#0db7ed", icon: "fab fa-docker", progress: 50 },
      { name: "Azure", color: "#0089d6", icon: "fas fa-cloud", progress: 50 },
      { name: "Google Cloud", color: "#ea4335", icon: "fas fa-cloud", progress: 50 },
      { name: "Node.js / Express", color: "#68a063", icon: "fab fa-node-js", progress: 50 },
      { name: "CI/CD Pipeline", color: "#34d058", icon: "fas fa-cogs", progress: 50 },
    ],
  },
  {
    title: "Data & Tools",
    description: "Working with databases, version control, automation, and supporting tools.",
    skills: [
      { name: "Git", color: "#f1502f", icon: "fab fa-git-alt", progress: 50 },
      { name: "GitHub", color: "#111827", icon: "fab fa-github", progress: 50 },
      { name: "SQLite", color: "#003b57", icon: "fas fa-database", progress: 50 },
      { name: "MySQL", color: "#00758f", icon: "fas fa-database", progress: 50 },
      { name: "SSMS", color: "#ff6c00", icon: "fas fa-server", progress: 50 },
      { name: "Unit Testing", color: "#ffcc00", icon: "fas fa-vial", progress: 20 },
      { name: "Supabase", color: "#3ecf8e", icon: "fas fa-database", progress: 40 },
      { name: "n8n", color: "#ff6f61", icon: "fas fa-project-diagram", progress: 30 },
      { name: "GraphQL", color: "#e535ab", icon: "fas fa-share-alt", progress: 30 },
    ],
  },
];

const stats = [
  { label: "Core Technologies", value: "20+" },
  { label: "Backend Focus", value: "API & Systems" },
  { label: "Tooling Style", value: "Practical" },
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
              A working stack centered on backend engineering, web application
              development, cloud deployment, and database-driven systems.
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
                    <div className="skill-card-top">
                      <span
                        className="skill-icon-shell"
                        style={{
                          backgroundColor: `${skill.color}1a`,
                          borderColor: `${skill.color}33`,
                        }}
                      >
                        <i
                          className={`${skill.icon} skill-icon`}
                          style={{ color: skill.color }}
                        ></i>
                      </span>
                      <span className="skill-percent">{skill.progress}%</span>
                    </div>

                    <h5 className="skill-name">{skill.name}</h5>

                    <div className="progress-container">
                      <div className="progress-label-row">
                        <p className="progress-label">Current proficiency</p>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          style={{ width: `${skill.progress}%` }}
                        />
                      </div>
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
