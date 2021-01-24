import baseRout from "./baseRout"


export const login = (email, password) => {
    return baseRout.post("login", {email, password}).then(response => {return response.data})
    
}