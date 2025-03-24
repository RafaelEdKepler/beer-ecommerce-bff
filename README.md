# 🍻 Beer Store BFF

Beer Store BFF  is a Node.js application built with Express that answers to React Beer Ecommerce ([https://github.com/RafaelEdKepler/beer-ecommerce-front](https://github.com/RafaelEdKepler/beer-ecommerce-front)).

## 🚀 Technologies Used

- **Node.js** - Runtime environment
- **Express.js** - Web framework for building APIs

## 📁 Project Structure

```
/beer-store-bff
├── src
│   ├── controllers    # API Controllers
│   ├── mocks          # Mocked data used in the project
├── index.js           # Entry point of the application
├── package.json       # Project metadata and dependencies
├── README.md          # Project documentation
```

## 🛠️ Installation & Setup

### 1️⃣ Clone the repository

```sh
git clone https://github.com/RafaelEdKepler/beer-ecommerce-bff.git
cd beer-ecommerce-bff
```

### 2️⃣ Install dependencies

```sh
npm install
```

### 3️⃣ Run the application

```sh
node index.js
```

By default, the server will start on **[http://localhost:3000](http://localhost:3000)**.

## 📡 API Endpoints

The application provides various endpoints to fetch beer-related data. Below are some example endpoints:

- `GET /products` - Returns a list of available beer products
- `GET /sku/:code` - Fetches SKU details for a product.

## 🔄 Future Improvements

- ✅ Add unit tests using **Jest**
- ✅ Implement error handling and logging
- ✅ Improve data persistence with a real database

