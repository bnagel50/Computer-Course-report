import React, { useRef } from "react";
// import emailjs from "emailjs-com";
import Form from "react-bootstrap/Form";

export default function Contact() {
  const form = useRef();



  return (
    <main className="flex-row justify-center mb-4 main-log">
      <div className="col-12 col-lg-10 first-div">
        <div className="text-stuff">
          <h1>GET IN TOUCH WITH US 👇</h1>
          <Form ref={form} onSubmit={sendEmail} id="contact-form">
            <Form.Group
              name="name"
              className="mb-3"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="from_name"
                size="lg"
                type="name"
                placeholder="Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                size="lg"
                type="email"
                placeholder="Email"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>
                Feel free to contact us, and let us know if there is a course you want to add! <br></br>
              </Form.Label>
              <Form.Control name="message" as="textarea" rows={3} />
            </Form.Group>
            <button
              className="btn btn-block btn-info btn-submit"
              style={{ cursor: "pointer" }}
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
