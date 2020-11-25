import { authenticate } from '@feathersjs/authentication';
import { hooks as authenticateLocal } from '@feathersjs/authentication-local';

const {
  hashPassword, protect
} = authenticateLocal;

import uuidv1 from 'uuid/v1';
import { assign } from 'lodash';
import authorize from '../../hooks/authorize';

module.exports = {
  before: {
    all: [
      (hook) => authorize(hook, [
        authenticate('jwt'),
      ]),
    ],
    find: [
      // authenticate('jwt'),
    ],
    get: [
      // authenticate('jwt'),
    ],
    create: [
      (hooks) => {
        assign(hooks.data, { _id: uuidv1() });
      },
      hashPassword('password'),
    ],
    update: [ hashPassword('password'),  authenticate('jwt') ],
    patch: [ hashPassword('password'),  authenticate('jwt') ],
    remove: [
      // authenticate('jwt')
    ]
  },

  after: {
    all: [ 
      // Make sure the password field is never sent to the client
      // Always must be the last hook
      protect('password')
    ],
    find: [],
    get: [],
    create: [],
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
