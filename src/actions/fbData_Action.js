import axios from 'axios';
import {
    SAVE_FB,
    CLEAR_FB
} from '../actions/types';

export const saveFB = (fbData) => {
    return dispatch => {
                    dispatch({ type: SAVE_FB, payload: fbData });
                }
            }

            export const clearFB = (fbData) => {
                return dispatch => {
                                dispatch({ type: CLEAR_FB, payload: {
                                    photos : { data : [],

                                    },
                                    name : undefined
                                } });
                            }
                        }
