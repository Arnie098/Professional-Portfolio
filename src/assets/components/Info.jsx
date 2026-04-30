import myImage from "../profile.png";
import "./Css/Info.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Info() {
  const TypingHighlight = () => {
    const texts = ["Hi, I'm Arnie", "Future Full-Stack Developer"];
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
            <h2 className="info-subtitle">BSIT 3C</h2>
            <hr className="info-divider" />
            <p className="info-summary fs-5">
              Information Technology student focused on backend development,
              modern web applications, API integrations, and practical software
              delivery.
            </p>
            <h4 className="info-goal">
              Goal after graduation: become a reliable full-stack engineer who
              builds useful systems with strong technical standards and
              professionalism.
            </h4>
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
