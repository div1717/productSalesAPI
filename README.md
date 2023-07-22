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
- [Contributing](#contributing)
- [License](#license)

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

````project-root
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
|-- package.json```

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
````

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
