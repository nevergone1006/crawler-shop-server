const app = require('../../src/app');

describe('\'shops\' service', () => {
  it('registered the service', () => {
    const service = app.service('shops');
    expect(service).toBeTruthy();
  });
});
