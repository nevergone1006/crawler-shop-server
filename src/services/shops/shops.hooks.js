import { authenticate } from '@feathersjs/authentication';

import { v1 as uuidv1 } from 'uuid';
import { assign } from 'lodash';
import authorize from '../../hooks/authorize';
import { notImplementedError } from '../../hooks/commonError';

module.exports = {
  before: {
    all: [
      // authenticate('jwt'),
    ],
    find: [
      (hook) => authorize(hook, [
        authenticate('jwt'),
      ]),
    ],
    get: [
      (hook) => authorize(hook, [
        notImplementedError,
      ]),
    ],
    create: [
      (hook) => authorize(hook, [
        notImplementedError,
      ]),
    ],
    update: [
      (hook) => authorize(hook, [
        notImplementedError,
      ]),
    ],
    patch: [
      (hook) => authorize(hook, [
        notImplementedError,
      ]),
    ],
    remove: [
      (hook) => authorize(hook, [
        notImplementedError,
      ]),
    ]
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
