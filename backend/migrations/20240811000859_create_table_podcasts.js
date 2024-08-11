/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('podcasts', table => {
        table.increments('id').primary()
        table.string('title').notNullable()
        table.string('path').notNullable().unique()
        table.string('description')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('podcasts')
};
