import axios from 'axios'
import { getPokemons } from './pokemons'

export const storageToken = (token) => {
    return async (dispatch) => {
        const res = await dispatch({
            type: 'SAVE_TOKEN',
            payload: token
        })
        await dispatch(getPokemons('', '', ''))
    }
}

export const postUser = (data) => {
    return {
        type: 'POST_USER',
        payload: axios.post('http://192.168.43.229:3334/user',
            data
        )
    }
}

export const getUser = (id, token) => {
    return {
        type: 'GET_USER',
        payload: axios.get(`http://192.168.43.229:3334/user/${id}`,
            { headers: { Authorization: `Bearer ${token}` } }
        )
    }
}

export const postLogin = (data) => {
    return async (dispatch) => {
        const res = await dispatch({
            type: 'POST_LOGIN',
            payload: axios.post('http://192.168.43.229:3334/login', data
            )
        })
        await dispatch(getUser(res.value.data.id, res.value.data.token))
    }
}