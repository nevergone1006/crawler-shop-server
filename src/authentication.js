import { JWTStrategy } from '@feathersjs/authentication';
import { LocalStrategy } from'@feathersjs/authentication-local';
import { expressOauth } from '@feathersjs/authentication-oauth';
import MyAuthService from './authentication/MyAuthService';

module.exports = app => {
  const authentication = new MyAuthService(app);

  authentication.register('jwt', new JWTStrategy());
  authentication.register('local', new LocalStrategy());

  app.use('/authentication', authentication);
  app.configure(expressOauth());
};
