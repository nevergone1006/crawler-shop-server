import { authenticate } from '@feathersjs/authentication';

import { v1 as uuidv1 } from 'uuid';
import { assign } from 'lodash';
import authorize from '../../hooks/authorize';
import { notImplementedError } from '../../hooks/commonError';

module.exports = {
  before: {
    all: [
      authenticate('jwt'),
      (hook) => authorize(hook, [
        notImplementedError,
      ]),
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
