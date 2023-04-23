import { useReducer, useCallback } from 'react';

import apiRequest from 'utils/api_request';


function apiReducer(state, action) {
    if (action.type === 'SEND') {
        return {
            status: 'pending',
            data: null,
            error: null
        };
    }

    if (action.type === 'SUCCESS') {
        return {
            status: 'completed',
            data: action.data,
            error: null
        };
    }

    if (action.type === 'ERROR') {
        return {
            status: 'error',
            data: null,
            error: action.error
        };
    }

    return state;
}

function useApi(method, endpoint, data, params) {
    const [state, dispatch] = useReducer(apiReducer, {
        status: null,
        data: null,
        error: null
    });

    const request = useCallback(async function (data) {
        dispatch({ type: 'SEND' });

        try {
            const response = await apiRequest(method, endpoint, data, params);

            dispatch({
                 type: 'SUCCESS',
                 data: response.data
             });
        } catch (error) {
            dispatch({
                type: 'ERROR',
                error: error.message || 'Algo salió mal!'
            });
        }
    }, []);

    return [
        request,
        state.status,
        state.data,
        state.error
    ];
}

/* eslint-disable react-hooks/rules-of-hooks */
export default {
    get: (...args) => useApi('get', ...args),
    post: (...args) => useApi('post', ...args),
    put: (...args) => useApi('put', ...args),
    patch: (...args) => useApi('patch', ...args),
    delete: (...args) => useApi('delete', ...args),
}
