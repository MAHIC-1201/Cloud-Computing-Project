const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Create a MySQL connection
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'awsdb.cfi2icwgcqa7.eu-west-2.rds.amazonaws.com',
  user: 'admin',
  password: 'Pungle040112',
  database: 'googleforms'
});

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Middleware to enable CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});

// API endpoint to store form data
app.post('/api/formData', (req, res) => {
  const formData = req.body;

  // Insert the form data into the database
  pool.query('INSERT INTO form_data (question_text, selected_option) VALUES (?, ?)', [formData.questionText, formData.selectedOption], (err, results) => {
    if (err) {
      console.error('Error storing form data:', err);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      res.status(201).json({ message: 'Form data stored successfully' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
