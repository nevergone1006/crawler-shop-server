// A hook that logs service method before, after and error
// See https://github.com/winstonjs/winston for documentation
// about the logger.
import logger from '../logger';
import util from  'util';

// To see more detailed messages, uncomment the following line:
// logger.level = 'debug';

module.exports = function () {
  return context => {
    // This debugs the service call and a stringified version of the hook context
    // You can customize the message (and logger) to your needs
    logger.info(`${context.type} app.service('${context.path}').${context.method}()`);
		
    if(typeof context.toJSON === 'function' && logger.level === 'debug') {
      logger.info('Hook Context', util.inspect(context, {colors: false}));
    }
		
    if(context.error && !context.result) {
      logger.error(context.error.stack);
    }
  };
};
