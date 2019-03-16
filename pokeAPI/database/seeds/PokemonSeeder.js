'use strict'

/*
|--------------------------------------------------------------------------
| PokemonSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Pokemon = use('App/Models/Pokemon')

class PokemonSeeder {
  // async run() {
  //   for (let i = 0; i < myPokemon.length; i++) {
  //     let latitude = (Math.random() * (-6.5 - (-6)) + (-6)).toFixed(5) * 1
  //     let longitude = (Math.random() * (107 - 106) + 106).toFixed(5) * 1
  //     const pokemons = await Pokemon.create({
  //       name: myPokemon[i].name,
  //       image_url: myPokemon[i].image_url,
  //       category_id: myPokemon[i].category_id,
  //       description: myPokemon[i].description,
  //       latitude: latitude,
  //       longitude: longitude,
  //     })
  //     const pokemon = await Pokemon.findBy('name', myPokemon[i].name)
  //     await pokemon.type().attach(myPokemon[i].type)
  //   }
  // }
}

// const myPokemon = [
//   {
//     name: 'Bulbasaur',
//     image_url: 'https://img.pokemondb.net/artwork/bulbasaur.jpg',
//     category_id: 1,
//     type: [1, 2],
//     description: 'A strange seed was planted on its back at birth. The plant sprouts and grows with this POKéMON.',
//     latitude: '14.123',
//     longitude: '12.12',
//   },
//   {
//     name: 'Charmander',
//     image_url: 'https://img.pokemondb.net/artwork/charmander.jpg',
//     category_id: 2,
//     type: [3],
//     description: 'Obviously prefers hot places. When it rains, steam is said to spout from the tip of its tail.',
//     latitude: '14.123',
//     longitude: '12.12',
//   },
//   {
//     name: 'Squirtle',
//     image_url: 'https://img.pokemondb.net/artwork/squirtle.jpg',
//     category_id: 3,
//     type: [4],
//     description: 'After birth, its back swells and hardens into a shell. Powerfully sprays foam from its mouth.',
//     latitude: '14.123',
//     longitude: '12.12',
//   },
//   {
//     name: 'Caterpie',
//     image_url: 'https://img.pokemondb.net/artwork/caterpie.jpg',
//     category_id: 4,
//     type: [5],
//     description: 'Its short feet are tipped with suction pads that enable it to tirelessly climb slopes and walls.',
//     latitude: '14.123',
//     longitude: '12.12',
//   },
//   {
//     name: 'Weedle',
//     image_url: 'https://img.pokemondb.net/artwork/weedle.jpg',
//     category_id: 5,
//     type: [5],
//     description: 'Often found in forests, eating leaves. It has a sharp venomous stinger on its head.',
//     latitude: '14.123',
//     longitude: '12.12',
//   },
//   {
//     name: 'Pidgey',
//     image_url: 'https://img.pokemondb.net/artwork/pidgey.jpg',
//     category_id: 6,
//     type: [6, 7],
//     description: 'A common sight in forests and woods. It flaps its wings at ground level to kick up blinding sand.',
//     latitude: '14.123',
//     longitude: '12.12',
//   },
//   {
//     name: 'Rattata',
//     image_url: 'https://img.pokemondb.net/artwork/rattata.jpg',
//     category_id: 7,
//     type: [6],
//     description: 'Bites anything when it attacks. Small and very quick, it is a common sight in many places.',
//     latitude: '14.123',
//     longitude: '12.12',
//   },
//   {
//     name: 'Spearow',
//     image_url: 'https://img.pokemondb.net/artwork/spearow.jpg',
//     category_id: 6,
//     type: [6, 7],
//     description: 'Eats bugs in grassy areas. It has to flap its short wings at high speed to stay airborne.',
//     latitude: '14.123',
//     longitude: '12.12',
//   },
//   {
//     name: 'Ekans',
//     image_url: 'https://img.pokemondb.net/artwork/ekans.jpg',
//     category_id: 8,
//     type: [2],
//     description: 'Moves silently and stealthily. Eats the eggs of birds, such as PIDGEY and SPEAROW, whole.',
//     latitude: '14.123',
//     longitude: '12.12',
//   },
//   {
//     name: 'Pikachu',
//     image_url: 'https://img.pokemondb.net/artwork/pikachu.jpg',
//     category_id: 7,
//     type: [8],
//     description: 'When several of these POKéMON gather, their electricity could build and cause lightning storms.',
//     latitude: '14.123',
//     longitude: '12.12',
//   },
// ]

const myPokemon = [
  {
    name: 'Snorlax',
    image_url: 'https://img.pokemondb.net/artwork/snorlax.jpg',
    category_id: 1,
    type: [6],
    description: 'Very lazy. Just eats and sleeps. As its rotund bulk builds, it becomes steadily more slothful.',
    latitude: '14.123',
    longitude: '12.12',
  },
  {
    name: 'Articuno',
    image_url: 'https://img.pokemondb.net/artwork/articuno.jpg',
    category_id: 2,
    type: [4, 7],
    description: 'A legendary bird POKéMON that is said to appear to doomed people who are lost in icy mountains.',
    latitude: '14.123',
    longitude: '12.12',
  },
  {
    name: 'Vaporeon',
    image_url: 'https://img.pokemondb.net/artwork/vaporeon.jpg',
    category_id: 3,
    type: [4],
    description: 'Lives close to water. Its long tail is ridged with a fin which is often mistaken for a mermaids.',
    latitude: '14.123',
    longitude: '12.12',
  },
  {
    name: 'Dragonite',
    image_url: 'https://img.pokemondb.net/artwork/dragonite.jpg',
    category_id: 4,
    type: [5],
    description: 'An extremely rarely seen marine POKéMON. Its intelligence is said to match that of humans.',
    latitude: '14.123',
    longitude: '12.12',
  },
  {
    name: 'Mewtwo',
    image_url: 'https://img.pokemondb.net/artwork/mewtwo.jpg',
    category_id: 5,
    type: [5],
    description: 'It was created by a scientist after years of horrific gene splicing and DNA engineering experiments.',
    latitude: '14.123',
    longitude: '12.12',
  },
  {
    name: 'Zapdos',
    image_url: 'https://img.pokemondb.net/artwork/zapdos.jpg',
    category_id: 6,
    type: [6, 7],
    description: 'A legendary bird POKéMON that is said to appear from clouds while dropping enormous lightning bolts.',
    latitude: '14.123',
    longitude: '12.12',
  },
  {
    name: 'Moltres',
    image_url: 'https://img.pokemondb.net/artwork/moltres.jpg',
    category_id: 7,
    type: [6],
    description: 'Known as the legendary bird of fire. Every flap of its wings creates a dazzling flash of flames.',
    latitude: '14.123',
    longitude: '12.12',
  },
  {
    name: 'Mew',
    image_url: 'https://img.pokemondb.net/artwork/mew.jpg',
    category_id: 6,
    type: [6, 7],
    description: 'So rare that it is still said to be a mirage by many experts. Only a few people have seen it worldwide.',
    latitude: '14.123',
    longitude: '12.12',
  },
  {
    name: 'Aerodactyl',
    image_url: 'https://img.pokemondb.net/artwork/aerodactyl.jpg',
    category_id: 8,
    type: [2],
    description: 'A ferocious, prehistoric POKéMON that goes for the enemys throat with its serrated saw-like fangs.',
    latitude: '14.123',
    longitude: '12.12',
  },
  {
    name: 'Scyther',
    image_url: 'https://img.pokemondb.net/artwork/scyther.jpg',
    category_id: 7,
    type: [8],
    description: 'With ninja-like agility and speed, it can create the illusion that there is more than one.',
    latitude: '14.123',
    longitude: '12.12',
  },
]

module.exports = PokemonSeeder
