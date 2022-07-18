import React, { useRef } from "react";
// Using emailjs to send me an email when someone fills out the form on the site
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3fmoubx",
        "template_pgbaa1u",
        form.current,
        "PU5YCE4cQQ57L6iGI"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div>
      <h1 className="section-header">Send Me a Message</h1>
      <form ref={form} onSubmit={sendEmail} id="contact-form">
        <label className="form-label">Name</label>
        <input className="form-field" type="text" name="name" />
        <label className="form-label">Email</label>
        <input className="form-field" type="email" name="email" />
        <label className="form-label">
          Tell us what Courses you Want us to Add!
        </label>
        <textarea className="form-field" id="message-field" name="message" />
        <input
          className="form-field"
          id="submit-btn"
          type="submit"
          value="Send"
        />
      </form>
    </div>
  );
}
