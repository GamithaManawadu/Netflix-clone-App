import axios from "axios";

//make requests to movie databse 
const instance = axios.create({
    baseURL : "https://api.themoviedb.org/3",
});

export default instance;