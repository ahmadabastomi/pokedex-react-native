'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PokemonSchema extends Schema {
  up() {
    this.create('pokemons', (table) => {
      table.increments()
      table.string('name', 255).notNullable()
      table.string('image_url', 255).notNullable()
      table.integer('category_id').unsigned().references('id').inTable('categories')
      table.text('description').nullable()
      table.string('latitude').nullable()
      table.string('longitude').nullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('pokemons')
  }
}

module.exports = PokemonSchema
