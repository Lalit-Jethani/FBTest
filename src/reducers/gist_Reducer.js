import {
    RECEIVED_GIST,
    REQUEST_GIST,
    ERROR_GIST
} from '../actions/types'

const defaultState = {
    gistID: undefined,
    results: {},
    isLoading: false,
    error: undefined
};

const gistInfo = (state = defaultState, action) => {
    switch (action.type) {
        case REQUEST_GIST:
            return {
                ...state,
                gistID: undefined,
                isLoading: true,
                error: undefined,
                results: {}
            }
        case RECEIVED_GIST:
            return {
                ...state,
                gistID: action.payload.gistID,
                results: action.payload.results,
                isLoading: false
            }
        case ERROR_GIST:
            return Object.assign({}, state, {
                gistID: action.payload.gistID,
                error: action.payload.error,
                isLoading: true,
                results: {}
            })
        default:
            return state;
    }
}

export default gistInfo;
