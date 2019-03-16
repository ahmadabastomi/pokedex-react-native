import axios from 'axios'

export const getPokemons = (name, category, type, limit) => {
    return {
        type: 'GET_POKEMONS',
        payload: axios.get(`http://192.168.43.229:3334/pokemons?name_like=${name}&category=${category}&type_in=${type}&limit=${limit}`)
    }
}

export const getPokemon = (id) => {
    return {
        type: 'GET_POKEMON',
        payload: axios.get(`http://192.168.43.229:3334/pokemon/${id}`)
    }
}

export const getCategories = () => {
    return {
        type: 'GET_CATEGORIES',
        payload: axios.get(`http://192.168.43.229:3334/categories`)
    }
}

export const getTypes = () => {
    return {
        type: 'GET_TYPES',
        payload: axios.get(`http://192.168.43.229:3334/types`)
    }
}

export const postPokemon = (data) => {
    return async (dispatch) => {
        const res = await dispatch({
            type: 'POST_POKEMON',
            payload: axios.post(`http://192.168.43.229:3334/pokemon`, data)
            // { headers: { Authorization: `Bearer ${token}` } })
        })
        await dispatch(getPokemons('', '', ''))
    }
}

export const deletePokemon = (id) => {
    return async (dispatch) => {
        const res = await dispatch({
            type: 'DELETE_POKEMON',
            payload: axios.delete(`http://192.168.43.229:3334/pokemon/${id}`)
            // { headers: { Authorization: `Bearer ${token}` } })
        })
        await dispatch(getPokemons('', '', ''))
    }
}

export const patchPokemon = (id, data) => {
    return async (dispatch) => {
        const res = await dispatch({
            type: 'PATCH_POKEMON',
            payload: axios.patch(`http://192.168.43.229:3334/pokemon/${id}`, data)
            // { headers: { Authorization: `Bearer ${token}` } })
        })
        await dispatch(getPokemon(id))
        await dispatch(getPokemons('', '', ''))
    }
}

