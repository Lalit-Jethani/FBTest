import axios from 'axios';
import {
    SAVE_FB,
} from '../actions/types';

export const saveFB = (fbData) => {
    return dispatch => {
                    dispatch({ type: SAVE_FB, payload: fbData });
                }
            }
