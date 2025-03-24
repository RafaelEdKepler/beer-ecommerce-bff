import skusData from "../mocks/stock-price.js";

export function getSkuByCode(req, res) {
  const { code } = req.params;
  const skuData = skusData[code];

  if (!skuData) {
    return res.status(404).json({ error: "SKU not found" });
  }

  res.json(skuData);
}