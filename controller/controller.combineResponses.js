const axios = require('axios');

const fetchCombinedData = async (req, res) => {
  try {
    const { month } = req.params;

    // Fetch data from the three APIs using axios
    const totalSaleAmountResponse = await axios.get(`http://localhost:3000/statistics/totalSaleAmount/${month}`);
    const totalSoldItemsResponse = await axios.get(`http://localhost:3000/statistics/totalSoldItems/${month}`);
    const totalNotSoldItemsResponse = await axios.get(`http://localhost:3000/statistics/totalNotSoldItems/${month}`);
    const itemsInAllPriceRangesResponse = await axios.get(`http://localhost:3000/barCharts/itemsInAllPriceRanges/${month}`);
    const itemsInUniqueCategoriesResponse = await axios.get(`http://localhost:3000/pieCharts/itemsInUniqueCategories/${month}`);

    // Extract the data from the responses
    const totalSaleAmountData = totalSaleAmountResponse.data;
    const totalSoldItemsData = totalSoldItemsResponse.data;
    const totalNotSoldItemsData = totalNotSoldItemsResponse.data;
    const itemsInAllPriceRangesData = itemsInAllPriceRangesResponse.data;
    const itemsInUniqueCategoriesData = itemsInUniqueCategoriesResponse.data;

    // Combine the data from all APIs into a single response object
    const combinedResponse = {
      totalSaleAmount: totalSaleAmountData.totalSaleAmount,
      totalSoldItems: totalSoldItemsData.totalSoldItems,
      totalNotSoldItems: totalNotSoldItemsData.totalNotSoldItems,
      itemsInAllPriceRanges: itemsInAllPriceRangesData,
      itemsInUniqueCategories: itemsInUniqueCategoriesData,
    };

    res.json(combinedResponse);
  } catch (err) {
    console.error('Error fetching combined data:', err);
    res.status(500).json({ error: 'Failed to fetch combined data.' });
  }
};

module.exports = fetchCombinedData;
