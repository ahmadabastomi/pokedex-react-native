import { combineReducers } from 'redux'

import users from './users'
import pokemons from './pokemons'

const appReducer = combineReducers({
    users,
    pokemons,
})

export default appReducer