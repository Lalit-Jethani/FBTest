import axios from 'axios';
import {
    RECEIVED_GIST,
    REQUEST_GIST,
    ERROR_GIST
} from '../actions/types';


const ROOT_URL_GISTS = 'https://api.github.com';

export const getGist = (gistID) => {
    return dispatch => {
        dispatch({ type: REQUEST_GIST });
        axios.get(`${ROOT_URL_GISTS}/gists/${gistID}`)
            .then((response) => {
                if (response.status === 200) {
                    dispatch({ type: RECEIVED_GIST, payload:{ results: response.data, gistID } });
                } else {
                    const err = response.status === 404 ? 'Gist not found.' : response.problem;
                    dispatch({ type: ERROR_GIST, error: err, gistID });
                }
            });
    };
};

