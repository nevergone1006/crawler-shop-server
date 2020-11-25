import users from './users/users.service';
import shops from './shops/shops.service';
import products from './products/products.service';
// import shopsAll from './shops/shops-all/shops-all.service';
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(shops);
  app.configure(products);
  // app.configure(shopsAll);
};
