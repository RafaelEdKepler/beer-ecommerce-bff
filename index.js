import express from "express";
import cors from "cors";
import products from "./products.js";
import skusData from "./stock-price.js";

const app = express();
const PORT = 3000;

// app.use(cors());

app.use(cors({
  origin: "http://localhost:5173",
  methods: "GET"
}))

app.get("/products", (req, res) => {
  const productsWithPrices = products.map(product => {
    const prices = product.skus
      .map(sku => skusData[sku.code]?.price)
      .filter(price => price !== undefined);

    const minPrice = prices.length > 0 ? Math.min(...prices) : null;

    return { ...product, minPrice };
  });

  res.json(productsWithPrices);
});

app.get("/sku/:code", (req, res) => {
  const { code } = req.params;
  const skuData = skusData[code];

  if (!skuData) {
    return res.status(404).json({ error: "SKU not found" });
  }

  res.json(skuData);
});

app.listen(PORT, () => {
  console.log(`server listening to port ${PORT}`);
});