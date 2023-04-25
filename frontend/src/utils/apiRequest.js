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
