import { AuthenticationService } from '@feathersjs/authentication';

export default class MyAuthService extends AuthenticationService {
  
  async getPayload(authResult, params) {
    // Call original `getPayload` first
    const payload = await super.getPayload(authResult, params);
    const { user } = authResult;

    if (user) {
      payload.userId = user._id;
    }

    return payload;
  }
}