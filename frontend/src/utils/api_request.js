import axios from 'axios';


const apiUrl = 'http://localhost:5000';

function apiRequest(method, endpoint, data, params) {
    const headers = {
        'Content-Type': 'application/json'
    };

    return axios({
        url: apiUrl + endpoint,
        method: method,
        headers: headers,
        params: params,
        data: data
    });
}

export default apiRequest;

/*export default {
    get: (...args) => request('get', ...args),
    post: (...args) => request('post', ...args),
    put: (...args) => request('put', ...args),
    patch: (...args) => request('patch', ...args),
    delete: (...args) => request('delete', ...args),
}*/
