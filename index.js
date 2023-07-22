// app.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const db=require("./database/db");

const productRouter = require('./router/router.product');
const statisticsRouter = require('./router/router.statistics');
const barChartsRouter = require('./router/router.barCharts');

app.use(express.json());
app.use("/product", productRouter);
app.use("/statistics", statisticsRouter);
app.use("/barCharts", barChartsRouter);


// Start the server
app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);
});
