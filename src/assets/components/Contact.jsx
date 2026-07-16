import React, { useRef, useState } from "react";
import "./Css/Contact.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_df14r1u",
        "template_4sbny8d",
        form.current,
        "Uk4XfVjYe4mf6P1jK"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSent(true);
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
        }
      );
  };

  return (
    <section id="contact" className="contact-section py-5">
      <div className="container">
        <div className="contact-header">
          <p className="contact-eyebrow">Let's Connect</p>
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-intro">
            Hiring a Full Stack Laravel Developer, or have a project in mind?
            Send a message — I&apos;m open to full-time roles and will get back
            to you as soon as possible.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-8">
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="email"
                  placeholder="Your email"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  name="message"
                  className="form-control"
                  id="message"
                  rows="5"
                  placeholder="Tell me about your project or idea..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-contact w-100">
                Send Message
              </button>
            </form>

            {sent && (
              <div className="alert alert-success mt-3" role="alert">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
