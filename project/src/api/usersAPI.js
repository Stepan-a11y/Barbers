import baseRout from "./baseRout"

export const getUsers = () => {
    return baseRout.get("getusers").then(response => {return response.data})
}