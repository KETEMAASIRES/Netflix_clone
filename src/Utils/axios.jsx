import axios from "axios";
//just like  fetch purpose //
const instance = axios.create({ baseURL: `https://api.themoviedb.org/3` });
export default instance;
