import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send the form data to an API
    const data = {
      from_name: fullName,
      from_email: email,
      from_phoneNumber: phoneNumber,
      from_subject: subject,
      from_message: message,
    };

    try {
      const response = await emailjs.send(
        "service_uh3jspq", 
        "template_9jk3yw8", 
        data,
        "LzBxIAKfE0LSvqFYw" 
      );

      console.log("Email sent successfully:", response);
      setFullName("");
      setEmail("");
      setPhoneNumber("");
      setSubject("");
      setMessage("");
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <section className="contact padding" id="contact">
      <h2 className="heading">Contact Me!</h2>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="input-box">
          <input
            type="text"
            id="fullName"
            placeholder="Full Name"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            type="email"
            id="email"
            placeholder="Email Address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-box">
          <input
            type="tel"
            id="phoneNumber"
            placeholder="Mobile Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <input
            type="text"
            id="subject"
            placeholder="Email Subject"
            required
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <textarea
          id="message"
          placeholder="Your Message"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <input type="submit" value="Send Message" className="btn" />
      </form>
    </section>
  );
};

export default Contact;
