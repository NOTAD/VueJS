import axios from 'axios';
// axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*' ;
//axios.defaults.baseURL = 'https://laravel-9.sndn.repl.co/';
//{ AxiosRequestConfig, AxiosResponse}
const instance = axios.create(
    {
        method: 'get',
    baseURL: 'https://laravel-9.sndn.repl.co/',
    timeout: 5000,
    headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin' : '*'

    },
});
export default instance;
