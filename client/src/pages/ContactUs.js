import React, { useRef } from "react";
// Using emailjs to send me an email when someone fills out the form on the site
import emailjs from "emailjs-com";
import Form from 'react-bootstrap/Form';

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
    <main className="flex-row justify-center mb-4 main-log">
       <div className="col-12 col-lg-10 first-div">
        <div className='text-stuff'>
           <h1>GET IN TOUCH WITH US 👇</h1>
           <Form ref={form} onSubmit={sendEmail} id="contact-form">
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control size="lg" type="name" placeholder="Name"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control size="lg" type="email" placeholder="Email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Tell us what Courses you Want us to Add! <br></br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sapien ante, egestas bibendu</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <button
                  className="btn btn-block btn-info btn-submit"
                  style={{ cursor: 'pointer' }}
                  type="Let's Collaborate !"
                >
                  Let's Collaborate !
                </button>
    </Form>
      </div>
    </div>
    </main>
  );
}

