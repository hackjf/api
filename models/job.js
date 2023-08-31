const knex = require('../database');

class Job {
  static create(clientId, providerId, description, hours, totalAmount) {
    return knex('jobs').insert({
      client_id: clientId,
      provider_id: providerId,
      description,
      hours,
      status: 'pending',
      total_amount: totalAmount,
      paid_amount: 0
    });
  }

  static pay(jobId, amount) {
    return knex('jobs')
      .where('id', jobId)
      .update({
        status: 'completed',
        paid_amount: amount
      });
  }
}

module.exports = Job;
