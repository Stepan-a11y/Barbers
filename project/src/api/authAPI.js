import baseRout from "./baseRout"


export const login = (email, password) => {
    return baseRout.post("login", {email, password}).then(response => {return response.data})
    
}


export const auth = () => {
    return baseRout.get("auth", {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}}).then(response => {return response.data})
}


export const registration = (firstName, lastName, email, password) => {
    return baseRout.post("registration", {firstName, lastName, email, password}).then(response => {return response.data})
}