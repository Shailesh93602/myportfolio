const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  const { fullName, email, phoneNumber, subject, message } = req.body;

  // Create a new contact object
  const contactData = {
    fullName,
    email,
    phoneNumber,
    subject,
    message,
  };

  // Save the contact data to a JSON file
  const dataFilePath = path.join(__dirname, "data", "contacts.json");

  try {
    let existingData;

    try {
      // Try to read the existing data from the file
      existingData = JSON.parse(fs.readFileSync(dataFilePath, "utf8"));
    } catch (error) {
      // If the file is empty or doesn't exist, initialize with an empty array
      existingData = [];
    }

    existingData.push(contactData);

    // Write the updated data back to the file
    fs.writeFileSync(dataFilePath, JSON.stringify(existingData, null, 2));
  } catch (err) {
    // If there's an error, log it and send an error response
    console.error(err);
    return res.status(500).json({ message: "Error saving data." });
  }

  res.status(200).json({ message: "Your message has been sent successfully." });
});

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
