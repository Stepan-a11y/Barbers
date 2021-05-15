import * as axios from 'axios';

const baseRout = axios.create({
    baseURL: "http://localhost:3001/api/"
    }
)

export default baseRout;