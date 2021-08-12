
export const verifiKey = () => {

    localStorage.setItem('sessionKey', '242535435')
    localStorage.removeItem('sessionKey')
     
    if (localStorage.getItem('sessionKey')) {
        return true
    }
    return false 
}