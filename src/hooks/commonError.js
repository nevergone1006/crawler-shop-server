import errors from '@feathersjs/errors';

export const forbiddenError = () => {
  throw new errors.Forbidden();
};

export const notImplementedError = () => {
  throw new errors.NotImplemented();
};
