const knex = require('../database');

class User {
  static searchProviders(skills) {
    return knex('users').whereRaw('skills LIKE ?', `%${skills}%`);
  }
}

module.exports = User;
