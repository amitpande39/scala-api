/* eslint-disable no-undef */
const fs = require('fs');

const environmentName = process.env.TEST_ENV;

switch (environmentName) {
  case 'staging':
    fs.copyFileSync('./.env.staging', './.env');
    break;
  case 'sandbox':
    fs.copyFileSync('./.env.sandbox', './.env');
    break;
  default:
    fs.copyFileSync('./.env.staging', './.env');
    break;
}
