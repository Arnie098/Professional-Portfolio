import myImage from "../profile.png";
import "./Css/Info.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Info() {
  const TypingHighlight = () => {
    const texts = ["Hi, I'm Arnie", "Backend Developer", "Full Stack Engineer"];
    const [displayedText, setDisplayedText] = useState("");
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
      const currentText = texts[textIndex];
      const typingSpeed = isDeleting ? 50 : 100;

      const timeout = setTimeout(() => {
        const nextChar = isDeleting
          ? currentText.slice(0, charIndex - 1)
          : currentText.slice(0, charIndex + 1);

        setDisplayedText(nextChar);
        setCharIndex(isDeleting ? charIndex - 1 : charIndex + 1);

        if (!isDeleting && nextChar === currentText) {
          setTimeout(() => setIsDeleting(true), 1000);
        } else if (isDeleting && nextChar === "") {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }, typingSpeed);

      return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, textIndex]);

    return (
      <span className="highlight">
        {displayedText}
        <span className="blinking-cursor">|</span>
      </span>
    );
  };

  return (
    <motion.section
      id="home"
      className="home-section d-flex align-items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container py-5">
        <div className="row align-items-center">
          <motion.div
            className="col-md-6 text-center text-md-start"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2.6, ease: "easeOut" }}
          >
            <h1 className="display-4 fw-bold">
              <TypingHighlight />
            </h1>
            <h2 className="info-subtitle">Backend Developer & Full Stack Engineer</h2>
            <hr className="info-divider" />
            <p className="info-summary fs-5">
              I build backend systems, payment integrations, and full-stack web
              applications. Focused on clean architecture, reliable APIs, and
              shipping products that work.
            </p>
            <div className="info-cta">
              <a href="#projects" className="btn btn-primary info-btn">View My Work</a>
              <a href="#contact" className="btn btn-outline info-btn-outline">Get In Touch</a>
            </div>
          </motion.div>

          <motion.div
            className="col-md-6 col-12 image-container"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <div className="floating-image profile-frame">
              <img
                src={myImage}
                className="profile-image"
                alt="Arnie Que"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
