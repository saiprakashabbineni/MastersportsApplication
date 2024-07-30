const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors());

// Create a connection to the database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '090999',
  database: 'dropdown'
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database.');
});

// Middleware to parse JSON bodies
app.use(express.json());

app.get('/products', (req, res) => {
    const { price } = req.query;
    let query = 'SELECT * FROM productdetails';
    
    if (price) {
      const priceFilter = JSON.parse(price);
      if (priceFilter.lessThan) {
        query += ` WHERE product_price < ${db.escape(priceFilter.lessThan)}`;
      } else if (priceFilter.between) {
        const [min, max] = priceFilter.between;
        query += ` WHERE product_price BETWEEN ${db.escape(min)} AND ${db.escape(max)}`;
      }
    }
    
  
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error fetching products:', err);
        res.status(500).send('Error fetching products');
        return;
      }
      console.log('Results:', results);  // Log the results for debugging
      res.json(results);
    });
  });
  

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
