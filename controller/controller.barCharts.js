const Product = require('../model/model.product');

const ItemsInAllPriceRanges = async (req, res) => {
    try {
      const { month } = req.params;
  
      // Convert month string to number
      const selectedMonth = new Date(`${month} 1`).getMonth() + 1;
  
      // Calculate the start and end dates for the selected month and for both years (2021 and 2022)
      const startDate2021 = new Date(Date.UTC(2021, selectedMonth - 1, 1)).toISOString();
      const endDate2021 = new Date(Date.UTC(2021, selectedMonth, 1)).toISOString();
      const startDate2022 = new Date(Date.UTC(2022, selectedMonth - 1, 1)).toISOString();
      const endDate2022 = new Date(Date.UTC(2022, selectedMonth, 1)).toISOString();
  
      // Fetch products for both years and the selected month
      const products2021 = await Product.find({ dateOfSale: { $gte: startDate2021, $lt: endDate2021 } });
      const products2022 = await Product.find({ dateOfSale: { $gte: startDate2022, $lt: endDate2022 } });
  
      // Combine products from both years
      const allProducts = [...products2021, ...products2022];
  
      // Sort the products based on their price
      allProducts.sort((a, b) => a.price - b.price);
  
      // Define the price ranges for the bar chart
      const priceRanges = [
        { min: 0, max: 100 },
        { min: 101, max: 200 },
        { min: 201, max: 300 },
        { min: 301, max: 400 },
        { min: 401, max: 500 },
        { min: 501, max: 600 },
        { min: 601, max: 700 },
        { min: 701, max: 800 },
        { min: 801, max: 900 },
        { min: 901, max: Infinity }, // Price above 901
      ];
  
      // Initialize counts for each price range
      const counts = Array(priceRanges.length).fill(0);

      // Coukd do it using  two nested for loops but optimised it with binary search
      // Count the number of items falling in each price range using binary search
      for (const product of allProducts) {
        const price = product.price;
        let left = 0;
        let right = priceRanges.length - 1;
        while (left <= right) {
          const mid = Math.floor((left + right) / 2);
          if (price >= priceRanges[mid].min && price <= priceRanges[mid].max) {
            counts[mid]++;
            break;
          } else if (price < priceRanges[mid].min) {
            right = mid - 1;
          } else {
            left = mid + 1;
          }
        }
      }
  
      // Prepare the response with price ranges and their respective counts
      const barChartResponse = priceRanges.map((range, index) => ({
        PriceRange: `${range.min} - ${range.max === Infinity ? 'above' : range.max}`,
        count: counts[index],
      }));
  
      res.json(barChartResponse);
    } catch (err) {
      console.error('Error fetching bar chart items:', err);
      res.status(500).json({ error: 'Failed to fetch bar chart items.' });
    }
  };
  
  
  module.exports = ItemsInAllPriceRanges;