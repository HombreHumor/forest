import axios from 'axios';

axios.defaults.baseURL = 'https://webdev-api.loftschool.com/';
axios.interceptors.response.use(
  response => {
    return response;
  }, 
  error => {
    const ttl = parseInt(localStorage.getItem('ttl'));
    const DateNowInSeconds = Math.floor(Date.now() / 1000);
    const originalRequest = error.config;
    const timeMarginForSure = 10;

    if (DateNowInSeconds > ttl - timeMarginForSure && error.response.status === 401) {
      return axios.post('/refreshToken').then(
        response => {
          const token = response.data.token;
          const ttl = Math.floor(Date.now() / 1000 + response.data.ttl);
          
          localStorage.setItem('token', token);
          localStorage.setItem('ttl', ttl);

          axios.defaults.headers['Authorization'] = `Bearer ${token}`;
          originalRequest.headers['Authorization'] = `Bearer ${token}`;

          return axios(originalRequest);
        },
        error => {

        }
      );
    }

    return Promise.reject(error);
  }
);

export default axios;