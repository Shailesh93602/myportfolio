import React, { useState } from "react";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validate the form data
    if (!email || !message) {
      alert("Please fill in all the required fields.");
      return;
    }
  
    // Check if the email address is valid
    const regex = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$");
    if (!regex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    // Submit the form data
    const response = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName,
        email,
        phoneNumber,
        subject,
        message,
      }),
    });
  
    // Handle the response
    if (response.status === 200) {
      alert("Your message has been sent successfully.");
      setFullName("");
      setEmail("");
      setPhoneNumber("");
      setSubject("");
      setMessage("");
    } else {
      alert("There was an error sending your message.");
    }
  };
  

  return (
    <section className="contact padding" id="contact">
      <h2 className="heading">
        Contact <span>Me!</span>
      </h2>
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
