exports.up = function(knex) {
    return knex.schema.createTable('jobs', function(table) {
      table.increments('id').primary();
      table.integer('client_id').unsigned().references('users.id');
      table.integer('provider_id').unsigned().references('users.id');
      table.string('description');
      table.integer('hours');
      table.string('status');
      table.decimal('total_amount');
      table.decimal('paid_amount');
    });
  };
  