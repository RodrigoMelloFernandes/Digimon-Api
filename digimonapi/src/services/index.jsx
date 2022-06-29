import axios from "axios";

const api = axios.create({
    baseURL : 'https://digimon-api.vercel.app/api/'

});

export default api;