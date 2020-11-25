module.exports = {
  apps : [{
    name: 'crawler-server',
    script: 'npm',
    args: 'start',
    env: {
      NODE_ENV: 'development',
    }
  }]
};
