let phrase="Aba"

let reverseString = str => {
    let fow = str.toLowerCase().split("")
    let rev = str.toLowerCase().split("").reverse()

    for(let i=0; i<fow.length; i++){
        if(fow[i] !== rev[i]){
            return false
        }
    }
    return true
}

console.log(reverseString(phrase))