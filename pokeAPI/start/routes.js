'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

//Route.get('pokemons', 'PokemonController.index')
Route.get('pokemon/:id', 'PokemonController.show')
Route.delete('pokemon/:id', 'PokemonController.destroy')
Route.patch('pokemon/:id', 'PokemonController.update')
Route.get('pokemons', 'PokemonController.search')
Route.post('pokemon', 'PokemonController.create')
Route.get('categories', 'CategoryController.index')
Route.get('types', 'TypeController.index')
Route.post('user', 'UserController.post')
Route.post('login', 'UserController.login').as('loginJwt')
Route.get('user/:id', 'UserController.show').as('profileJwt').middleware(['auth:jwt'])





