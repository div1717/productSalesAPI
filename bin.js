// app.js
// ... (previous code)

// Route to fetch the total sale amount of products sold in the specified month
app.get('/statistics/total-sale-amount/:month', async (req, res) => {
    try {
      const { month } = req.params;
      const selectedMonth = new Date(month + ' 1, 2000').getMonth() + 1; // Convert month string to numeric representation (1 to 12)
      const products = await Product.find({ dateOfSale: { $gte: new Date(`2000-${selectedMonth}-01`), $lt: new Date(`2000-${selectedMonth + 1}-01`) }, sold: true });
  
      const totalSaleAmount = products.reduce((total, product) => total + product.price, 0);
      res.json({ totalSaleAmount });
    } catch (err) {
      console.error('Error fetching total sale amount:', err);
      res.status(500).json({ error: 'Failed to fetch total sale amount.' });
    }
  });
  
  // ... (remaining code)
  
  module.exports = app;
  