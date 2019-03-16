'use strict'

const Pokemon = use('App/Models/Pokemon')
const Category = use('App/Models/Category')
const PokemonType = use('App/Models/PokemonType')
const Type = use('App/Models/Type')

class PokemonController {

    async index() {
        const pokemon = await Pokemon
            .query()
            .with('category')
            .with('type')
            .fetch()
        return pokemon
    }

    async show({ params }) {
        const { id } = params
        const pokemon = await Pokemon.find(id)
        const pokemonCategory = await pokemon.category().fetch()
        const type = await pokemon.type().fetch()
        return {
            id: pokemon.id,
            name: pokemon.name,
            image_url: pokemon.image_url,
            description: pokemon.description,
            type: type,
            category: pokemonCategory,
            latitude: pokemon.latitude,
            longitude: pokemon.longitude,
        }
    }

    async search({ request }) {
        const { name_like, category, type_in, limit } = request.get()
        let pokemon = Pokemon
            .query()
            .with('category')
            .with('type')
        if (category) {
            pokemon = pokemon.where('category_id', category)
        }
        if (type_in) {
            pokemon = pokemon.whereHas('type', (builder) => {
                builder.whereIn('type_id', JSON.parse(type_in))
            })
        }
        return await pokemon.whereRaw(`name LIKE '%${name_like ? name_like : ''}%'`).limit(limit).fetch()
    }

    async create({ request }) {
        const { name, image_url, category_id, description, latitude, longitude, type } = request.post()
        const pokemons = await Pokemon.create({
            name: name,
            image_url: image_url,
            category_id: category_id,
            description: description,
            latitude: latitude,
            longitude: longitude,
        })
        const pokemon = await Pokemon.findBy('name', name)
        await pokemon.type().attach(type)
    }

    async destroy({ params }) {
        const { id } = params
        const pokemon = await Pokemon.find(id)
        await pokemon.type().detach()
        await pokemon.delete()
    }
    async update({ params, request }) {
        const { name, image_url, category_id, description, latitude, longitude, type } = request.post()
        const { id } = params
        const pokemon = await Pokemon.find(id)
        pokemon.name = name
        pokemon.image_url = image_url
        pokemon.category_id = category_id
        pokemon.description = description
        pokemon.latitude = latitude
        pokemon.longitude = longitude
        await pokemon.type().detach()
        await pokemon.save()
        await pokemon.type().attach(type)
    }

}

module.exports = PokemonController
