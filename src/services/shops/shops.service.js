// Initializes the `shops` service on path `/shops`
import { Shops } from './shops.class';
import createModel from '../../models/shops.model';
import hooks from './shops.hooks';
import { buidlDocumentConfig } from '../../utils/swagger.util';

module.exports = function (app) {
  const model = createModel(app);

  const options = {
    Model: model,
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  const createService = new Shops(options, app);
  createService.docs = buidlDocumentConfig(model);
  app.use('/shops', createService);

  // Get our initialized service so that we can register hooks
  const service = app.service('shops');

  service.hooks(hooks);
};
