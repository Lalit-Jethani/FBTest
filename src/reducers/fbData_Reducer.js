import {
   SAVE_FB,
   CLEAR_FB
} from '../actions/types'

const defaultState = {
    photos: [],
    name: undefined,
};

const fbData = (state = defaultState, action) => {
    switch (action.type) {
        case SAVE_FB:
            return {
                ...state,
                photos: action.payload.photos.data,
                name: action.payload.name
            }
            case CLEAR_FB:
            return {
                ...state,
                photos: action.payload.photos.data,
                name: action.payload.name
            }
        default:
            return state;
    }
}

export default fbData;
