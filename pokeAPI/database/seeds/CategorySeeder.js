'use strict'

/*
|--------------------------------------------------------------------------
| CategorySeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Category = use('App/Models/Category')

class CategorySeeder {
  async run() {
    // for (let i = 0; i < myCategory.length; i++) {
    //   await Category.create({
    //     id: myCategory[i].id,
    //     name: myCategory[i].name,
    //   })
    // }
  }
}

const myCategory =
  [
    {
      name: 'Seed'
    },
    {
      name: 'Lizard'
    },
    {
      name: 'Turtle'
    },
    {
      name: 'Worm'
    },
    {
      name: 'Hairy Bug'
    },
    {
      name: 'Bird'
    },
    {
      name: 'Mouse'
    },
    {
      name: 'Snake'
    },
    {
      name: 'Fairy'
    },
    {
      name: 'Weed'
    },
  ]

module.exports = CategorySeeder
