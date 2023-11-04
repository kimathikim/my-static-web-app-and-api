const data = require('.../shared/product-data.js')

module.exports = asyc function (context, req) {
  try {
    const products = data.getProducts();
    context.res.status(200).json(products);
  }
  catch (error) {
    context.res.status(500).send(error);
  }
}
