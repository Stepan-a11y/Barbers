import baseRout from "./baseRout"

export const newOrder = (email, masterName, serviceName, orderDate) => {
    return baseRout.post("neworder", {email, masterName, serviceName, orderDate}).then(response => {return response.data})
    
}

export const getOrders = () => {
    return baseRout.get("getorders").then(response => {return response.data})
}