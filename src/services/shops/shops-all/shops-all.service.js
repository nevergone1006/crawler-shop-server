// Initializes the `shops` service on path `/shops`
import { Shops } from '../shops.class';
import createModel from '../../../models/shops.model';
import hooks from './shops-all.hooks';

module.exports = function (app) {
  const model = createModel(app);

  const options = {
    Model: model,
    paginate: false
  };

  // Initialize our service with any options it requires
  const createService = new Shops(options, app);
  app.use('/shops-all', createService);

  // Get our initialized service so that we can register hooks
  const service = app.service('shops-all');

  service.hooks(hooks);
};
