export const requiredField = (value)=>{
    if (value) return undefined

    return `Field is required!`

}

export const maxLength30 = (value)=>{
    if (value && value.length>30) return `Max Field length is 30!`

    return undefined

}
