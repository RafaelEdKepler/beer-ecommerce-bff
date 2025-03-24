import express from "express";
import cors from "cors";
import { getAllProduct } from "./src/controllers/productController.js";
import { getSkuByCode } from "./src/controllers/skuController.js";

const app = express();
const PORT = 3000;

// app.use(cors());

app.use(cors({
  origin: "http://localhost:5173",
  methods: "GET"
}))

app.get("/products", (req, res) => {
  getAllProduct(req, res);
});

app.get("/sku/:code", (req, res) => {
  getSkuByCode(req, res);
});

app.listen(PORT, () => {
  console.log(`server listening to port ${PORT}`);
});