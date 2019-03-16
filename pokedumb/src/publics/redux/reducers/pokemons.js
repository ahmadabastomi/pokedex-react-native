const initialState = {
    data: [],
    details: {},
    categories: [],
    types: [],
    isLoading: false,
    isError: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_POKEMONS_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'GET_POKEMONS_REJECTED':
            return {
                ...state,
                isLoading: false
            }
        case 'GET_POKEMONS_FULFILLED':
            return {
                ...state,
                isLoading: false,
                data: action.payload.data
            }
        case 'GET_POKEMON_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'GET_POKEMON_REJECTED':
            return {
                ...state,
                isLoading: false
            }
        case 'GET_POKEMON_FULFILLED':
            return {
                ...state,
                isLoading: false,
                details: action.payload.data
            }
        case 'GET_CATEGORIES_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'GET_CATEGORIES_REJECTED':
            return {
                ...state,
                isLoading: false
            }
        case 'GET_CATEGORIES_FULFILLED':
            return {
                ...state,
                isLoading: false,
                categories: action.payload.data
            }
        case 'GET_TYPES_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'GET_TYPES_REJECTED':
            return {
                ...state,
                isLoading: false
            }
        case 'GET_TYPES_FULFILLED':
            return {
                ...state,
                isLoading: false,
                types: action.payload.data
            }
        case 'POST_POKEMON_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'POST_POKEMON_REJECTED':
            return {
                ...state,
                isLoading: false
            }
        case 'POST_POKEMON_FULFILLED':
            return {
                ...state,
                isLoading: false,
            }
        case 'DELETE_POKEMON_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'DELETE_POKEMON_REJECTED':
            return {
                ...state,
                isLoading: false
            }
        case 'DELETE_POKEMON_FULFILLED':
            return {
                ...state,
                isLoading: false,
            }
        case 'PATCH_POKEMON_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'PATCH_POKEMON_REJECTED':
            return {
                ...state,
                isLoading: false
            }
        case 'PATCH_POKEMON_FULFILLED':
            return {
                ...state,
                isLoading: false,
            }
        default:
            return state
    }
}

