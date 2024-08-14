/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('podcasts', table => {
        table.increments('id').primary()
        table.string('title').notNullable()
        table.string('description')
        table.timestamp('createdAt').notNullable().defaultTo(knex.fn.now())
        table.string('audioPath').notNullable().unique()
        table.string('thumbPath').notNullable().unique()
        table.integer('userId').unsigned().references('id').inTable('users').notNullable()
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('podcasts')
};
