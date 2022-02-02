export function textDots(input,numberOfChar=15){
    return `${input.slice(0,numberOfChar)} ${input.length > numberOfChar ?  "..." : " "}`
}
export function textDots2(string,numberOfChar){
    let str = string.slice(0,numberOfChar)
    return `${str} ${string.length > numberOfChar ? "..." : "" }`    
}