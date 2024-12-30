import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_z9djojd',
      'template_1pe84j8',
      form.current,
      'Lqn6TDdI00b-wJqxw'
    )
      .then((result) => {
        alert('Message sent!');
      }, (error) => {
        alert('Failed to send message, please try again.');
      });
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="from_name" placeholder="Your Name" required />
      <input type="email" name="from_email" placeholder="Your Email" required />
      <textarea name="message" placeholder="Your Message" required></textarea>
       <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
