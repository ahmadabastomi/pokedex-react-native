'use strict'

/*
|--------------------------------------------------------------------------
| PokemonTypeSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const PokemonType = use('App/Models/PokemonType')


class PokemonTypeSeeder {
  async run() {
    // for (let i = 0; i < myPokemonType.length; i++) {
    //   await PokemonType.create({
    //     pokemon_id: myPokemonType[i].pokemon_id,
    //     type_id: myPokemonType[i].type_id,
    //   })
    // }
  }
}

const myPokemonType = [
  {
    pokemon_id: 1,
    type_id: 1
  },
  {
    pokemon_id: 1,
    type_id: 2
  },
  {
    pokemon_id: 2,
    type_id: 3
  },
  {
    pokemon_id: 3,
    type_id: 4
  },
  {
    pokemon_id: 4,
    type_id: 5
  },
  {
    pokemon_id: 5,
    type_id: 5
  },
  {
    pokemon_id: 6,
    type_id: 6
  },
  {
    pokemon_id: 6,
    type_id: 7
  },
  {
    pokemon_id: 7,
    type_id: 6
  },
  {
    pokemon_id: 8,
    type_id: 6
  },
  {
    pokemon_id: 8,
    type_id: 7
  },
  {
    pokemon_id: 9,
    type_id: 2
  },
  {
    pokemon_id: 10,
    type_id: 8
  },
]

module.exports = PokemonTypeSeeder
