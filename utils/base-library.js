require('dotenv-safe').config();
module.exports = {
  async authHeaderGeneric() {
    return {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };
  },
};