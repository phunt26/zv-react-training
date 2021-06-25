import axios from 'axios';


const URL = 'http://localhost:9000';
export const loginCall = (payLoad) => axios.post(`${URL}/login`, payLoad);



  