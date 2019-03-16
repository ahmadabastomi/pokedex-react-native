'use strict'

/*
|--------------------------------------------------------------------------
| TypeSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Type = use('App/Models/Type')


class TypeSeeder {
  async run() {
    // for (let i = 0; i < myType.length; i++) {
    //   await Type.create({
    //     id: myType[i].id,
    //     name: myType[i].name,
    //   })
    // }
  }
}

const myType = [
  {
    name: 'Grass',
  },
  {
    name: 'Poison',
  },
  {
    name: 'Fire',
  },
  {
    name: 'Water',
  },
  {
    name: 'Bug',
  },
  {
    name: 'Normal',
  },
  {
    name: 'Flying',
  },
  {
    name: 'Electric',
  },
  {
    name: 'Ground',
  },
  {
    name: 'Fairy',
  },
]



module.exports = TypeSeeder
