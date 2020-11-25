// import { authenticate } from '@feathersjs/authentication';

import { v1 as uuidv1 } from 'uuid';
import { assign } from 'lodash';

module.exports = {
  before: {
    all: [
      // authenticate('jwt'),
    ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [
      (hooks) => {
        assign(hooks.data, { _id: uuidv1() });
      },
    ],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
