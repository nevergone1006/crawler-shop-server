// Initializes the `users` service on path `/users`
import Users from './users.class';
import createModel from '../../models/users.model';
import hooks from './users.hooks';
import { buidlDocumentConfig } from '../../utils/swagger.util';

module.exports = function (app) {
  const model = createModel(app);
  const options = {
    Model: model,
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  const createService = new Users(options, app);
  createService.docs = buidlDocumentConfig(model);
  app.use('/users', createService);

  // Get our initialized service so that we can register hooks
  const service = app.service('users');

  service.hooks(hooks);
};
