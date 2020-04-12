import axios from 'axios';

const axiosFetch = axios.create({
    baseURL: `${window.location.origin}/api/`, //адрес, на котором мы находимся. Зпросы шлем себе
    timeout: 5000, //запросы больше 2 сек не ждем
    withCredentials: true //посылаем запросы с куками
});

export default axiosFetch;

// fetch ('/user').then((response)=>{
//     return response.json()
// }).then((res)=>{
// }); //так раньше делались запросы

// axios ('./user').then((response)=>{
//     response.data;
// }); //так делает axios
