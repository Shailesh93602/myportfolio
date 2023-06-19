import React, { useState } from "react";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Send the form data to an API
    const data = {
      fullName: fullName,
      email: email,
      phoneNumber: phoneNumber,
      subject: subject,
      message: message,
    };
    fetch("https://my-api.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });  
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
          <input type="tel" id="phoneNumber" placeholder="Mobile Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
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



// import React, { useState } from "react";
// import emailjs from "emailjs-com";

// const Index = () => {
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Perform form submission logic here
//     // You can replace the following code with your own logic or actions

//     // Configure the EmailJS service
//     emailjs.sendForm(
//       "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
//       "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
//       e.target,
//       "YOUR_USER_ID" // Replace with your EmailJS user ID
//     )
//     .then(() => {
//       setIsSubmitted(true);
//     })
//     .catch((error) => {
//       console.error("Error sending email:", error);
//     });
//   };

//   return (
//     <section className="contact" id="contact">
//       <h2 className="heading">
//         Contact <span>Me!</span>
//       </h2>
//       {isSubmitted ? (
//         <div className="success-message">Form submitted successfully!</div>
//       ) : (
//         <form id="contact-form" onSubmit={handleSubmit}>
//           <div className="input-box">
//             <input type="text" name="fullName" id="fullName" placeholder="Full Name" required />
//             <input type="email" name="email" id="email" placeholder="Email Address" required />
//           </div>
//           <div className="input-box">
//             <input type="tel" name="phoneNumber" id="phoneNumber" placeholder="Mobile Number" />
//             <input type="text" name="subject" id="subject" placeholder="Email Subject" required />
//           </div>
//           <textarea name="message" id="message" placeholder="Your Message" required></textarea>
//           <input type="submit" value="Send Message" className="btn" />
//         </form>
//       )}
//     </section>
//   );
// };

// export default Index;
