<<<<<<< HEAD
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(bodyParser.json());

app.post('/contact', (req, res) => {
  const formData = req.body;
  console.log('Form Data:', formData);
  res.json({ message: 'Form submitted successfully!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
=======
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(bodyParser.json());

app.post('/contact', (req, res) => {
  const formData = req.body;
  console.log('Form Data:', formData);
  res.json({ message: 'Form submitted successfully!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
>>>>>>> 2b3ecb6ee4f3abc9d95daf1cd051e0e7629e2691
