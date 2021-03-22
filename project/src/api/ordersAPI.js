import baseRout from "./baseRout"

export const newOrder = (masterName, serviceName, orderDate) => {
    return baseRout.post("neworder", {masterName, serviceName, orderDate}).then(response => {return response.data})
    
}