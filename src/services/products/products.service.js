// Initializes the `products` service on path `/products`
import { Products } from './products.class';
import createModel from '../../models/products.model';
import hooks from './products.hooks';
import { buidlDocumentConfig } from '../../utils/swagger.util';

module.exports = function (app) {
  const model = createModel(app);

  const options = {
    Model: model,
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  const createService = new Products(options, app);
  createService.docs = buidlDocumentConfig(model);
  app.use('/products', createService);

  // Get our initialized service so that we can register hooks
  const service = app.service('products');

  service.hooks(hooks);
};
