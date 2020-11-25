import chain from './chain';

export const authorizeServer = (context) => {
  if (!context.params.provider) {
    context.flag = 'force-accepted';
    return context;
  }
  return context;
};


const authorize = async (hook, hookFuncs) => {
  
  await chain(hook, [
    authorizeServer,
  ].concat(hookFuncs));

  return hook;
};

export default authorize;
