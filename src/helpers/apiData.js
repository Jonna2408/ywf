import axios from "axios";

const baseURL = "";

const apiData = axios.create({baseURL});


export default apiData;