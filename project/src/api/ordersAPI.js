import baseRout from "./baseRout"

export const newOrder = (email, masterName, serviceName, orderDate, orderTime) => {
    return baseRout.post("neworder", {email, masterName, serviceName, orderDate, orderTime}).then(response => {return response.data})
    
}

export const getOrders = () => {
    return baseRout.get("getorders").then(response => {return response.data})
}


export const delOrders = (orderId) => {
    return baseRout.delete(`delorders/${orderId}`).then(response => {return response.data})
}
