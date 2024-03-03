import axios from "axios";
// const GIVEAWAY_BASE_URL = "https://giveway.vrcscan.com/api";
// const BASE_URL = "http://localhost:3200/"
const BASE_URL = "http://localhost:3031/api/"

// const BASE_URL = "http://192.168.100.11:3444/api/"
// const BASE_URL = "http://192.168.100.119:3444/api/"


export const APIinstance = axios.create({
    baseURL: `${BASE_URL}`
})
