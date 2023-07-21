const Product = require('../model/model.product');
const axios = require('axios');


const populatedb = async (req, res) => {
    try {
      // Fetch data from the third-party API
      const response = await axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
  
      // Seed data into the database
      await Product.deleteMany({}); // Clear existing data
      await Product.insertMany(response.data); // Insert new data
  
      res.json({ message: 'Database initialized with seed data.' });
    } catch (err) {
      console.error('Error initializing database:', err);
      res.status(500).json({ error: 'Database initialization failed.' });
    }
};

module.exports ={
    populatedb
};