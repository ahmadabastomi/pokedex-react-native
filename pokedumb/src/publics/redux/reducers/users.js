const initialState = {
    data: {},
    user: {},
    token: '',
    isLoading: false,
    isError: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'POST_USER_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'POST_USER_REJECTED':
            return {
                ...state,
                isLoading: false
            }
        case 'POST_USER_FULFILLED':
            return {
                ...state,
                isLoading: false,
            }
        case 'POST_LOGIN_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'POST_LOGIN_REJECTED':
            return {
                ...state,
                isLoading: false,
                data: action.payload.data
            }
        case 'POST_LOGIN_FULFILLED':
            return {
                ...state,
                isLoading: false,
                data: action.payload.data
            }
        case 'GET_USER_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'GET_USER_REJECTED':
            return {
                ...state,
                isLoading: false,
            }
        case 'GET_USER_FULFILLED':
            return {
                ...state,
                isLoading: false,
                user: action.payload.data
            }
        case 'SAVE_TOKEN':
            return {
                ...state,
                isLoading: false,
                token: action.payload.data
            }
        default:
            return state
    }
}