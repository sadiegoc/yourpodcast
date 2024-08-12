/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('users_podcasts', table => {
        table.integer('userId').unsigned().primary().notNullable()
        table.integer('podcastId').unsigned().primary().notNullable()
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
