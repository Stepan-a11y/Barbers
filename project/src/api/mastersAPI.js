import baseRout from "./baseRout"

export const getMasters = () => {
    return baseRout.get("masters").then(response => {return response.data})
}

