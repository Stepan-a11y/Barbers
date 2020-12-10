import * as axios from 'axios';

const baseRout = axios.create({
    baseURL: "http://127.0.0.1:3001/api/"
    }
)

export const getMasters = () => {
    return baseRout.get("masters").then(response => {return response.data})
}

