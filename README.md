# Project Name

`Roxiler Pune Assesment`

## Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Database](#database)

## Project Overview

Provide a brief overview of the project, its purpose, and goals. Mention the problem it aims to solve or the functionality it provides. Also, highlight any unique features or challenges.

## Technologies Used

List the technologies and libraries used in the project. For example:

- Node.js
- Express.js
- MongoDB
- Mongoose

## Project Structure

Explain the structure of your project directory. You can provide a brief explanation of each file and folder present in the project, as well as their roles. For example:

```json
project-root
|-- controllers
| |-- totalSaleAmountController.js
| |-- totalSoldItemsController.js
| |-- totalNotSoldItemsController.js
| |-- barChartController.js
| |-- pieChartController.js
|-- models
| |-- model.product.js
|-- routes
| |-- totalSaleAmountRoutes.js
| |-- totalSoldItemsRoutes.js
| |-- totalNotSoldItemsRoutes.js
| |-- barChartRoutes.js
| |-- pieChartRoutes.js
|-- database.js
|-- index.js
|-- README.md
|-- .gitignore
|-- package.json
```

## Installation

Explain how to set up and install the project locally. Include any necessary steps to install dependencies, set up the database, or configure environment variables.

For example:

1. Clone the repository: git clone https://github.com/div1717/productSalesAPI.git

2. Change into the project directory: cd RoxilerPune

3. Install dependencies: npm install

4. To start the server: npm run devStart

## API Endpoints

List all the API endpoints available in your project along with their descriptions and expected request/response formats. For example:

- `GET http://localhost:3000/statistics/totalSaleAmount/:month`
  - Description: Fetch the total sale amount for a specific month.
  - Request Parameters: `month`
  - Response Format: JSON
  - Response Example:

```json
{
  "totalSaleAmount": 12345.67
}
```

- `GET http://localhost:3000/statistics/totalSoldItems/:month`
  - Description: Fetch the total number of sold items for a specific month.
  - Request Parameters: `month`
  - Response Format: JSON
  - Response Example:

```json
{
  "totalSoldItems": 150
}
```

- `GET http://localhost:3000/statistics/totalNotSoldItems/:month`
  - Description: Fetch the total number of NOT sold items for a specific month.
  - Request Parameters: `month`
  - Response Format: JSON
  - Response Example:

```json
{
  "totalNotSoldItems": 50
}
```

- `GET http://localhost:3000/barCharts/ItemsInAllPriceRanges/:month`
  - Description: Fetch the data for a bar chart that shows the number of items falling into specific price ranges for a specific month.
  - Request Parameters: `month`
  - Response Format: JSON
  - Response Example:

```json
{
  "barChartData": [
    {
      "PriceRange": "0 - 100",
      "count": 10
    },
    {
      "PriceRange": "101 - 200",
      "count": 25
    },
    {
      "PriceRange": "201 - 300",
      "count": 15
    }
    // ... and so on for other price ranges
  ]
}
```

- `GET http://localhost:3000/pieCharts/ItemsInUniqueCategories/:month`
  - Description: Fetch the data for a pie chart that shows the unique categories and the number of items from each category for a specific month.
  - Request Parameters: `month`
  - Response Format: JSON
  - Response Example:

```json
{
  "pieChartData": [
    {
      "category": "Electronics",
      "count": 30
    },
    {
      "category": "Clothing",
      "count": 25
    },
    {
      "category": "Home Decor",
      "count": 15
    }
    // ... and so on for other categories
  ]
}
```

- `GET http://localhost:3000/combineResponses/fetchCombinedData/:month`
  - Description: Fetch the data from all the above APIs for a specific month, combine the responses, and send a final response of the combined JSON.
  - Request Parameters: `month`
  - Response Format: JSON
  - Response Example:

```json
{
  "totalSaleAmount": 12345.67,
  "totalSoldItems": 50,
  "totalNotSoldItems": 20,
  "itemsInAllPriceRanges": [
    {
      "PriceRange": "0 - 100",
      "count": 15
    },
    {
      "PriceRange": "101 - 200",
      "count": 30
    },
    {
      "PriceRange": "201 - 300",
      "count": 25
    }
    // ... and so on for other price ranges
  ],
  "itemsInUniqueCategories": [
    {
      "category": "Electronics",
      "count": 30
    },
    {
      "category": "Clothing",
      "count": 25
    },
    {
      "category": "Home Decor",
      "count": 15
    }
    // ... and so on for other categories
  ]
}
```

## Database

The project uses MongoDB as the database to store product information. The schema for the "products" collection is as follows:

```json
{
  id: Number,          // Unique identifier for the product (integer)
  title: String,       // Product title (string)
  price: Number,       // Product price (number)
  description: String, // Product description (string)
  category: String,    // Product category (string)
  image: String,       // URL of the product image (string)
  sold: Boolean,       // Flag indicating if the product is sold (boolean)
  dateOfSale: Date,    // Date of sale for the product (date)
}
```
