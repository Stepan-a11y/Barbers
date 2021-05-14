import * as axios from 'axios';

const baseRout = axios.create({
    baseURL: "api/"
    }
)

export default baseRout;