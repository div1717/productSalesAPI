const Product = require('../model/model.product');

const totalSaleAmount = async (req, res) => {
  try {
    const { month } = req.params;

    // Convert month string to number
    const selectedMonth = new Date(`${month} 1`).getMonth() + 1; 

    // Calculate the start and end dates for the selected month and for both years (2021 and 2022), as only these two years are present in the database
    const startDate2021 = new Date(Date.UTC(2021, selectedMonth - 1, 1)).toISOString();
    const endDate2021 = new Date(Date.UTC(2021, selectedMonth, 1)).toISOString();
    const startDate2022 = new Date(Date.UTC(2022, selectedMonth - 1, 1)).toISOString();
    const endDate2022 = new Date(Date.UTC(2022, selectedMonth, 1)).toISOString();

    // Fetch products for both years and the specified month
    const products2021 = await Product.find({ dateOfSale: { $gte: startDate2021, $lt: endDate2021 }, sold: true });
    const products2022 = await Product.find({ dateOfSale: { $gte: startDate2022, $lt: endDate2022 }, sold: true });

    // Calculate total sale amounts for both years
    const totalSaleAmount2021 = products2021.reduce((total, product) => total + product.price, 0);
    const totalSaleAmount2022 = products2022.reduce((total, product) => total + product.price, 0);
    const totalSaleAmount = totalSaleAmount2021 + totalSaleAmount2022;
    res.json({ totalSaleAmount});
  } catch (err) {
    console.error('There was an error fetching total sale amount:', err);
    res.status(500).json({ error: 'Failed to fetch the total sale amount' });
  }
};


const totalSoldItems = async (req, res) => {
  try {
    const { month } = req.params;

    // Convert month string to number
    const selectedMonth = new Date(`${month} 1`).getMonth() + 1;

    // Calculate the start and end dates for the selected month and for both years (2021 and 2022), as only these two years are present in the database
    const startDate2021 = new Date(Date.UTC(2021, selectedMonth - 1, 1)).toISOString();
    const endDate2021 = new Date(Date.UTC(2021, selectedMonth, 1)).toISOString();
    const startDate2022 = new Date(Date.UTC(2022, selectedMonth - 1, 1)).toISOString();
    const endDate2022 = new Date(Date.UTC(2022, selectedMonth, 1)).toISOString();

    // Fetch sold products for both years and the specified month
    const products2021 = await Product.find({ dateOfSale: { $gte: startDate2021, $lt: endDate2021 }, sold: true });
    const products2022 = await Product.find({ dateOfSale: { $gte: startDate2022, $lt: endDate2022 }, sold: true });

    // Calculate the total number of sold items for both years
    const totalSoldItems = products2021.length + products2022.length;

    res.json({ totalSoldItems });
  } catch (err) {
    console.error('There was an error fetching total sold items:', err);
    res.status(500).json({ error: 'Failed to fetch the total sold items.' });
  }
};

const totalNotSoldItems = async (req, res) => {
  try {
    const { month } = req.params;

    // Convert month string to number
    const selectedMonth = new Date(`${month} 1`).getMonth() + 1;

    // Calculate the start and end dates for the selected month and for both years (2021 and 2022), as only these two years are present in the database
    const startDate2021 = new Date(Date.UTC(2021, selectedMonth - 1, 1)).toISOString();
    const endDate2021 = new Date(Date.UTC(2021, selectedMonth, 1)).toISOString();
    const startDate2022 = new Date(Date.UTC(2022, selectedMonth - 1, 1)).toISOString();
    const endDate2022 = new Date(Date.UTC(2022, selectedMonth, 1)).toISOString();

    // Fetch not sold products for both years and the specified month
    const products2021 = await Product.find({ dateOfSale: { $gte: startDate2021, $lt: endDate2021 }, sold: false });
    const products2022 = await Product.find({ dateOfSale: { $gte: startDate2022, $lt: endDate2022 }, sold: false });

    // Calculate the total number of not sold items for both years
    const totalNotSoldItems = products2021.length + products2022.length;

    res.json({ totalNotSoldItems });
  } catch (err) {
    console.error('There was an error fetching total not sold items:', err);
    res.status(500).json({ error: 'Failed to fetch the total not sold items.' });
  }
};

module.exports ={
    totalSaleAmount,
    totalSoldItems,
    totalNotSoldItems
};