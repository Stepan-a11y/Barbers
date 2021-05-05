import baseRout from "./baseRout"

export const getUsers = () => {
    return baseRout.get("getusers").then(response => {return response.data})
}


export const updUser = (userId, firstName, lastName) => {
    return baseRout.put("upduser", {userId, firstName, lastName}).then(response => {return response.data})
}