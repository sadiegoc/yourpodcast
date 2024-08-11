/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('users_podcasts', table => {
        table.integer('user_id').primary().notNullable()
        table.integer('podcast_id').primary().notNullable()
        table.boolean('own').notNullable()
        table.boolean('like')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('users_podcasts')
};
