import axios from 'axios';
import {
    RECEIVED_GISTS_USER,
    ERROR_GISTS_USER,
    REQUEST_GISTS_USER
} from './types';

const ROOT_URL_GISTS = 'https://api.github.com';

export const getGistsForUser = (user) => {
    return dispatch => {
        if (user) {
            dispatch({ type: REQUEST_GISTS_USER });
            axios.get(`${ROOT_URL_GISTS}/users/${user}/gists`)
                .then(response => {
                    if (response.status === 200) {
                        if (response.data.length > 0) {
                            dispatch({ type: RECEIVED_GISTS_USER, payload :{ results: response.data, user } });
                        } else {
                            dispatch({ type: ERROR_GISTS_USER, payload :{ error: 'No gists available for the user', username: user } });
                        }
                    }
                })
                .catch(error => {
                    console.log(error);
                    const err = error.response.status === 404 ? 'User not found.' : error.message;
                    dispatch({ type: ERROR_GISTS_USER, payload :{ error: err, user } });
                });

        } else {
            dispatch({ type: ERROR_GISTS_USER, payload :{ error: 'Please Enter a UserName', user } });
        }

    };
};

