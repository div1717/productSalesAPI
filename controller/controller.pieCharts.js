const Product = require('../model/model.product');

const ItemsInUniqueCategories = async (req, res) => {
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

    // Create an object to store the category counts
    const categoryCounts = {};

    // Count the number of items for each category
    for (const product of allProducts) {
      const category = product.category;
      if (categoryCounts[category]) {
        categoryCounts[category]++;
      } else {
        categoryCounts[category] = 1;
      }
    }

    // Prepare the response with unique categories and their respective counts
    const pieChartResponse = Object.entries(categoryCounts).map(([category, count]) => ({
      category,
      count,
    }));

    res.json(pieChartResponse);
  } catch (err) {
    console.error('Error fetching pie chart items:', err);
    res.status(500).json({ error: 'Failed to fetch pie chart items.' });
  }
};

module.exports = ItemsInUniqueCategories;
