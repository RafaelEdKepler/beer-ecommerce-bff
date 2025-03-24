import products from "../mocks/products.js";
import skusData from "../mocks/stock-price.js";

export function getAllProduct(req, res) {
  const productsWithPrices = products.map(product => {
    const prices = product.skus
      .map(sku => skusData[sku.code]?.price)
      .filter(price => price !== undefined);

    const minPrice = prices.length > 0 ? Math.min(...prices) : null;

    return { ...product, minPrice: `$${(minPrice / 100).toFixed(2)}` };
  });

  res.json(productsWithPrices);
}