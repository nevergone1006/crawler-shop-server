/**
 * Chains hooks.
 *
 * @param hook hook object
 * @param hookFuncs array of hook functions
 */

const chain = async (hook, hookFuncs) => {
  let arg = hook;
  let result;
  // eslint-disable-next-line no-restricted-syntax
  for (const hookFunc of hookFuncs) {
    result = hookFunc(arg);
    if (result instanceof Promise) {
      result = await result; // eslint-disable-line
    }
    if (result && result.flag !== 'force-accepted') {
      if (typeof result === 'object') {
        arg = result;
      }
    } else {
      break;
    }
  }
  return arg;
};

export default chain;
