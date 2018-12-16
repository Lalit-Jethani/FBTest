import {
    RECEIVED_GISTS_USER,
    ERROR_GISTS_USER,
    REQUEST_GISTS_USER,
} from '../actions/types'

const defaultState = {
    results: [],
    user: undefined,
    isLoading: false,
    error: undefined
};

const gistsForUser = (state = defaultState, action) => {
    switch (action.type) {
        case REQUEST_GISTS_USER:
            return {
                ...state,
                user: undefined,
                    isLoading: true,
                error: undefined,
                results: []
            }
        case RECEIVED_GISTS_USER:
            return {
                ...state,
                user: action.payload.user,
                isLoading: false,
                error: undefined,
                results: action.payload.results
            }
        case ERROR_GISTS_USER:
            return {
                ...state,
                username: action.payload.user,
                isLoading: false,
                error: action.payload.error,
                results: []
            }
        default:
            return state;
    }
}

export default gistsForUser;
