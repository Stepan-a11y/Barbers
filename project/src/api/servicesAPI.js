import baseRout from "./baseRout"

export const getServices = () => {
    return baseRout.get("services").then(response => {return response.data})
}